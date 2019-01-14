//(if collecting data with php/server instead of MTurk)
// var experimentName = "snpi-pnq-exp2-demo";
// var submitAddress = "https://web.stanford.edu/~sunwooj/cgi-bin/process.php";


// List of stimuli

var stimuliList = shuffle([ 

[["Sally", ["evenh-praise-pq-c1", "evenh-praise-pnq-c1", "evenh-praise-evenq-c1", "evenh-praise-evenpnq-c1"], "evenh-praise-c2-pos", "Paul might have praised Minta", "Paul DIDN'T praise Minta", "Paul praised Minta", "Lenny"],
["Matt", ["evenh-read-pq-c1", "evenh-read-pnq-c1", "evenh-read-evenq-c1", "evenh-read-evenpnq-c1"], "evenh-read-c2-pos", "Jasper might have read the longest book", "Jasper DIDN'T read the longest book", "Jasper read the longest book", "Rochelle"]],

[["Jacob", ["evenl-smallest-pnq-c1", "evenl-smallest-evenq-c1", "evenl-smallest-evenpnq-c1", "evenl-smallest-pq-c1"], "evenl-smallest-c2-neg", "the leftover might have filled some small container", "the leftover DIDN'T fill a container", "the leftover filled a container, at least the smallest one", "Anna"],
["Carrie", ["evenl-hint-pnq-c1", "evenl-hint-evenq-c1", "evenl-hint-evenpnq-c1", "evenl-hint-pq-c1"], "evenl-hint-c2-neg", "Jim might have shown some amount of remorse", "Jim DIDN'T show much remorse", "Jim showed some amount of remorse, at least a little bit", "David"]],

[["Andrew", ["mnpi-clue-evenq-c1", "mnpi-clue-evenpnq-c1", "mnpi-clue-pq-c1", "mnpi-clue-pnq-c1"], "mnpi-clue-c2-neg", "Henry might know how she feels", "Henry DOESN'T know how she feels", "Henry knows how Marianna feels, at least a little", "Prue"],
["Alice", ["mnpi-wink-evenq-c1", "mnpi-wink-evenpnq-c1", "mnpi-wink-pq-c1", "mnpi-wink-pnq-c1"], "mnpi-wink-c2-neg", "Jane might have slept", "Jane DIDN'T sleep much", "Jane slept, at least a little", "Mark"]],

[["Lily", ["snpi-anything-evenpnq-c1", "snpi-anything-pq2-c1", "snpi-anything-pnq2-c1", "snpi-anything-evenq-c1"], "snpi-anything-c2-neg", "Nora might have brought something", "Nora DIDN'T bring much", "Nora brought something, at least a small thing", "Max"],
["Roy", ["snpi-ever-evenpnq-c1", "snpi-ever-pq-c1", "snpi-ever-pnq-c1", "snpi-ever-evenq-c1"], "snpi-ever-c2-neg", "Sally might have been abroad", "Sally HASN'T been abroad", "Sally has been abroad, at least once or twice", "Alice"]]

]);



var data = {}; 
var trialnum = 0;


$(document).ready(function() {
    showSlide("intro");
    $('#gotoInstructions').click(function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide('instructions');
    });

    
    $('#startbutton').click(function() {
        stepExperiment();
    });
});

function showSlide (slideName) {
    $('.slide').hide();
    $('#' + slideName).show();
}



var stimRandom = Math.floor(Math.random() * 2);
var qtypeRandom = Math.floor(Math.random() * 4);


