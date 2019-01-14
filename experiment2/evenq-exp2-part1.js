//(if collecting data with php/server instead of MTurk)
// var experimentName = "snpi-pnq-exp2-demo";
// var submitAddress = "https://web.stanford.edu/~sunwooj/cgi-bin/process.php";


// List of stimuli

var stimuliList = shuffle([ 

[["Sally", ["evenh-call-pq-c1", "evenh-call-pnq-c1", "evenh-call-evenq-c1", "evenh-call-evenpnq-c1"], "evenh-call-c2", "Paul might have called Maria", "Paul DIDN'T call Maria", "Paul called Maria", "Lenny"],
["Matt", ["evenh-solve-pq-c1", "evenh-solve-pnq-c1", "evenh-solve-evenq-c1", "evenh-solve-evenpnq-c1"], "evenh-solve-c2", "Jasper might have solved the monthly challenge", "Jasper DIDN'T solve the monthly challenge", "Jasper solved the monthly challenge", "Rochelle"]],

[["Jacob", ["evenl-grain-pnq-c1", "evenl-grain-evenq-c1", "evenl-grain-evenpnq-c1", "evenl-grain-pq-c1"], "evenl-grain-c2-neg", "there might be some truth to what Nancy said", "there ISN'T much truth to what Nancy said", "there is some truth to what Nancy said, at least a little bit", "Anna"],
["Carrie", ["evenl-inkling-pnq-c1", "evenl-inkling-evenq-c1", "evenl-inkling-evenpnq-c1", "evenl-inkling-pq-c1"], "evenl-inkling-c2-neg", "Jim might have shown some amount of appreciation", "Jim DIDN'T show much appreciation", "Jim showed some amount of appreciation, at least a little bit", "David"]],

[["Andrew", ["mnpi-give-evenq-c1", "mnpi-give-evenpnq-c1", "mnpi-give-pq-c1", "mnpi-give-pnq-c1"], "mnpi-give-c2-neg", "Sam might care about the environment", "Sam DOESN'T care about the environment", "Sam cares about the environment, at least a little", "Prue"],
["Alice", ["mnpi-lift-evenq-c1", "mnpi-lift-evenpnq-c1", "mnpi-lift-pq-c1", "mnpi-lift-pnq-c1"], "mnpi-lift-c2-neg", "Jane might have helped", "Jane DIDN'T help much", "Jane helped, at least a little", "Mark"]],

[["Lily", ["snpi-anything-evenpnq-c1", "snpi-anything-pq-c1", "snpi-anything-pnq-c1", "snpi-anything-evenq-c1"], "snpi-anything-c2-neg", "Nora might have brought something", "Nora DIDN'T bring much", "Nora brought something, at least a small thing", "Max"],
["Roy", ["snpi-anytime-evenpnq-c1", "snpi-anytime-pq-c1", "snpi-anytime-pnq-c1", "snpi-anytime-evenq-c1"], "snpi-anytime-c2-neg", "Sally might have some time to spare", "Sally DOESN'T have time", "Sally has time, at least a little bit", "Alice"]]

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
            }

            } ) }
 
    else {

        trialnum += 1;
        stimuliSet = shuffle(stimuliList[trialnum-1]);
        stimuliVector = stimuliSet[stimRandom];
        name1Stim = stimuliVector[0];
        qtypeVector = stimuliVector[1];
        qtypeStim = qtypeVector[qtypeRandom];
        pic2Stim = stimuliVector[2];
        sent1Stim = stimuliVector[3];
        sent2Stim = stimuliVector[4];
        sent3Stim = stimuliVector[5];
        name2Stim = stimuliVector[6];

        // stimuliVector = stimuliList[conditionRandom];
        // condition = stimuliVector[0];
        // contextVector = shuffle(stimuliVector[1]);

        // if (trialnum < 3) {
        //     baseStimVector = basefillerList[trialnum-1];
        //     nameStim = baseStimVector[0];
        //     qtypeStim = baseStimVector[1];
        //     followupStim = baseStimVector[2];
        // }

        // else {
        //     stimuliSet = shuffle(stimuliList[trialnum-3]);
        //     stimuliVector = stimuliSet[stimRandom];
        //     nameStim = stimuliVector[0];

        //     qtypeVector = stimuliVector[1];
        //     followupVector = stimuliVector[2];
        //     qtypeStim = qtypeVector[qtypeRandom];
        //     followupStim = followupVector[stimRandom];
        // }
               
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