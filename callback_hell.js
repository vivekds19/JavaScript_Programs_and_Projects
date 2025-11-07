function fetchData(callback) {
    console.log('Data fetched');
    callback();
}

function processData(callback) {
    console.log('Data processed');
    callback();
}

function displayData() {
    console.log('Data displayed');
}

// Callback Hell
fetchData(function () {
    processData(function () {
        displayData();
    });
});