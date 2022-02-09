var activityCounter = 1;
var errorTextDuration = false;
var errorTextActivity = false;
var errorDayStart = false;
const numberOfTimeframes = 26;

//TODO Design buttons (check boostrap)
// 

//TODO upgrades : // Make le starting time option (variable timeCounter + no possiblo de start time before current time for now)
// pouvoir changer la duration d'une activity and dragant avec la souris
// emptylink navbar for design

$(".add-btn").click(function(){
    var descriptionText = $("[name='activity-description']")[0].value;
    var duration = $("[name='duration']")[0].value;
    // var durationPct = (duration * 3.5 ) / 30; //30px = 3.5%

    if(descriptionText != ""){

        if(duration >= 10){
            $(".act" + activityCounter).css("height", duration); // changing the height to match duration
            $(".act" + activityCounter).text(descriptionText); //changing the text
            if(duration < 30){
                $(".act" + activityCounter).css("font-size", "0.5rem");
            }

            $(".act" + activityCounter).removeClass("hidden");
        
            // reseting the values in the input
            $("[name='activity-description']")[0].value = "";
            $("[name='duration']")[0].value = 30;
            activityCounter++;

            clearErrors();
        }

            
        else{
            errorTextDuration = true;
            $(".err-text-message").removeClass("hidden");
        }
    
    }
});


$(".day-start-btn").click(function(){


    var dayStartHour = $("[name='day-start']")[0].value;
    var hourCounter = dayStartHour;
    if(dayStartHour == "" || dayStartHour < 0 || dayStartHour >= 24){
        $(".err-daystart-message").removeClass("hidden");
        errorDayStart = true;
    }

        else{
            for(var i = 1; i <= numberOfTimeframes ; i++){
                if(hourCounter>= 24){hourCounter -= 24;}
                if(i % 2 === 1){
                    $(".time" + i).text(hourCounter + ":00");
                }
                
                else{
                    $(".time" + i).text(hourCounter + ":30");   
                    hourCounter++;
                }
                
            }
            if(errorDayStart){
                $(".err-daystart-message").addClass("hidden");
                errorDayStart = false;
            }
        }
   
    
});

// Undo button
$(".undo-btn").click(function(){
    activityCounter--;
    $(".act" + activityCounter).addClass("hidden");
    
});


// Clear button
$(".clear-btn").click(function(){
    while(activityCounter > 1){
        activityCounter--;
        $(".act" + activityCounter).addClass("hidden");
    }
    
    
});

function clearErrors(){
    if(errorTextDuration){$(".err-text-message").addClass("hidden");} // removing error message
    //if(errorTextActivity){$(".error-text-message").addClass("hidden");}
}