// from data.js
let tableData = data;

//Render table
function render_table() {
data.forEach((tableData) => {
  let row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
  });
});
};

// Get a reference to the table body
let tbody = d3.select("tbody");

// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  //Set table to blank
  tbody.html("");
  
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");
  
  // Get the value property of the input element
  let inputValue = inputElement.property("value");

  //Filter data based on input date
  let filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  
  //Render table with the date filter
  filteredData.forEach((filter_d) => {
    let row = tbody.append("tr");
    Object.entries(filter_d).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  }); 

};

// Render the table for the first time on page load
render_table();

