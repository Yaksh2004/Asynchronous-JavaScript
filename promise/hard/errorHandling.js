// Write a function processData(data) that returns a Promise. The Promise should resolve 
// with "Data processed" if data is a non-empty array. If data is empty or not an array, 
// it should reject with "Invalid data". Chain the Promises to handle both successful and error cases.

function processData(data){
    return new Promise(function(resolve, reject){
        if(Array.isArray(data) && data.length > 0){
            resolve("Data Processed")
        } else {
            reject("Invalid Data")
        }
    })
}

processData([1,2,3,4,5,6]).then(function(data){
    console.log(data)
}).catch(function(data){
    console.log(data)
})

// What I learned: Try using if else condition taking in consideration what to resolve as primary focus
// not what to reject..  