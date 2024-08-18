
// Storing Promise in a variable and using .then on the variable for resolving the promise
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Inside Promise One");
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("promiseOne Resolved Successfully")
})


// NOt Storing Promise in a variable rather using .then directly on the promise object for resolving it
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Inside Promise Two");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Promise Two Resolved Successfully");
})

// Passing values to the .then from the resolve function in promise.. //usually an object or array
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Inside promise Three");
        resolve({username: "Yaksh", id: 201})
    }, 1000)
})

promiseThree.then(function(data){
    console.log("Data received from promise Three: ", data);
})

// now to get items within the received data, to avoid callback hell
// data returned in one .then is sent in as an argument for the next .then
promiseThree.then(function(data){
    return data.username;
}).then(function(username){
    console.log(username);
})

// When the data received in promise has some error and cannot be resolved
// Using reject() and .catch

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(error){
            reject("Some Error has been detected, Data Cannot be Resoved")
        } else {
            resolve({username: "Shaksham", id: 202})
        }
    }, 1000)
})


//.finally keyword also showcased here that will always run whether the promise resolves or gets rejected
promiseFour.then(function(data){
    return data.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("This will always be executed like a default statement")
})

//Credits to: Chai Aur Code for easy explanation (only for hindi speaking audience)
//https://youtu.be/NJwRQgsu1Q8?si=H3k-tuZMYs4A4xrA