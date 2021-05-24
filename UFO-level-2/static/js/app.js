// from data.js
var tableData = data;

// from data.js
var tableData = data;
var body = d3.select("tbody");
function fillTable(data){  
    body.html("");
    d3.select('tbody')
        .selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .html(d => `<td>${d.datetime}</td> <td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`);
    };
    
fillTable(data);

var filterBtn = d3.select("#filter-btn");
var resetBtn = d3.select("#reset-btn");
var dateInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");

function ClearFields() {
    let dat = document.getElementById("datetime").value = "";
    console.log(dat);
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    document.getElementById("shape").value = "";
};

function clearTable(){
    body.html("");
    ClearFields();
    fillTable(data);
};

filterBtn.on("click", activateFilter);
resetBtn.on("click", clearTable);

function activateFilter() {
    body.html("")
    // console.log("YO");
    d3.event.preventDefault();
    let dateElm = dateInput.property("value"); 
    let cityElm = cityInput.property("value");
    let stateElm = stateInput.property("value");
    let countryElm = countryInput.property("value");
    let shapeElm = shapeInput.property("value");  
    let filtered = tableData.filter(row => (row.datetime === dateElm) 
        || (row.city === cityElm) 
        || (row.state === stateElm) 
        || (row.country === countryElm) 
        || (row.shape === shapeElm));
    console.log(filtered);
    filtered.forEach((row) => {        
        let tr = body.append("tr");
        tr.append("td").text(row.datetime);
        tr.append("td").text(row.city);
        tr.append("td").text(row.state);
        tr.append("td").text(row.country);
        tr.append("td").text(row.shape);
        tr.append("td").text(row.durationMinutes);
        tr.append("td").text(row.comments);
    });
};

