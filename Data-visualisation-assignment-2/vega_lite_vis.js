// Load heatmap (skill level based on education)
var skill_level_relevance_heatmap = "skill_level_relevance_heatmap.json";
vegaEmbed("#skill_level_relevance_heatmap", skill_level_relevance_heatmap).then(function(result) {
    console.log("Heatmap loaded successfully");
}).catch(console.error); 

// Load bar chart with drop down (salary based on education and industry)
var barChartDrop = "barchardropdown.json";
vegaEmbed("#barchardrop", barChartDrop).then(function(result) {
    console.log("Bar chart dropdown loaded successfully");
}).catch(console.error); 

// Load stacked bar chart
var groupbarEmploymentStatus = "employment_status_bar_grouped.json";
vegaEmbed("#employment_status_bar_grouped", groupbarEmploymentStatus).then(function(result) {
    console.log("Stacked bar chart loaded");
}).catch(console.error);

// Load skill earnings line chart
var lineChartSkillImpact = "skill_level_impact_linechart.json";
vegaEmbed("#skill_level_impact_linechart", lineChartSkillImpact).then(function(result) {
    console.log("Line chart loaded");
}).catch(console.error);

// Load lollipop chart
var lollipopCareerEarningsDetailed = "career_earnings_detailed_lollipop.json";
vegaEmbed("#career_earnings_detailed_lollipop", lollipopCareerEarningsDetailed).then(function(result) {
    console.log("Lollipop chart loaded");
}).catch(console.error);

// Load lollipop chart
var lollipopCareerEarningsSimple = "career_earnings_simple_lollipop.json";
vegaEmbed("#career_earnings_simple_lollipop", lollipopCareerEarningsSimple).then(function(result) {
    console.log("Lollipop chart loaded");
}).catch(console.error);

// Load lollipop chart
var heatmapOccupationRelevance = "occupation_relevance_heatmap.json";
vegaEmbed("#occupation_relevance_heatmap", heatmapOccupationRelevance).then(function(result) {
    console.log("Lollipop chart loaded");
}).catch(console.error);

// Load bar chart for gender
var barchartGender = "qualification_gender_barchart.json";
vegaEmbed("#qualification_gender_barchart", barchartGender).then(function(result) {
    console.log("Pie chart loaded");
}).catch(console.error);

// Load pie chart with dropdown
var SkillIndustryRelevance = "skill_level_relevance_industry_barchart.json";
vegaEmbed("#skill_level_relevance_industry_barchart", SkillIndustryRelevance).then(function(result) {
    console.log("Pie chart loaded");
}).catch(console.error);

// Map selector functionality
const mapFiles = {
    'bachelor': 'bachelor_map.json',
    'postgrad': 'postgrad_map.json',
    'grad_diploma': 'grad_diploma_map.json',
    'diploma': 'diploma_map.json',
    'cert34': 'cert34_map.json',
    'cert12': 'cert12_map.json',
    'cert_nfd': 'cert_nfd_map.json'
};

// Load default map (Bachelor)
vegaEmbed("#choropleth_map", mapFiles['bachelor']).then(function(result) {
    console.log("Choropleth map loaded");
}).catch(console.error);

// Handle dropdown change
document.getElementById('map-selector').addEventListener('change', function(e) {
    const selectedMap = e.target.value;
    vegaEmbed("#choropleth_map", mapFiles[selectedMap]).then(function(result) {
        console.log("Map changed to: " + selectedMap);
    }).catch(console.error);
});

// Load age enrollment area chart
var areaChartSpec = "qualifications_age_stacked_area.json";
vegaEmbed("#age_enrollment_area", areaChartSpec).then(function(result) {
    console.log("Age enrollment area chart loaded");
}).catch(console.error);