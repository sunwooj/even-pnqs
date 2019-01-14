//(if collecting data with php/server instead of MTurk)
// var experimentName = "snpi-pnq-exp1-demo";
// var submitAddress = "https://web.stanford.edu/~sunwooj/cgi-bin/process.php";


// List of stimuli

var stimuliList = shuffle([ 

[["Sally", ["evenh-call-pq-c1", "evenh-call-pnq-c1", "evenh-call-evenq-c1", "evenh-call-evenpnq-c1"], ["evenh-call-c2-pos", "evenh-call-c2-neut", "evenh-call-c2-neg"]],
["Matt", ["evenh-solve-pq-c1", "evenh-solve-pnq-c1", "evenh-solve-evenq-c1", "evenh-solve-evenpnq-c1"], ["evenh-solve-c2-pos", "evenh-solve-c2-neut", "evenh-solve-c2-neg"]],
["Sally", ["evenh-praise-pq-c1", "evenh-praise-pnq-c1", "evenh-praise-evenq-c1", "evenh-praise-evenpnq-c1"], ["evenh-praise-c2-pos", "evenh-praise-c2-neut", "evenh-praise-c2-neg"]],
["Matt", ["evenh-read-pq-c1", "evenh-read-pnq-c1", "evenh-read-evenq-c1", "evenh-read-evenpnq-c1"], ["evenh-read-c2-pos", "evenh-read-c2-neut", "evenh-read-c2-neg"]]],

[["Jacob", ["evenl-smallest-pnq-c1", "evenl-smallest-evenq-c1", "evenl-smallest-evenpnq-c1", "evenl-smallest-pq-c1"], ["evenl-smallest-c2-neut", "evenl-smallest-c2-neut2", "evenl-smallest-c2-neg"]],
["Carrie", ["evenl-hint-pnq-c1", "evenl-hint-evenq-c1", "evenl-hint-evenpnq-c1", "evenl-hint-pq-c1"], ["evenl-hint-c2-neut", "evenl-hint-c2-neut2", "evenl-hint-c2-neg"]],
["Jacob", ["evenl-grain-pnq-c1", "evenl-grain-evenq-c1", "evenl-grain-evenpnq-c1", "evenl-grain-pq-c1"], ["evenl-grain-c2-neut", "evenl-grain-c2-neut2", "evenl-grain-c2-neg"]],
["Carrie", ["evenl-inkling-pnq-c1", "evenl-inkling-evenq-c1", "evenl-inkling-evenpnq-c1", "evenl-inkling-pq-c1"], ["evenl-inkling-c2-neut", "evenl-inkling-c2-neut2", "evenl-inkling-c2-neg"]]],

[["Andrew", ["mnpi-clue-evenq-c1", "mnpi-clue-evenpnq-c1", "mnpi-clue-pq-c1", "mnpi-clue-pnq-c1"], ["mnpi-clue-c2-neut2", "mnpi-clue-c2-neg", "mnpi-clue-c2-neut"]],
["Alice", ["mnpi-wink-evenq-c1", "mnpi-wink-evenpnq-c1", "mnpi-wink-pq-c1", "mnpi-wink-pnq-c1"], ["mnpi-wink-c2-neut2", "mnpi-wink-c2-neg", "mnpi-wink-c2-neut"]],
["Andrew", ["mnpi-give-evenq-c1", "mnpi-give-evenpnq-c1", "mnpi-give-pq-c1", "mnpi-give-pnq-c1"], ["mnpi-give-c2-neut2", "mnpi-give-c2-neg", "mnpi-give-c2-neut"]],
["Alice", ["mnpi-lift-evenq-c1", "mnpi-lift-evenpnq-c1", "mnpi-lift-pq-c1", "mnpi-lift-pnq-c1"], ["mnpi-lift-c2-neut2", "mnpi-lift-c2-neg", "mnpi-lift-c2-neut"]]],

[["Lily", ["snpi-anything-evenpnq-c1", "snpi-anything-pq2-c1", "snpi-anything-pnq2-c1", "snpi-anything-evenq-c1"], ["snpi-anything-c2-neg", "snpi-anything-c2-neut", "snpi-anything-c2-neut2"]],
["Roy", ["snpi-ever-evenpnq-c1", "snpi-ever-pq2-c1", "snpi-ever-pnq2-c1", "snpi-ever-evenq-c1"], ["snpi-ever-c2-neg", "snpi-ever-c2-neut", "snpi-ever-c2-neut2"]],
["Lily", ["snpi-anything-evenpnq-c1", "snpi-anything-pq-c1", "snpi-anything-pnq-c1", "snpi-anything-evenq-c1"], ["snpi-anything-c2-neg", "snpi-anything-c2-neut", "snpi-anything-c2-neut2"]],
["Roy", ["snpi-anytime-evenpnq-c1", "snpi-anytime-pq-c1", "snpi-anytime-pnq-c1", "snpi-anytime-evenq-c1"], ["snpi-anytime-c2-neg", "snpi-anytime-c2-neut", "snpi-anytime-c2-neut2"]]]

// [["Lydia", ["filler-someclimb-yespre-c1", "filler-someclimb-yespre-c1", "filler-someclimb-nopre-c1", "filler-someclimb-nopre-c1"], ["filler-someclimb-yesever-c2", "filler-someclimb-noever-c2"]],
// ["Lydia", ["filler-someclimb-yespre-c1", "filler-someclimb-yespre-c1", "filler-someclimb-nopre-c1", "filler-someclimb-nopre-c1"], ["filler-someclimb-yesever-c2", "filler-someclimb-noever-c2"]],
// ["David", ["filler-too-filler2-c1", "filler-too-filler2-c1", "filler-either-filler3-c1", "filler-either-filler3-c1"], ["tooeither-pos", "tooeither-neg"]],
// ["David", ["filler-too-filler2-c1", "filler-too-filler2-c1", "filler-either-filler3-c1", "filler-either-filler3-c1"], ["tooeither-pos", "tooeither-neg"]]],

// [["Beth", ["filler-false-base3b-c1", "filler-false-base3b-c1", "filler-false-base3b-c1", "filler-false-base3b-c1"], ["false3-neg", "false3-neg"]],
// ["Beth", ["filler-false-base3b-c1", "filler-false-base3b-c1", "filler-false-base3b-c1", "filler-false-base3b-c1"], ["false3b-neg", "false3b-neg"]],
// ["Richard", ["filler-false-base4b-c1", "filler-false-base4b-c1", "filler-false-base4b-c1", "filler-false-base4b-c1"], ["false4b-pos", "false4b-pos"]],
// ["Richard", ["filler-false-base4b-c1", "filler-false-base4b-c1", "filler-false-base4b-c1", "filler-false-base4b-c1"], ["false4b-pos", "false4b-pos"]]]

]);