function stepExperiment () {
    if (trialnum == 4) { // end the experiment. 
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide("language");
        $('#lgsubmit').click(function() {
            var eval = $('.ev:checked').val();
            var nat = $('.nat:checked').val();
            var age = $('.age:checked').val();
            var gender = $('.gen:checked').val();
            var race = $('.eth:checked').val();
            var region = $('.reg:checked').val();

            var gend_com = $('#ogen_com').val();
            gend_com = gend_com.replace (/,/g, "");
            var race_com = $('#oeth_com').val();
            race_com = race_com.replace (/,/g, "");
            var reg_com = $('#reg_com').val();
            reg_com = reg_com.replace (/,/g, "");
            var gen_com = $('#lang_com').val();
            gen_com = gen_com.replace (/,/g, "");

			if ($('.nat:checked').length > 0 && $('.age:checked').length > 0 && $('.gen:checked').length > 0 && $('.eth:checked').length > 0) {

            data.nat = nat;
            data.age = age;
            data.gender = gender;
            data.gendComments = gend_com;
            data.race = race;
            data.raceComments = race_com;
			data.region = region;
			data.genComments = reg_com;

			showSlide('finish');
			setTimeout(function() { turk.submit(data)}, 1000); 
                
            } 

            else {
                demoWarning = "Please complete the questionnaire in order to finish the experiment and submit the HIT.";
            $("#demoWarning").html(demoWarning);
            document.body.scrollTop = document.body.scrollHeight;
            }

            } ) }
 
    else {

        trialnum += 1;
        stimuliSet = stimuliList[trialnum-1];
        stimuliVector = stimuliSet[stimRandom];
        name1Stim = stimuliVector[0];
        qtypeVector = stimuliVector[1];
        qtypeStim = qtypeVector[qtypeRandom];
        pic2Stim = stimuliVector[2];
        sent1Stim = stimuliVector[3];
        sent2Stim = stimuliVector[4];
        sent3Stim = stimuliVector[5];
        name2Stim = stimuliVector[6];

               
        $(".item_number").html(trialnum);  

        $(".currentName1").html(name1Stim);
        $(".currentName2").html(name2Stim);

        $(".currentSent1").html(sent1Stim);
        $(".currentSent2").html(sent2Stim);
        $(".currentSent3").html(sent3Stim);


        document.body.scrollTop = document.documentElement.scrollTop = 0;

        showSlide('stage'); 

        $(".part_number").html("1");
        $('#commit').show();

        $('#prompt1').show();
        $('#prompt2').hide();

        $('#responseForm1').show();
        $('#nextpart').show();

        $('#responseForm2').hide();
        $('#continue').hide();

        document.getElementById('currentHidden').src = "../stimuli/hidden-1.png";

        document.getElementById('currentPic1').src = "../stimuli/hidden-2.png";

        document.getElementById('currentPic2').src = "../stimuli/" + qtypeStim + ".png";


        $('#nextpart').click(function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            if  (slider1.style.backgroundColor != "" && slider2.style.backgroundColor != "") {
                document.getElementById('currentPic1').src = "../stimuli/" + pic2Stim + ".png";
                $('#responseForm1').hide();
                $(".part_number").html("2");
                $('#prompt1').hide();
                $('#prompt2').show();

                $("#nextpart").unbind('click');
                $('#nextpart').hide();

                $('#responseForm2').show();
                $('#continue').show();

                $('#commit').hide();
                $("#warning").html("");
            }

            else  {
                warning = "Please answer the question to continue. Make sure that you have dragged or clicked on the slider button so that the slider is colored and the button displays numeric values.";
                $("#warning").html(warning);
                document.body.scrollTop = document.body.scrollHeight;
            }
        });


        $('#continue').click(function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            var sliderResponse1 = $('#sliderval1').val();
            var sliderResponse2 = $('#sliderval2').val();
            var sliderResponse3 = $('#sliderval3').val();
            var sliderResponse4 = $('#sliderval4').val();
            var sliderResponse5 = $('#sliderval5').val();

            var commentResponse1 = $('#commentBox1').val();
            commentResponse1 = commentResponse1.replace (/,/g, "");


            // Check for valid answers; all questions must be answered
            if  (slider1.style.backgroundColor != "" && slider2.style.backgroundColor != "" && slider3.style.backgroundColor != "" && slider4.style.backgroundColor != "" && slider5.style.backgroundColor != "") {

                // make continue button available for re-use
                $("#continue").unbind('click');
                // ensure that the comment box is emptied 
                $(".commentBox").val("");
                // erase warnings 
                $("#warning2").html("");

                    trial = {};
                    trial.name1 = name1Stim;
                    trial.qtype = qtypeStim;
                    trial.prev = pic2Stim;
                    trial.rhetorical = sliderResponse1;
                    trial.negevidential = sliderResponse2;
                    trial.posepist = sliderResponse3;
                    trial.surprise = sliderResponse4;
                    trial.indignation = sliderResponse5;
                    trial.comment = commentResponse1;
                    data["trial" + trialnum] = trial;

                refreshSlider();
            
                // Move on to the next trial
                stepExperiment();
     
                    }
            else { // If any of the questions is not answered:
                warning2 = "Please answer all the questions to continue. Make sure that you have dragged or clicked on the slider buttons so that the sliders are colored and the buttons display numeric values.";
                $("#warning2").html(warning2);
                document.body.scrollTop = document.body.scrollHeight;
            }
        });
    }
}


