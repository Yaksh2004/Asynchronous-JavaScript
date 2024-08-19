// Write a function raceOperations(op1, op2) that takes two promises and returns a promise
//  that resolves or rejects as soon as one of the two input promises resolves or rejects. 
//  Use this function to race two asynchronous operations.


//Practical UseCase
// Imagine you have two functions that fetch data from two different servers. You want to
//  use the data from whichever server responds first. raceOperations would allow you to 
// proceed with the data from the server that responds first, without waiting for both.

function server1(){
    return new Promise(function(resolve, reject){
        const data1 = "Data recovered from Server 1";
        setTimeout(function(){
            resolve(data1);
        }, 4000)
    })
}

function server2(){
    return new Promise(function(resolve, reject){
        const data2 = "Data recovered from Server 2";
        setTimeout(function(){
            resolve(data2);
        }, 3000)
    })
}

Promise.race([server1(), server2()]).then(function(data){
    console.log(data);
}).catch(function(){
    console.log("Data could not be recovered")
})