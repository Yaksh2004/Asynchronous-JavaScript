// Write a function wait(milliseconds) that returns a Promise. The Promise should resolve with the message 
// "Waited for X milliseconds" after the specified number of milliseconds. If the input is 
// less than or equal to 0, the Promise should reject with the message "Invalid duration"..

function wait(milliseconds){
    return new Promise(function(resolve, reject){
        if(milliseconds <= 0){
            reject("Invalid Duration")
        } else {
            resolve("Waited for " + milliseconds + " milliseconds");
        }
    })
}

wait(3000).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})