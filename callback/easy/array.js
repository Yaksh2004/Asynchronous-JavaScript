// Write a function processArray(arr, callback) that takes an array and a callback function.
//  The callback function should process each element of the array (e.g., double it) and return 
//  a new array with the processed elements.

function processsArray(arr, callback) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
        
    }
    return result;
};

function doubleArr(n){
    return 2 * n;
};

function tripleArr(n){
    return 3 * n;
};

console.log(processsArray([1,2,3,4], tripleArr));