// Fillers that set baselines in the first two trials
var basefillerList = shuffle([
["Prue", ["filler-base1b-true-c1", "filler-base1b-true-c1"], ["filler-base1b-res-false", "filler-base1b-res-false"]], ["Dean", ["filler-someclimb-yespre-c1", "filler-someclimb-nopre-c1"], ["filler-someclimb-yesever-c2", "filler-someclimb-noever-c2"]]
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


var fillerRandom = Math.floor(Math.random() * 2);
var stimRandom = Math.floor(Math.random() * 4);
var contRandom = Math.floor(Math.random() * 3);
var qtypeRandom = Math.floor(Math.random() * 4);



function stepExperiment () {
    if (trialnum == 6) { // end the experiment. 
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
            document.body.scrollTop = document.body.scrollHeight;
            }

            } ) }
 
    else {

        trialnum += 1;

        if (trialnum < 3) {
            baseStimVector = basefillerList[trialnum-1];
            nameStim = baseStimVector[0];
            contVector = baseStimVector[1];
            contStim = contVector[fillerRandom];
            stimuliVector = shuffle(baseStimVector[2]);
            qtypeStim = stimuliVector[fillerRandom];
            
        }

        else {
            stimuliSet = shuffle(stimuliList[trialnum-3]);
            stimuliVector = stimuliSet[stimRandom];
            nameStim = stimuliVector[0];

            qtypeVector = stimuliVector[1];
            contVector = stimuliVector[2];
            qtypeStim = qtypeVector[qtypeRandom];
            contStim = contVector[contRandom];
        }
               
        $(".item_number").html(trialnum);  
        $(".currentName1").html(nameStim);


        
        // Tell HTML which image file will display
        document.getElementById('currentCont').src = "../stimuli/" + contStim + ".png";

        document.getElementById('currentPic').src = "../stimuli/" + qtypeStim + ".png";

        document.body.scrollTop = document.documentElement.scrollTop = 0;

        showSlide('stage'); 
        $('#nextpart').show();

        $('#responseForm2').hide();
        $('#optional1').hide();
        $('#commentBox1').hide();
        $('#continue').hide();

        $('#nextpart').click(function() {
            // if  (slider1.style.backgroundColor != "") {
                $("#nextpart").unbind('click');
                $('#nextpart').hide();

                $('#responseForm2').show();
                $('#optional1').show();
                $('#commentBox1').show();
                $('#continue').show();

                $("#warning").html("");
            // }

            // else  {
            //     warning = "Please answer the question to continue. Make sure that you have dragged or clicked on the slider button so that the slider is colored and the button displays numeric values.";
            //     $("#warning").html(warning);
            //     document.body.scrollTop = document.body.scrollHeight;
            // }
        });


        $('#continue').click(function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            // var sliderResponse1 = $('#sliderval1').val();
            var sliderResponse2 = $('#sliderval2').val();

            var commentResponse1 = $('#commentBox1').val();
            commentResponse1 = commentResponse1.replace (/,/g, "");


            // Check for valid answers; all questions must be answered
            if  (slider2.style.backgroundColor != "") {

                // make continue button available for re-use
                $("#continue").unbind('click');
                // ensure that the comment box is emptied as well
                $(".commentBox").val("");
                // erase warnings 
                $("#warning2").html("");

                trial = {};
                trial.name1 = nameStim;
                trial.context = contStim;
                trial.qtype = qtypeStim;
                // trial.sent1 = sliderResponse1;
                trial.naturalness = sliderResponse2;
                trial.comment = commentResponse1;
                data["trial" + trialnum] = trial;

                // Initialize the sliders again
                refreshSlider();
            
                // Move on to the next trial
                stepExperiment();
     
                    }

            else { // If any of the questions is not answered:
                warning2 = "Please answer the question to continue. Make sure that you have dragged or clicked on the slider button so that the slider is colored and the button displays a numeric value.";
                $("#warning2").html(warning2);
                document.body.scrollTop = document.body.scrollHeight;
            }
        });
    }
}


// Codes for sliders
// Slider1
// $( function() {
//     $( "#slider1" ).slider({
//       value: 50,
//       min: 0,
//       max: 100,
//       step: 1,
//       slide: function( event, ui ) {

//         $("#slider1").css({"background": "#CCFFFF"});
//         $("#slider1 .ui-slider-handle").css({
//                       "background": "#E0F5FF",
//                       "border-color": "#001F29"
//                   });

//         m_val = ui.value;
//         if (m_val < 0) {
//             $(ui.handle).text("?");
//         }
//         else {
//             $(ui.handle).text(m_val);
//         }
//         $( "#sliderval1" ).val( ui.value );
//       }
//     });
//     $( "#sliderval1" ).val( $( "#slider1" ).slider( "value" ) );
//   } );


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