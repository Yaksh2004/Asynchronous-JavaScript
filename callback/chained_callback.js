// Write a function fetchData(url, callback) that simulates an API call with setTimeout. 
// After fetching data, it should call another function processData(data, callback), 
// which processes the data and then calls displayData(processedData).

function fetchData(url, callback) {
    console.log("Fetching data from: " + url);
    setTimeout(() => {
      const data = { id: 1, name: 'Sample Data' };
      callback(data);
    }, 3000);
  }
  
  function processData(data, callback) {
    console.log('Processing data...');
    setTimeout(() => {
        const processedData = Object.assign({}, data, { processed: true });
        callback(processedData);
    }, 3000);
  }
  
  function displayData(data) {
    console.log('Displaying data:', data);
  }
  
  fetchData('https://sampleurl.com/data', function(data) {
    processData(data, function(processedData) {
      displayData(processedData);
    });
  });
  