// Codes for sliders
// Slider1
$( function() {
    $( "#slider1" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {

        $("#slider1").css({"background": "#CCFFFF"});
        $("#slider1 .ui-slider-handle").css({
                      "background": "#E0F5FF",
                      "border-color": "#001F29"
                  });

        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        }
        else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval1" ).val( ui.value );
      }
    });
    $( "#sliderval1" ).val( $( "#slider1" ).slider( "value" ) );
  } );


// Slider2
$( function() {
    $( "#slider2" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {

        $("#slider2").css({"background": "#CCFFFF"});
        $("#slider2 .ui-slider-handle").css({
                      "background": "#E0F5FF",
                      "border-color": "#001F29"
                  });

        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        }
        else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval2" ).val( ui.value );
      }
    });
    $( "#sliderval2" ).val( $( "#slider2" ).slider( "value" ) );
  } );


// Slider3
$( function() {
    $( "#slider3" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {

        $("#slider3").css({"background": "#CCFFFF"});
        $("#slider3 .ui-slider-handle").css({
                      "background": "#E0F5FF",
                      "border-color": "#001F29"
                  });

        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        }
        else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval3" ).val( ui.value );
      }
    });
    $( "#sliderval3" ).val( $( "#slider3" ).slider( "value" ) );
  } );


// Slider4
$( function() {
    $( "#slider4" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {

        $("#slider4").css({"background": "#CCFFFF"});
        $("#slider4 .ui-slider-handle").css({
                      "background": "#E0F5FF",
                      "border-color": "#001F29"
                  });

        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        }
        else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval4" ).val( ui.value );
      }
    });
    $( "#sliderval4" ).val( $( "#slider4" ).slider( "value" ) );
  } );


// Slider5
$( function() {
    $( "#slider5" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {

        $("#slider5").css({"background": "#CCFFFF"});
        $("#slider5 .ui-slider-handle").css({
                      "background": "#E0F5FF",
                      "border-color": "#001F29"
                  });

        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        }
        else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval5" ).val( ui.value );
      }
    });
    $( "#sliderval5" ).val( $( "#slider5" ).slider( "value" ) );
  } );


// Function that refreshes slider values
function refreshSlider () {
    $(".sliders").slider('value', 50);
    $(".sliders").val(50);
    $(".slidervals").val(50);
    $(".ui-slider-handle").text("");
    $(".sliders").css({"background":""});
    $(".sliders" + " .ui-slider-handle").css({
        "background":"#FAFAFA",
        "border-color": "#CCCCCC" });
}


function chooseRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}


function shuffle(v) { // non-destructive.
    newarray = v.slice(0);
    for (var j, x, i = newarray.length; i; j = parseInt(Math.random() * i), x = newarray[--i], newarray[i] = newarray[j], newarray[j] = x);
    return newarray;
}