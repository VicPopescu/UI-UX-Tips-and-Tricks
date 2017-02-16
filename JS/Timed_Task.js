/**
 *  @description Simple example of a timed function using "setTimeout"
 *  The timer is updated in case the call is made again
 *  If you re-call "alertOnTime" again, with another string, before the timer is over, it will clear the previous timer
 *  and it will display only the last message, after another 5 seconds
 */

//used to store/reset the timed function
var timer;

//main logic trigger
var alertOnTime = function (message) {

    //clear previous timer (if any)
    clearTimeout(timer);

    //set the timer and the function to be executed after 5 seconds
    timer = setTimeout(function () {
        console.log(message);
    }, 5000);
};

//call example
alertOnTime("DO IT NOW!");