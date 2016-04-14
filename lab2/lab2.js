var happinesInfo = [];
var countriesInfo = [];
var generalHappiness = [];
var lifeExpectancy = [];
var tempLifeExpectancy = [];
var maxHappiness = 0;
var minHappiness = 100;
var worldAnswers = null;

d3.csv("Feeling_of_happiness_csv2.csv", function(data) {
	happinesInfo = data.map(function(d) { return d; }); 
	for (var i in happinesInfo) {
		var generalHappy = ( parseFloat(happinesInfo[i]["Very happy"]) + parseFloat(happinesInfo[i]["Rather happy"]) )/2 - ( parseFloat(happinesInfo[i]["Not very happy"]) - parseFloat(happinesInfo[i]["Not at all happy"]) - parseFloat(happinesInfo[i]["Don't know"]) )/3;
		generalHappiness[happinesInfo[i].Country] = parseFloat(generalHappy.toFixed(2)); 
		if(generalHappy > maxHappiness){ maxHappiness = generalHappy;}
		if(generalHappy < minHappiness){ minHappiness = generalHappy;}
		
		countriesInfo[happinesInfo[i].Country] = i;
	}
	for (var j in generalHappiness){
		generalHappiness[j] = generalHappiness[j]/maxHappiness;
	}

	console.log(countriesInfo);
	console.log(generalHappiness);
	console.log(happinesInfo);

	worldAnswers = [
		{"val": parseFloat(happinesInfo[countriesInfo["World"]]["Not at all happy"]), "key":"Not at all happy"},
		{"val": parseFloat(happinesInfo[countriesInfo["World"]]["Not very happy"]), "key":"Not very happy"},
		{"val": parseFloat(happinesInfo[countriesInfo["World"]]["Don't know"]), "key":"Dont know"},
		{"val": parseFloat(happinesInfo[countriesInfo["World"]]["Rather happy"]), "key":"Rather happy"},
		{"val": parseFloat(happinesInfo[countriesInfo["World"]]["Very happy"]), "key":"Very happy"}
	];
	d3.select(".selectionOfCountries").append("h2").text("World");
	generateChart(worldAnswers);

	d3.select(".averageHappyContainer").selectAll("*").remove();
	d3.select(".averageHappyContainer").append("h2").text("Average Happiness: " + (generalHappiness["World"]*100).toFixed(1) + "%");

	d3.select("#globalButton")
		.on("click",function(d){ 
			d3.select(".chartContainer").selectAll("*").remove();
			if(selectedCountry.length > 0){
				d3.select(".selectedCountry").style("stroke","white").style("stroke-width","0.5px");
				d3.select(".selectedCountry").attr("class","notSelectedCountry country");
				d3.select(".selectionOfCountries").selectAll("*").remove();
				selectedCountry = [];
			}
			d3.select(".selectionOfCountries").selectAll("*").remove();
			d3.select(".selectionOfCountries").append("h2").text("World");

			d3.select(".averageHappyContainer").selectAll("*").remove();
			d3.select(".averageHappyContainer").append("h2").text("Average Happiness: " + (generalHappiness["World"]*100).toFixed(1) + "%");

			d3.select(".graphContainer").selectAll("*").remove();
			generateChart(worldAnswers);

			d3.select(".gapMinderContainer").selectAll("*").remove();
			d3.select(".gapMinderContainer").append("h2").text("Life Expectancy: " + lifeExpectancy["World"] + " years");
		});

});

d3.csv("life_expectancy_at_birth.csv", function(data){
	tempLifeExpectancy = data.map(function(d){ return d;});
	for( var i in tempLifeExpectancy){
		lifeExpectancy[tempLifeExpectancy[i]["Country"]] = parseFloat(tempLifeExpectancy[i]["2010-2014"]).toFixed(1);  
	}
	d3.select(".gapMinderContainer").append("h2").text("Life Expectancy: " + lifeExpectancy["World"] + " years");
});

var mapWidth = 1000,
    mapHeight = 600,
    centered;

var projection = d3.geo.mercator()
	.translate([mapWidth / 2, mapHeight / 2])
    .scale((mapWidth+1) / 2.5 / Math.PI)
    .precision(0.1)
    .center([0,	40]);

var worldsvg = d3.select(".worldContainer")
	.append("div").style("width","85%").style("text-align","center")
	.append("svg").attr("width", mapWidth).attr("height", mapHeight);

var path = d3.geo.path()
    .projection(projection);

var g = worldsvg.append("g");

var colorFill = d3.scale.linear()
	.domain([0,1])
	.range(["#FF0000","#00FF5A"]);

// load and display the World
d3.json("world.json", function(world) {
	g.selectAll("path")
	.data(world.features)
		.enter()
	.append("path")
	.attr("d", path)
	.attr("id", function(d){ return d.properties.name; })
	.attr("class","notSelectedCountry country")
	.style("fill", function(d){ 
		if( generalHappiness[d.properties.name] ){
			// return "rgb(" + parseFloat(generalHappiness[d.properties.name])*100 + "%," + parseFloat(generalHappiness[d.properties.name])*10 + "%, 0%)";
			return colorFill(parseFloat(generalHappiness[d.properties.name]));
		}else { 
			return "grey";
		}
	})
	.on("mouseover", function(d){
		if(!d3.select(this).classed("selectedCountry")){
			d3.select(this).style("stroke","red").style("stroke-width","1px");
			d3.select(".countryInfo").text( d.properties.name  + " - Happiness: " + (generalHappiness[d.properties.name]*100).toFixed(1) + "%");
		}
	})
	.on("mouseout", function(d){
		if(!d3.select(this).classed("selectedCountry")){
			d3.select(this).style("stroke", "white").style("stroke-width","0.5px");
			d3.select(".countryInfo").text( "Hover over country for average happiness. Click for detailed view!" );
		}
	})
	.on("click", clicked);
});

