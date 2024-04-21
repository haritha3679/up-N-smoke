function init() {
  // Get the reference to the dropdown select element
  dropdownValues = ['Medical','Recreational']
  dropdownMenu = d3.select("#selDataset");
  
    dropdownMenu
      .selectAll('option')
      .data(dropdownValues)
      .enter()
      .append("option")
      .text(function(d){return d;});
      plotCharts('Medical')    
}

init();

  // Use the list of sample names to populate the select options
//   d3.csv("data/MA/MA_Medical_Data.csv").then((data) => {
//     sampleNames = data.names;

//     sampleNames.forEach((sample) => {
//       dropdownMenu
//         .append("option")
//         .text(sample)
//         .property("value", sample);
//     });

//     // Use the first sample from the list to build the initial plots
//     Sample = sampleNames[0];
//    plotCharts(Sample);
//     DisplaySeldata(Sample);
//   });
// };

// // Initialize the dashboard
// init();

function optionChanged(newSample) {
 // Fetch new data each time a new sample is selected
 //DisplaySeldata(newSample);
 plotCharts(newSample);
  
};

// // Demographics Panel 
// function DisplaySeldata(sample) {
// d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
//   seldata = data.metadata;
//   // Filter the data for the object with the desired sample number
//   resultArray = seldata.filter(s => s.id == sample);
//   result = resultArray[0];
//   // Use d3 to select the panel with id of `#sample-metadata`
//   selectedData = d3.select("#sample-metadata");

//   // Use `.html("") to clear any existing metadata
//   selectedData.html("");

//   // Use `Object.entries` to add each key and value pair to the panel
//   // Hint: Inside the loop, you will need to use d3 to append new
//   // tags for each key-value in the metadata.
//   Object.entries(result).forEach(([key, value]) => {
//     selectedData.append("h6").text(`${key.toUpperCase()}: ${value}`);
//   });

// });
// }

// // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// //Building a function to achive above passing individual sample.
function med_rec(data,sample)
{
  groupedData = data.reduce(function(acc,obj)
  {
   //console.log(obj)
   var date = (new Date(obj. SaleDate))
   var year = date.getFullYear();
   var month = date.getMonth() + 1;
     
   if(!acc[year]) {
    acc[year] = {year: year,totalPrice:0};
    }
   acc[year].totalPrice += Number(obj.TotalPrice);
   
   
   return acc;
   
 
  },{});
  selectedData = d3.select("#sample-metadata");
    // Use `.html("") to clear any existing metadata
  selectedData.html("");
groupedData_m = data.reduce(function(acc,obj)
  {
   //console.log(obj)
   var date = (new Date(obj. SaleDate))
   var year = date.getFullYear();
   var month = date.getMonth() + 1;
   var yearMonth = year+ '-' + (month < 10 ? '0':'')+month;

   //console.log(yearMonth)
   //console.log(year)
   //acc1 = acc;
   if(!acc[yearMonth]){ 
    acc[yearMonth] = {yearMonth,totalPrice:0}
   }
   
 
   acc[yearMonth].totalPrice += Number(obj.TotalPrice);

   return acc;
   
 
  },{});
  var groupedData_cm = data.reduce(function(acc, obj) {
    var date = new Date(obj.SaleDate);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var yearMonth = year + '-' + (month < 10 ? '0' : '') + month;

    if (!acc[yearMonth]) {
        acc[yearMonth] = { yearMonth: yearMonth, totalPrice: 0, cumulativeTotalPrice: 0 };
    }

    acc[yearMonth].totalPrice += Number(obj.TotalPrice);

    // Calculate the cumulative total price
    acc[yearMonth].cumulativeTotalPrice = Object.values(acc).filter(item => {
        var itemDate = new Date(item.yearMonth + '-01');
        return itemDate <= date;
    }).reduce((total, item) => total + item.totalPrice, 0);

    return acc;
}, {});

  


 var result = Object.values(groupedData);
 
 
 
 dataArray = Object.values(groupedData);
 dataArray_m = Object.values(groupedData_m);
 dataArray_cm = Object.values(groupedData_cm);
 dataArray_cm1 = Object.values(groupedData_cm);
 maxSales = dataArray_cm1.reduce((max, item) => (item.cumulativeTotalPrice > max ? item.cumulativeTotalPrice : max), 0);
 rmax = Math.round(maxSales)
 let dmax = rmax.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
 selectedData = d3.select("#sample-metadata");
 cardtitle = d3.select("#card-title")
    // Use `.html("") to clear any existing metadata
  selectedData.html("");
  if (sample === 'Medical'){
  selectedData.append("h7").text(`${sample} Marijuana Sales since Dispensaries Opened`)}
  else if (sample === 'Recreational'){selectedData.append("h7").text(`${sample} Marijuana Sales `)}
  selectedData.append("br");
  selectedData.append("br");
  selectedData.append("h6").text(`Total Sales: ${dmax}`);
  selectedData.append("br");
  selectedData.append("br");
  if (sample === 'Medical'){
  selectedData.append("h7").text(`${sample}  Marijuana Sales since Dispensaries Opened 11/05/2018 thru Till Date`)}
  else if (sample === 'Recreational'){selectedData.append("h7").text(`${sample} Marijuana Sales from 2018 thru till date `)}
  cardtitle.append("h4").text(`${sample} ${dmax}`);
console.log(dataArray_cm)
 trace = {
   x: dataArray.map(function(d) {return d.year;}),
   y:dataArray.map(function(d){return d.totalPrice;}),
   type:'bar',
   marker:{ color: 'rgb(51,122,183)'}, name:sample}

var trace2 = {
 x: dataArray.map(function(d) { return d.year; }),
 y: dataArray.map(function(d) { return d.totalPrice; }),
 type: 'scatter',
 mode: 'lines+markers',
 line: {
   color: 'rgb(219, 64, 82)',
   width: 2
 },
 marker:{ size: 5, color:'green'},
 name: sample+' Trend'
};
var trace3 = {
   
   x: dataArray_m.map(function(d) {return d.yearMonth;}),
   y: dataArray_m.map(function(d){return d.totalPrice;}),
  type:'bar',
  marker:{ color: 'rgb(51,122,183)'}, name:sample}

var trace4 = {
x: dataArray_cm.map(function(d) { return d.yearMonth; }),
y: dataArray_cm.map(function(d) { return d.cumulativeTotalPrice; }),
type: 'lines',
mode: 'lines+markers',
line: {
  color: 'rgb(219, 64, 82)',
  width: 2
},
marker:{size: 5, color:'green'},
name: sample+' Trend'
};
barData = [trace,trace2]
barData1 = [trace3]
lineData = [trace4]
barLayout = {
    title: '<b>'+sample+'</b>'+" <b>Cannabis Yearly Sales for MA</b>",
   
    xaxis: {
      title: 'Year'
    },
    yaxis: {
      title: 'Total Price'
    }
      };

      barLayout1 = {
        title: '<b>'+sample+'</b>'+" <b>Cannabis Monthly Sales for MA</b>",
       
        xaxis: {
          title: 'Monthly',
          gridwidth: 2
        },
        yaxis: {
          title: 'Monthly Total Price'
    
          
        }
          };
      Plotly.newPlot('bar',barData, barLayout)
      Plotly.newPlot('Month',barData1, barLayout1)
      Plotly.newPlot('TotalMonth',lineData, barLayout1)
    }

function plotCharts(sample) {
  if (sample === 'Medical')
  {
// Use d3.json to load and retrieve the samples.json file 
  d3.csv("data/MA/MA_Medical_Data.csv").then((data) => {
    med_rec(data,sample)
   
      })     
  }
  else if(sample === 'Recreational'){
    d3.csv("data/MA/MA_Adult_use_Sales_stat.csv").then((data) => {
      med_rec(data,sample)
     
        })     
  }
}  

