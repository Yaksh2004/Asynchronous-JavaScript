// Write a function transformData(data) that returns a Promise resolving with the data transformed 
// (e.g., converting each element to uppercase). Write another function filterData(data) that
//  filters out elements that are not uppercase. Use these functions to process a list of
//  strings and chain them to get the final result.

function transformData(data){
    return new Promise((resolve, reject) => {
        if(!Array.isArray(data)){
            reject("Provided Data should be an Array");
        } else {
            const transformedData = data.map(function(item){
                return item.toUpperCase()});
            resolve(transformedData);
        }
    });
}

function filterData(data){
    return new Promise((resolve, reject) => {
        if(!Array.isArray(data)){
            reject("Provided Data should be an Array");
        } else {
            const filteredData = data.filter(item => item === item.toUpperCase());
            resolve(filteredData)
        }
    });
}

const data = ["hello", "WORLD", "JavaScript", "PROMISES"];

transformData(data)
    .then(function(transformedData){
        console.log("Transformed Data", transformedData);
        return filterData(data);
    }).then(function(filteredData){
        console.log("FilteredData: ", filteredData);
    }).catch(function(error){
        console.log("Error: ", error);
    })