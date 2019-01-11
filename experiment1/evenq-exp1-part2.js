//(if collecting data with php/server instead of MTurk)
// var experimentName = "snpi-pnq-exp1-demo";
// var submitAddress = "https://web.stanford.edu/~sunwooj/cgi-bin/process.php";


// List of stimuli

var stimuliList = shuffle([ 

[["Sally", ["evenh-praise-pq-c1", "evenh-praise-pnq-c1", "evenh-praise-evenq-c1", "evenh-praise-evenpnq-c1"], ["evenh-call-res-pos", "evenh-call-res-neg"]],
["Matt", ["evenh-read-pq-c1", "evenh-read-pnq-c1", "evenh-read-evenq-c1", "evenh-read-evenpnq-c1"], ["evenh-solve-res-pos", "evenh-solve-res-neg"]]],

[["Jacob", ["evenl-smallest-pnq-c1", "evenl-smallest-evenq-c1", "evenl-smallest-evenpnq-c1", "evenl-smallest-pq-c1"], ["evenl-smallest-res-neg", "evenl-smallest-res-pos"]],
["Carrie", ["evenl-hint-pnq-c1", "evenl-hint-evenq-c1", "evenl-hint-evenpnq-c1", "evenl-hint-pq-c1"], ["evenl-inkling-res-neg", "evenl-inkling-res-pos"]]],

[["Andrew", ["mnpi-clue-evenq-c1", "mnpi-clue-evenpnq-c1", "mnpi-clue-pq-c1", "mnpi-clue-pnq-c1"], ["mnpi-give-res-pos", "mnpi-give-res-neg"]],
["Alice", ["mnpi-wink-evenq-c1", "mnpi-wink-evenpnq-c1", "mnpi-wink-pq-c1", "mnpi-wink-pnq-c1"], ["mnpi-lift-res-pos", "mnpi-lift-res-neg"]]],

[["Lily", ["snpi-anything-evenpnq-c1", "snpi-anything-pq2-c1", "snpi-anything-pnq2-c1", "snpi-anything-evenq-c1"], ["snpi-anything-res-neg", "snpi-anything-res-pos"]],
["Roy", ["snpi-ever-evenpnq-c1", "snpi-ever-pq2-c1", "snpi-ever-pnq2-c1", "snpi-ever-evenq-c1"], ["snpi-ever-res-neg", "snpi-ever-res-pos"]]],

[["David", ["filler-everylift-any-c1", "filler-everylift-every-c1", "filler-everyany-any-c1", "filler-everyany-every-c1"], ["filler-everylift-res-true", "filler-everylift-res-false"]],
["David", ["filler-everywink-any-c1", "filler-everywink-every-c1", "filler-everyever-any-c1", "filler-everyever-every-c1"], ["filler-everywink-res-true", "filler-everywink-res-false"]]],

[["Lydia", ["filler-been-mars-c1", "filler-been-paris-c1", "filler-been-tibet-c1", "filler-everclimb-dutch-c1"], ["filler-everclimb-res-neg", "filler-everclimb-res-pos2"]],
["Lydia", ["filler-everbeen-mars-c1", "filler-everbeen-paris-c1", "filler-everbeen-tibet-c1", "filler-everclimb-teen-c1"], ["filler-everclimb-res-neg", "filler-everclimb-res-pos2"]]],

[["Beth", ["filler-base3b-false-c1", "filler-base3b-false-c1", "filler-base3b-false-c1", "filler-base3b-false-c1"], ["filler-base3b-res-neg", "filler-base3b-res-neg"]],
["Beth", ["filler-base3b-false-c1", "filler-base3b-false-c1", "filler-base3b-false-c1", "filler-base3b-false-c1"], ["filler-base3b-res-neg", "filler-base3b-res-neg"]]],

[["Richard", ["filler-base4b-false-c1", "filler-base4b-false-c1", "filler-base4b-false-c1", "filler-base4b-false-c1"], ["filler-base4b-res-true", "filler-base4b-res-true"]],
["Richard", ["filler-base4b-false-c1", "filler-base4b-false-c1", "filler-base4b-false-c1", "filler-base4b-false-c1"], ["filler-base4b-res-true", "filler-base4b-res-true"]]]

]);

// Fillers that set baselines in the first two trials
var basefillerList = shuffle([
["Prue", "filler-base1b-true-c1", "filler-base1b-res-false"], ["Dean", "filler-base2b-false-c1", "filler-base2b-res-true"]
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
            document.body.scrollTop = document.body.scrollHeight;
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
                document.body.scrollTop = document.body.scrollHeight;
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