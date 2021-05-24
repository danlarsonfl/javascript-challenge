// from data.js
var tableData = data;
var body = d3.select("tbody");
function fillTable(tableData){  
    body.html("");
    d3.select('tbody')
        .selectAll('tr')
        .data(tableData)
        .enter()
        .append('tr')
        .html(d => `<td>${d.datetime}</td> <td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`);
    };
    
function filterData() {
  var date = d3.select("#datetime").property("value");
  let filtered = tableData;
  if (date) {
    filtered = filtered.filter(row => row.datetime === date);
  }
  fillTable(filtered);
}
d3.selectAll("#filter-btn").on("click", filterData);
fillTable(tableData)
