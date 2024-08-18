// Write a function delayedMessage(message, delay, callback) that takes a message,
//  a delay (in milliseconds), and a callback function. The function should log the
//   message after the specified delay, then call the callback.

function delayedMessage(message, delay, callback){
    setTimeout(() => {
        console.log(message);
        callback();
    }, delay);
}

delayedMessage("Hello World!", 3000, function(){
    console.log("This mesasge was delayed by 3 seconds");
});