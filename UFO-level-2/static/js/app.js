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


function runEnter() {
  d3.event.preventDefault();
  tbody.selectAll('*').remove();

  var inputElementdate = d3.select("#datetime");
  var inputTextdate = inputElementdate.property("value")

  var inputElementcity = d3.select("#city");
  var inputTextcity = inputElementcity.property("value")

  var inputElementstate= d3.select("#state");
  var inputTextstate = inputElementstate.property("value")

  
  var inputElementcountry= d3.select("#country");
  var inputTextcountry = inputElementcountry.property("value")

  var filteredData = tableData.filter(ufo => (ufo.datetime === inputTextdate && inputTextcity === "" && inputTextstate === "" && inputTextcountry == "") || // filter by date 
                                             (ufo.city === inputTextcity &&  inputTextdate === "" && inputTextstate === "" && inputTextcountry == "")||     // city
                                             (ufo.state === inputTextstate &&  inputTextdate === "" && inputTextcity === "" && inputTextcountry == "")||    // state
                                             (ufo.country === inputTextcountry  &&  inputTextdate === "" && inputTextcity === "" && inputTextstate == "")|| // country

                                             (ufo.datetime === inputTextdate && ufo.city === inputTextcity && inputTextstate === "" && inputTextcountry == "")||    // date & city
                                             (ufo.datetime === inputTextdate && ufo.state === inputTextstate && inputTextcity ==="" && inputTextcountry == "" )||   // date & state
                                             (ufo.datetime === inputTextdate && ufo.country === inputTextcountry  && inputTextcity ==="" && inputTextstate == "" )|| // date & country
                                             (ufo.city === inputTextcity && ufo.state === inputTextstate && inputTextdate === "" && inputTextcountry == "")||        // city & state
                                             (ufo.city === inputTextcity && ufo.country === inputTextcountry && inputTextdate === "" && inputTextstate == "")||      // city & country
                                             (ufo.state === inputTextstate && ufo.country === inputTextcountry && inputTextdate === "" && inputTextcity == "")||     // state & country


                                             (ufo.city === inputTextcity && ufo.state === inputTextstate && ufo.datetime === inputTextdate && inputTextcountry == "")|| //city, state & date
                                             (ufo.city === inputTextcity && ufo.state === inputTextstate && ufo.country === inputTextcountry && inputTextdate == "")|| // city, state & country
                                             (ufo.datetime === inputTextdate && ufo.city === inputTextcity && ufo.country === inputTextcountry  && inputTextstate == "")|| // date, city & country
                                             (ufo.datetime === inputTextdate && ufo.country === inputTextcountry && ufo.state === inputTextstate && inputTextcity == "")|| //date, country & state
                                             
                                                                       
                                             (ufo.datetime === inputTextdate && ufo.city === inputTextcity && ufo.state === inputTextstate &&  ufo.country === inputTextcountry )|| // date, city,state & country
                                             (inputTextdate==="" && inputTextcity === "" && inputTextstate === "" && inputTextcountry == "") // none
                                             );
 

  filteredData.forEach((UFOData) => {
    var row = tbody.append("tr");
    Object.entries(UFOData).forEach(([key, value]) => {
       var cell = row.append("td");
           cell.text(value);
       });
   });
}

  
  
  
