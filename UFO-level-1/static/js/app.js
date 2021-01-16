// from data.js


var tableData = data;

//all data
var tbody = d3.select("tbody");

data.forEach((UFOData) => {
 var row = tbody.append("tr");
 Object.entries(UFOData).forEach(([key, value]) => {
    var cell = row.append("td");
        cell.text(value);
    });
});
  
 
var button = d3.select("#button");

// Define button click
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
  d3.event.preventDefault();
  tbody.selectAll('*').remove();

  var inputElement = d3.select("#datetime");
  var inputText = inputElement.property("value")

  var filteredData = tableData.filter(ufo => ufo.datetime === inputText);

  filteredData.forEach((UFOData) => {
    var row = tbody.append("tr");
    Object.entries(UFOData).forEach(([key, value]) => {
       var cell = row.append("td");
           cell.text(value);
       });
   });
}

  
  
  
