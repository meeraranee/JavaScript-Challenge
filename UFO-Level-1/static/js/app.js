// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(data);
function createTable(data) {
    tbody.html("")
}

createTable(data)

function handleClick() {
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    filterData = filterData.filter(row=>row.datetime===date);
    createTable(filterData)
}

d3.selectAll("#filter-btn").on("click", handleClick);