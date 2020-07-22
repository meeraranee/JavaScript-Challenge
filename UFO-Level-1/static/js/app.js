// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO sightings data from data.js
console.log(tableData);

// Append a table to web page that adds new row per sighting
tableData.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Add event listener and search through date/time column to find rows that match user input
// Select button
var button = d3.select("#filter-btn");

button.on("click", function() {
    // Select the input element and get the raw HTML code
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);
    console.log(tableData);

    // Select unordered list element by class name
    var list = d3.select("tbody");

    list.html("");

    filteredData.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});