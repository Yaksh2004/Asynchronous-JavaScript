// Write a function greet(name, callback) that takes a name as 
// a string and a callback function. The function should print a 
// greeting message, and then call the callback function, which 
// logs "Greeting completed."

function greet(name, callback){
    console.log("Hi! " + name);
    callback();
}

greet("Yaksh", function(){
    console.log("Greetings Completed.")
});

