// Write a function resolveAfterDelay(delay) that returns a Promise. 
// The Promise should resolve with the string "Resolved after delay" after the specified delay in milliseconds.

function resolveAfterDelay(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved after delay");
        }, delay);
    });
};

resolveAfterDelay(2000).then(function(data){
    console.log(data);
});