### up-N-smoke
### Team project to examine effects of cannabis in communities

## Overview
The Cannabis Data Project is an initiative aimed at gathering and analyzing data related to cannabis use, legalization, and its impact on crime rates. This project aggregates data from various sources including the FBI Crime Database, Census Bureau, and Cannabis Commissions at the state level to mention a few sources.

## Project Goals
- Data Collection: Gather comprehensive data related to cannabis legalization by state, Sales and associated crime rates with a focus on Massachusetts due to other states data limitations .
- Analysis: Analyze the collected data to identify trends, correlations, Gross sale by Recreational and Medical. and potential insights into the impact of cannabis legalization and crime. 
- Visualization: Create visualizations to present the findings of the analysis in an accessible and understandable format. Using Plotly, bokeh, matplotlib, leaflet, D3.Json.

## Smokestack Building
We compiled nearly a million rows of data from a combination of resources:
- FBI
- State of Massachusetts
- National Legalization Data
- US Government Census

## Data Collection Process
- API Integration:
- SQlite, 
- Bottle/flask
- Py4Web
- Sqlite provides the backend for our data(database) for our hosted application in PythonAnywhere

## Data Cleaning
- Perform data cleaning and preprocessing to ensure consistency and accuracy in the collected datasets.

## Analysis and Visualization
### Descriptive Analysis: 
- Conduct descriptive statistical analysis to summarize the characteristics of the collected data.
### Correlation Analysis: 
- Explore correlations between cannabis legalization, crime rates using statistical methods.
### Interactive Charts:
- Develop interactive charts using libraries like Plotly Bokeh to visualize trends and patterns in the data to shoe MA sales by Medical and Recreational, by category.
### Geospatial Visualization: 
- Create interactive maps using libraries like Leaflet or Plotly to illustrate the geographical distribution of cannabis-business ( Dispensaries, Plantations, Laboratories.

## Ethics
- In our data collection process, we prioritized data ethics by directly requesting datasets from scientists, ensuring responsible and ethical data sourcing practices, as opposed to utilizing platforms like Kaggle or other repositories.
- Because of data ethics considerations, it's important to note that the Dispensaries dataset mainly served businesses and crime data which was publicly accessible.  As a result, it didn't contain any personally identifiable information (PII).

- The process of locating scientists who have previously conducted similar research and published their findings to serve as validation for the data backup endeavor has encountered significant obstacles, intensifying the ethical dilemmas at hand. Despite diligent efforts, identifying suitable counterparts with comparable studies has proven arduous, casting doubt on the integrity of the backup procedure. This predicament underscores the complexity of ensuring ethical conduct in data management practices

## Smoking  the code:
In order to navigate through the analysis follow steps below
Up-N-Smoke is our root folder,  this includes ReadMe, index.html, index_chart, index_rec_med.html, 
Jupyter_Notebook 
-MA_Crime_Data_starter-checkpoint.ipynb
-MA_Crime_Data_starter.ipynb
-Bokeh_seaborn_plotly_diff_chart_Product.ipynb 

In the  Data/images Folder we have  all the charts and plots along with background images we used in pythonAnywhere

static/css. Styling sheets are within this file



All data files are within Data/MA folder which consist of csv, excel and json files. 
Cannabis Medical and Recreational Licenses : Show when Medical and Recreational licenses are granted for each state and color code them.  D3.JS takes Json as an input plots the map with the pop up message about the licenses and year they were licensed
Up-N-smoke/index_rec_med.html  - calls below .js script
Up-N-smoke/static/js/logic_rec.js

-in order to run the code as it was structured you need to use py4web which it was used to deploy PythonAnywhere, 

##Contributors
- Carmen Y Wiggins  
- Kat
- Vethika
- Haritha
- Michelle



