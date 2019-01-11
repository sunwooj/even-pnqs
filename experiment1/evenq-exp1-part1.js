//(if collecting data with php/server instead of MTurk)
// var experimentName = "snpi-pnq-exp1-demo";
// var submitAddress = "https://web.stanford.edu/~sunwooj/cgi-bin/process.php";


// List of stimuli

var stimuliList = shuffle([ 

[["Sally", ["evenh-call-pq-c1", "evenh-call-pnq-c1", "evenh-call-evenq-c1", "evenh-call-evenpnq-c1"], ["evenh-call-res-pos", "evenh-call-res-neg"]],
["Matt", ["evenh-solve-pq-c1", "evenh-solve-pnq-c1", "evenh-solve-evenq-c1", "evenh-solve-evenpnq-c1"], ["evenh-solve-res-pos", "evenh-solve-res-neg"]]],

[["Jacob", ["evenl-grain-pnq-c1", "evenl-grain-evenq-c1", "evenl-grain-evenpnq-c1", "evenl-grain-pq-c1"], ["evenl-grain-res-neg", "evenl-grain-res-pos"]],
["Carrie", ["evenl-inkling-pnq-c1", "evenl-inkling-evenq-c1", "evenl-inkling-evenpnq-c1", "evenl-inkling-pq-c1"], ["evenl-inkling-res-neg", "evenl-inkling-res-pos"]]],

[["Andrew", ["mnpi-give-evenq-c1", "mnpi-give-evenpnq-c1", "mnpi-give-pq-c1", "mnpi-give-pnq-c1"], ["mnpi-give-res-pos", "mnpi-give-res-neg"]],
["Alice", ["mnpi-lift-evenq-c1", "mnpi-lift-evenpnq-c1", "mnpi-lift-pq-c1", "mnpi-lift-pnq-c1"], ["mnpi-lift-res-pos", "mnpi-lift-res-neg"]]],

[["Lily", ["snpi-anything-evenpnq-c1", "snpi-anything-pq-c1", "snpi-anything-pnq-c1", "snpi-anything-evenq-c1"], ["snpi-anything-res-neg", "snpi-anything-res-pos"]],
["Roy", ["snpi-anytime-evenpnq-c1", "snpi-anytime-pq-c1", "snpi-anytime-pnq-c1", "snpi-anytime-evenq-c1"], ["snpi-anytime-res-neg", "snpi-anytime-res-pos"]]],

[["David", ["filler-too-filler2-c1", "filler-too-filler2-c1", "filler-either-filler3-c1", "filler-either-filler3-c1"], ["filler-too-res-pos", "filler-too-res-neg"]],
["David", ["filler-too-filler2-c1", "filler-too-filler2-c1", "filler-either-filler3-c1", "filler-either-filler3-c1"], ["filler-too-res-pos", "filler-too-res-neg"]]],

[["Lydia", ["filler-anynot-filler1-c1", "filler-anynot-filler1-c1", "filler-anynot-filler1-c1", "filler-anynot-filler1-c1"], ["filler-anynot-res-neg", "filler-anynot-res-pos"]],
["Lydia", ["filler-everclimb-filler4-c1", "filler-everclimb-filler4-c1", "filler-everclimb-filler4-c1", "filler-everclimb-filler4-c1"], ["filler-everclimb-res-neg", "filler-everclimb-res-pos"]]],

[["Beth", ["filler-base3-false-c1", "filler-base3-false-c1", "filler-base3-false-c1", "filler-base3-false-c1"], ["filler-base3-res-false", "filler-base3-res-false"]],
["Beth", ["filler-base3-false-c1", "filler-base3-false-c1", "filler-base3-false-c1", "filler-base3-false-c1"], ["filler-base3-res-false", "filler-base3-res-false"]]],

[["Richard", ["filler-base4-false-c1", "filler-base4-false-c1", "filler-base4-false-c1", "filler-base4-false-c1"], ["filler-base4-res-true", "filler-base4-res-true"]],
["Richard", ["filler-base4-false-c1", "filler-base4-false-c1", "filler-base4-false-c1", "filler-base4-false-c1"], ["filler-base4-res-true", "filler-base4-res-true"]]]

]);

// Fillers that set baselines in the first two trials
var basefillerList = shuffle([
["Prue", "filler-base1-true-c1", "filler-base1-res-false"], ["Dean", "filler-base2-false-c1", "filler-base2-res-true"]
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
    if (trialnum == 10) { // end the experiment. 
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
            data.race = race;
			data.region = region;

            data.gendCom = gend_com;
            data.raceCom = race_com;
            data.regCom = reg_com;
			data.genCom = gen_com;

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

        if (trialnum < 3) {
            baseStimVector = basefillerList[trialnum-1];
            nameStim = baseStimVector[0];
            qtypeStim = baseStimVector[1];
            followupStim = baseStimVector[2];
        }

        else {
            stimuliSet = shuffle(stimuliList[trialnum-3]);
            stimuliVector = stimuliSet[stimRandom];
            nameStim = stimuliVector[0];

            qtypeVector = stimuliVector[1];
            followupVector = stimuliVector[2];
            qtypeStim = qtypeVector[qtypeRandom];
            followupStim = followupVector[stimRandom];
        }
               
        $(".item_number").html(trialnum);  
        $(".currentName1").html(nameStim);


        
        // Tell HTML which image file will display
        document.getElementById('currentPic').src = "../stimuli/" + qtypeStim + ".png";

        document.getElementById('currentFollowup').src = "../stimuli/" + followupStim + ".png";

        document.body.scrollTop = document.documentElement.scrollTop = 0;

        showSlide('stage'); 
        $('#nextpart').show();

        $('#responseForm2').hide();
        $('#optional1').hide();
        $('#commentBox1').hide();
        $('#continue').hide();

        $('#nextpart').click(function() {
            if  (slider1.style.backgroundColor != "") {
                $("#nextpart").unbind('click');
                $('#nextpart').hide();

                $('#responseForm2').show();
                $('#optional1').show();
                $('#commentBox1').show();
                $('#continue').show();

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

            var commentResponse1 = $('#commentBox1').val();
            commentResponse1 = commentResponse1.replace (/,/g, "");


            // Check for valid answers; all questions must be answered
            if  (slider1.style.backgroundColor != "" && slider2.style.backgroundColor != "") {

                // make continue button available for re-use
                $("#continue").unbind('click');
                // ensure that the comment box is emptied as well
                $(".commentBox").val("");
                // erase warnings 
                $("#warning2").html("");

                trial = {};
                trial.name1 = nameStim;
                trial.qtype = qtypeStim;
                trial.followup = followupStim;
                trial.sent1 = sliderResponse1;
                trial.sent2 = sliderResponse2;
                trial.comment = commentResponse1;
                data["trial" + trialnum] = trial;

                // Initialize the sliders again
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