// from data.js
let filteredData = data;

//Render table 
function render_table() {
  filteredData.forEach((filter_d) => {
    let row = tbody.append("tr");
    Object.entries(filter_d).forEach(([key, value]) => {
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

  // Reset filtered data to the full dataset every time Filter Button is clicked 
  filteredData = data;

  // Select the input element and get the raw HTML node 
  // Get the value property of the input element  

  let inputDate = d3.select("#datetime");
  let inputDateValue = inputDate.property("value").trim();

  let inputCity = d3.select("#city");
  let inputCityValue = inputCity.property("value").trim().toLowerCase();

  let inputState = d3.select("#state");
  let inputStateValue = inputState.property("value").trim().toLowerCase();

  let inputCountry = d3.select("#country");
  let inputCountryValue = inputCountry.property("value").trim().toLowerCase();

  let inputShape = d3.select("#shape");
  let inputShapeValue = inputShape.property("value").trim().toLowerCase();

  // Check if input date is not blank, then update filter
  if(inputDateValue != "") {

    filteredData = filteredData.filter(function(address) 
    {
      let Date = address.datetime; 
    
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return Date === inputDateValue;
    });
  }
  else {
    filteredData
      };

  // Check if input city is not blank, then update filter
  if(inputCityValue != "") {

    filteredData = filteredData.filter(function(address) 
    {
      let city = address.city; 
    
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return city === inputCityValue;
    });
  }
  else {
    filteredData
      };
   
  // Check if input state is not blank, then update filter
  if(inputStateValue != "") {

    filteredData = filteredData.filter(function(address) 
    {
      let state = address.state; 
    
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return state === inputStateValue;
    });
  }
  else {
    filteredData
      };

  // Check if input country is not blank, then update filter
  if(inputCountryValue != "") {

    filteredData = filteredData.filter(function(address) 
    {
      let country = address.country; 
    
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return country === inputCountryValue;
    });
  }
  else {
    filteredData
      };

  // Check if input shape is not blank, then update filter
  if(inputShapeValue != "") {

    filteredData = filteredData.filter(function(address) 
    {
      let shape = address.shape; 
    
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return shape === inputShapeValue;
    });
  }
  else {
    filteredData
      };

  //Call render table function to render the table based on the selected filters
  render_table();  

};

// Render the table for the first time on page load
render_table();