var zoom = d3.behavior.zoom()
	.on("zoom",function() {
		g.attr("transform","translate(" + d3.event.translate.join(",") + ")scale(" + d3.event.scale + ")");
		g.selectAll("path").attr("d", path.projection(projection)); 
	});
worldsvg.call(zoom);

var selectedCountry = [];

function clicked (d) {
	var chartContainer = d3.select(".graphContainer");
	d3.select(".selectionOfCountries").selectAll("*").remove();
	d3.select(".gapMinderContainer").selectAll("*").remove();

	if(d3.select(this).classed("notSelectedCountry")){
		if(selectedCountry.length > 0){
			d3.select(".selectedCountry").style("stroke","white").style("stroke-width","0.5px");
			d3.select(".selectedCountry").attr("class","notSelectedCountry country");
			selectedCountry = [];
		}
		d3.select(this).attr("class","selectedCountry country").style("stroke", "pink").style("stroke-width","2px");
		chartContainer.selectAll("*").remove();
		selectedCountry.push(d);

		d3.select(".selectionOfCountries").selectAll("h2").data(selectedCountry).enter()
			.append("h2")
			.text(function(d){return d.properties.name;})
			.style("color","#B30000");

		d3.select(".gapMinderContainer").append("h2").text("Life Expectancy: " + lifeExpectancy[d.properties.name] + " years");

		d3.select(".averageHappyContainer").selectAll("*").remove();
		d3.select(".averageHappyContainer").append("h2").text("Average Happiness: " + (generalHappiness[d.properties.name]*100).toFixed(1) + "%");
		
		dataset = [
			{"val": parseFloat(happinesInfo[countriesInfo[d.properties.name]]["Not at all happy"]), "key":"Not at all happy"},
			{"val": parseFloat(happinesInfo[countriesInfo[d.properties.name]]["Not very happy"]), "key":"Not very happy"},
			{"val": parseFloat(happinesInfo[countriesInfo[d.properties.name]]["Don't know"]), "key":"Dont know"},
			{"val": parseFloat(happinesInfo[countriesInfo[d.properties.name]]["Rather happy"]), "key":"Rather happy"},
			{"val": parseFloat(happinesInfo[countriesInfo[d.properties.name]]["Very happy"]), "key":"Very happy"}
		];
		generateChart(dataset);
	}
	else{
		d3.select(this).style("stroke","white").style("stroke-width","0.5px");
		d3.select(this).attr("class","notSelectedCountry country");
		selectedCountry = [];
		d3.select(".selectionOfCountries").selectAll("*").remove();
		d3.select(".selectionOfCountries").append("h2").text("World");

		d3.select(".averageHappyContainer").selectAll("*").remove();
		d3.select(".averageHappyContainer").append("h2").text("Average Happiness: " + (generalHappiness["World"]*100).toFixed(1) + "%");
		
		chartContainer.selectAll("*").remove();
		generateChart(worldAnswers);

		d3.select(".gapMinderContainer").selectAll("*").remove();
		d3.select(".gapMinderContainer").append("h2").text("Life Expectancy: " + lifeExpectancy[d.properties.name] + " years");
	}
}

function generateChart(dataset){
	var chartWidth = 362,
		chartHeight = 300;
	var	barPadding = -0.9;

	var chartsvg = d3.select(".graphContainer")
		.append("div").style("width","100%").style("text-align","center").style("height","600px")
		.append("svg")
		.attr("width", chartWidth)
		.attr("height", chartHeight)
		.attr("id","chartsvg");

	chartsvg.selectAll("rect").data(dataset).enter()
		.append("rect")
		.attr("x",function(d, i){
			return i * (chartWidth / dataset.length);
		})
		.attr("y",function(d, i){
			return chartHeight - (d.val*3);
		})
		.attr("width", chartWidth / (dataset.length - barPadding) )
		.attr("height",function(d){ return d.val*3; })
		.style("fill",function(d) {
		    return "rgb(0,100, 0)";
		});
	
	chartsvg.selectAll("text")
		.data(dataset)
		.enter()
		.append("text")
		.text(function(d){return d.val + "%";})
		.attr("x", function(d, i ){ return i * (chartWidth / dataset.length) + (chartWidth / dataset.length - barPadding) / 2; })
		.attr("y", function(d){ return chartHeight - (d.val*3) - 5; })
		.attr("text-anchor", "middle")
		.style("fill", "white");
}

function changeFill(rangeValue){
	document.getElementById('averageHLabel').innerHTML = (rangeValue*100).toFixed(0) +"%";
	d3.selectAll(".country").each(function(){
		if( generalHappiness[d3.select(this).attr("id")] < rangeValue){
			d3.select(this).style("fill","black");
		}else{
			if(generalHappiness[d3.select(this).attr("id")]){
				d3.select(this).style("fill",colorFill(parseFloat(generalHappiness[d3.select(this).attr("id")])));
				// d3.select(this).style("fill","rgb(" + parseFloat(generalHappiness[d3.select(this).attr("id")])*100 + "%," + parseFloat(generalHappiness[d3.select(this).attr("id")])*10 + "%, 0%)");
			}else{
			}
		}
	});
}