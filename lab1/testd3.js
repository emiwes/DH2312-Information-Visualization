
// var data = [1, 1, 2, 3, 5, 8, 13, 21];
// var body = d3.select("body");
// var div = body.append("div");
// div.html("Hello, woooooooooooooooorld!");
d3.select("body")
	.style("color", "black")
	.style("background-color", "white");

// d3.select(".chart")
// 	.selectAll("div")
// 	.data(data)
// 	.enter().append("div")
// 	.style("width", function(d) { return d * 10 + "px"; })
// 	.text(function(d) { return d; });



// function getGroupMembers(_id){
// 	for ( var person in persons ){
// 		if(person.Group == _id){
// 			console.log(person);
// 		}
// 	}
// }

// ################################################

// ################################################

 var persons = [
  {
    "id":"Person 2",
    "Average":"4.9",
    "Programming":"5.7",
    "Maths":"4.5",
    "Graphics":"4.3",
    "Group":1,
    "Role":"Graphics"
  },
  {
    "id":"Person 27",
    "Average":"6.3",
    "Programming":"5.3",
    "Maths":"6.0",
    "Graphics":"6.7",
    "Group":1,
    "Role":"Graphics"
  },
  {
    "id":"Person 28",
    "Average":"4.9",
    "Programming":"3.3",
    "Maths":"6.5",
    "Graphics":"2.3",
    "Group":1,
    "Role":"Mathematician"
  },
  {
    "id":"Person 41",
    "Average":"6.1",
    "Programming":"6.0",
    "Maths":"8.0",
    "Graphics":"3.3",
    "Group":1,
    "Role":"Mathematician"
  },
  {
    "id":"Person 48",
    "Average":"5.6",
    "Programming":"9.0",
    "Maths":"5.0",
    "Graphics":"4.0",
    "Group":1,
    "Role":"Programmer"
  },
  {
    "id":"Person 7",
    "Average":"6.7",
    "Programming":"6.0",
    "Maths":"9.5",
    "Graphics":"4.7",
    "Group":1,
    "Role":"Programmer"
  },
  {
    "id":"Person 72",
    "Average":"3.9",
    "Programming":"3.0",
    "Maths":"2.5",
    "Graphics":"3.3",
    "Group":1,
    "Role":"Mathematician"
  },
  {
    "id":"Person 21",
    "Average":"4.2",
    "Programming":"4.7",
    "Maths":"3.5",
    "Graphics":"4.3",
    "Group":10,
    "Role":"Mathematician"
  },
  {
    "id":"Person 33",
    "Average":"6.0",
    "Programming":"6.7",
    "Maths":"6.0",
    "Graphics":"4.7",
    "Group":10,
    "Role":"Programmer"
  },
  {
    "id":"Person 36",
    "Average":"6.7",
    "Programming":"6.7",
    "Maths":"6.0",
    "Graphics":"7.7",
    "Group":10,
    "Role":"Programmer"
  },
  {
    "id":"Person 54",
    "Average":"5.7",
    "Programming":"4.3",
    "Maths":"6.0",
    "Graphics":"5.3",
    "Group":10,
    "Role":"Graphics"
  },
  {
    "id":"Person 57",
    "Average":"5.4",
    "Programming":"4.7",
    "Maths":"7.0",
    "Graphics":"5.0",
    "Group":10,
    "Role":"Graphics"
  },
  {
    "id":"Person 58",
    "Average":"5.6",
    "Programming":"4.3",
    "Maths":"6.5",
    "Graphics":"3.7",
    "Group":10,
    "Role":"Mathematician"
  },
  {
    "id":"Person 13",
    "Average":"5.1",
    "Programming":"4.7",
    "Maths":"4.5",
    "Graphics":"3.7",
    "Group":11,
    "Role":"Mathematician"
  },
  {
    "id":"Person 14",
    "Average":"5.4",
    "Programming":"4.7",
    "Maths":"3.5",
    "Graphics":"4.3",
    "Group":11,
    "Role":"Mathematician"
  },
  {
    "id":"Person 42",
    "Average":"6.3",
    "Programming":"6.7",
    "Maths":"6.5",
    "Graphics":"5.0",
    "Group":11,
    "Role":"Programmer"
  },
  {
    "id":"Person 53",
    "Average":"5.4",
    "Programming":"5.0",
    "Maths":"5.5",
    "Graphics":"5.3",
    "Group":11,
    "Role":"Graphics"
  },
  {
    "id":"Person 65",
    "Average":"7.0",
    "Programming":"6.7",
    "Maths":"5.0",
    "Graphics":"7.7",
    "Group":11,
    "Role":"Programmer"
  },
  {
    "id":"Person 66",
    "Average":"4.6",
    "Programming":"2.0",
    "Maths":"4.5",
    "Graphics":"5.3",
    "Group":11,
    "Role":"Graphics"
  },
  {
    "id":"Person 20",
    "Average":"3.9",
    "Programming":"1.3",
    "Maths":"5.0",
    "Graphics":"4.3",
    "Group":2,
    "Role":"Graphics"
  },
  {
    "id":"Person 24",
    "Average":"5.9",
    "Programming":"6.0",
    "Maths":"5.5",
    "Graphics":"5.0",
    "Group":2,
    "Role":"Programmer"
  },
  {
    "id":"Person 30",
    "Average":"7.2",
    "Programming":"8.7",
    "Maths":"4.5",
    "Graphics":"6.7",
    "Group":2,
    "Role":"Programmer"
  },
  {
    "id":"Person 39",
    "Average":"4.9",
    "Programming":"6.0",
    "Maths":"3.5",
    "Graphics":"4.0",
    "Group":2,
    "Role":"Mathematician"
  },
  {
    "id":"Person 56",
    "Average":"3.8",
    "Programming":"3.0",
    "Maths":"3.0",
    "Graphics":"4.0",
    "Group":2,
    "Role":"Mathematician"
  },
  {
    "id":"Person 60",
    "Average":"7.0",
    "Programming":"5.7",
    "Maths":"8.0",
    "Graphics":"6.3",
    "Group":2,
    "Role":"Graphics"
  },
  {
    "id":"Person 67",
    "Average":"4.3",
    "Programming":"3.3",
    "Maths":"5.0",
    "Graphics":"3.0",
    "Group":2,
    "Role":"Mathematician"
  },
  {
    "id":"Person 10",
    "Average":"5.7",
    "Programming":"5.7",
    "Maths":"6.0",
    "Graphics":"4.0",
    "Group":3,
    "Role":"Mathematician"
  },
  {
    "id":"Person 11",
    "Average":"4.9",
    "Programming":"3.7",
    "Maths":"7.0",
    "Graphics":"2.3",
    "Group":3,
    "Role":"Mathematician"
  },
  {
    "id":"Person 22",
    "Average":"5.1",
    "Programming":"4.7",
    "Maths":"3.0",
    "Graphics":"4.7",
    "Group":3,
    "Role":"Graphics"
  },
  {
    "id":"Person 29",
    "Average":"4.2",
    "Programming":"3.0",
    "Maths":"5.0",
    "Graphics":"3.0",
    "Group":3,
    "Role":"Mathematician"
  },
  {
    "id":"Person 46",
    "Average":"7.0",
    "Programming":"8.3",
    "Maths":"5.5",
    "Graphics":"6.7",
    "Group":3,
    "Role":"Programmer"
  },
  {
    "id":"Person 47",
    "Average":"6.1",
    "Programming":"5.3",
    "Maths":"5.5",
    "Graphics":"6.0",
    "Group":3,
    "Role":"Graphics"
  },
  {
    "id":"Person 70",
    "Average":"6.0",
    "Programming":"6.0",
    "Maths":"3.5",
    "Graphics":"5.3",
    "Group":3,
    "Role":"Programmer"
  },
  {
    "id":"Person 1",
    "Average":"6.1",
    "Programming":"6.0",
    "Maths":"6.0",
    "Graphics":"5.3",
    "Group":4,
    "Role":"Programmer"
  },
  {
    "id":"Person 17",
    "Average":"4.4",
    "Programming":"3.7",
    "Maths":"3.5",
    "Graphics":"3.3",
    "Group":4,
    "Role":"Mathematician"
  },
  {
    "id":"Person 49",
    "Average":"7.1",
    "Programming":"8.0",
    "Maths":"6.5",
    "Graphics":"6.7",
    "Group":4,
    "Role":"Programmer"
  },
  {
    "id":"Person 51",
    "Average":"4.0",
    "Programming":"5.3",
    "Maths":"3.0",
    "Graphics":"2.7",
    "Group":4,
    "Role":"Mathematician"
  },
  {
    "id":"Person 63",
    "Average":"6.1",
    "Programming":"5.0",
    "Maths":"5.5",
    "Graphics":"6.0",
    "Group":4,
    "Role":"Graphics"
  },
  {
    "id":"Person 69",
    "Average":"4.3",
    "Programming":"2.7",
    "Maths":"5.0",
    "Graphics":"3.7",
    "Group":4,
    "Role":"Mathematician"
  },
  {
    "id":"Person 73",
    "Average":"4.4",
    "Programming":"2.3",
    "Maths":"4.0",
    "Graphics":"4.7",
    "Group":4,
    "Role":"Graphics"
  },
  {
    "id":"Person 12",
    "Average":"4.0",
    "Programming":"2.7",
    "Maths":"6.0",
    "Graphics":"3.3",
    "Group":5,
    "Role":"Mathematician"
  },
  {
    "id":"Person 3",
    "Average":"5.3",
    "Programming":"5.3",
    "Maths":"4.5",
    "Graphics":"4.3",
    "Group":5,
    "Role":"Mathematician"
  },
  {
    "id":"Person 50",
    "Average":"4.7",
    "Programming":"4.0",
    "Maths":"4.0",
    "Graphics":"4.7",
    "Group":5,
    "Role":"Graphics"
  },
  {
    "id":"Person 59",
    "Average":"5.9",
    "Programming":"7.7",
    "Maths":"3.5",
    "Graphics":"6.0",
    "Group":5,
    "Role":"Programmer"
  },
  {
    "id":"Person 6",
    "Average":"4.6",
    "Programming":"3.7",
    "Maths":"6.0",
    "Graphics":"3.0",
    "Group":5,
    "Role":"Mathematician"
  },
  {
    "id":"Person 71",
    "Average":"6.0",
    "Programming":"6.0",
    "Maths":"4.5",
    "Graphics":"6.3",
    "Group":5,
    "Role":"Programmer"
  },
  {
    "id":"Person 9",
    "Average":"6.2",
    "Programming":"5.7",
    "Maths":"6.0",
    "Graphics":"5.7",
    "Group":5,
    "Role":"Graphics"
  },
  {
    "id":"Person 26",
    "Average":"4.8",
    "Programming":"5.3",
    "Maths":"4.5",
    "Graphics":"4.0",
    "Group":6,
    "Role":"Mathematician"
  },
  {
    "id":"Person 34",
    "Average":"5.6",
    "Programming":"4.7",
    "Maths":"5.0",
    "Graphics":"5.7",
    "Group":6,
    "Role":"Graphics"
  },
  {
    "id":"Person 35",
    "Average":"4.0",
    "Programming":"3.0",
    "Maths":"2.0",
    "Graphics":"5.0",
    "Group":6,
    "Role":"Graphics"
  },
  {
    "id":"Person 40",
    "Average":"5.9",
    "Programming":"6.3",
    "Maths":"5.0",
    "Graphics":"5.7",
    "Group":6,
    "Role":"Programmer"
  },
  {
    "id":"Person 61",
    "Average":"6.2",
    "Programming":"7.7",
    "Maths":"5.0",
    "Graphics":"5.7",
    "Group":6,
    "Role":"Programmer"
  },
  {
    "id":"Person 67",
    "Average":"4.2",
    "Programming":"1.7",
    "Maths":"4.0",
    "Graphics":"3.7",
    "Group":6,
    "Role":"Mathematician"
  },
  {
    "id":"Person 68",
    "Average":"5.0",
    "Programming":"3.7",
    "Maths":"6.0",
    "Graphics":"3.0",
    "Group":6,
    "Role":"Mathematician"
  },
  {
    "id":"Person 15",
    "Average":"4.4",
    "Programming":"5.3",
    "Maths":"4.5",
    "Graphics":"2.7",
    "Group":7,
    "Role":"Mathematician"
  },
  {
    "id":"Person 19",
    "Average":"6.3",
    "Programming":"6.3",
    "Maths":"5.0",
    "Graphics":"6.0",
    "Group":7,
    "Role":"Programmer"
  },
  {
    "id":"Person 23",
    "Average":"6.1",
    "Programming":"5.7",
    "Maths":"4.5",
    "Graphics":"5.7",
    "Group":7,
    "Role":"Graphics"
  },
  {
    "id":"Person 43",
    "Average":"3.3",
    "Programming":"1.3",
    "Maths":"4.5",
    "Graphics":"3.0",
    "Group":7,
    "Role":"Mathematician"
  },
  {
    "id":"Person 44",
    "Average":"6.9",
    "Programming":"7.0",
    "Maths":"5.0",
    "Graphics":"7.3",
    "Group":7,
    "Role":"Programmer"
  },
  {
    "id":"Person 45",
    "Average":"5.0",
    "Programming":"2.7",
    "Maths":"5.0",
    "Graphics":"5.0",
    "Group":7,
    "Role":"Graphics"
  },
  {
    "id":"Person 64",
    "Average":"4.4",
    "Programming":"4.0",
    "Maths":"5.5",
    "Graphics":"3.0",
    "Group":7,
    "Role":"Mathematician"
  },
  {
    "id":"Person 16",
    "Average":"4.7",
    "Programming":"3.0",
    "Maths":"2.0",
    "Graphics":"5.7",
    "Group":8,
    "Role":"Graphics"
  },
  {
    "id":"Person 25",
    "Average":"6.0",
    "Programming":"7.0",
    "Maths":"7.0",
    "Graphics":"4.7",
    "Group":8,
    "Role":"Programmer"
  },
  {
    "id":"Person 31",
    "Average":"4.9",
    "Programming":"4.3",
    "Maths":"6.0",
    "Graphics":"2.7",
    "Group":8,
    "Role":"Mathematician"
  },
  {
    "id":"Person 37",
    "Average":"5.6",
    "Programming":"4.3",
    "Maths":"5.0",
    "Graphics":"5.0",
    "Group":8,
    "Role":"Graphics"
  },
  {
    "id":"Person 55",
    "Average":"2.1",
    "Programming":"1.0",
    "Maths":"3.0",
    "Graphics":"1.3",
    "Group":8,
    "Role":"Mathematician"
  },
  {
    "id":"Person 62",
    "Average":"6.8",
    "Programming":"6.3",
    "Maths":"6.0",
    "Graphics":"6.3",
    "Group":8,
    "Role":"Programmer"
  },
  {
    "id":"Person 74",
    "Average":"4.9",
    "Programming":"5.0",
    "Maths":"5.5",
    "Graphics":"3.3",
    "Group":8,
    "Role":"Mathematician"
  },
  {
    "id":"Person 32",
    "Average":"6.2",
    "Programming":"5.7",
    "Maths":"6.0",
    "Graphics":"5.3",
    "Group":9,
    "Role":"Graphics"
  },
  {
    "id":"Person 38",
    "Average":"3.4",
    "Programming":"1.0",
    "Maths":"6.0",
    "Graphics":"1.3",
    "Group":9,
    "Role":"Mathematician"
  },
  {
    "id":"Person 4 ",
    "Average":"6.1",
    "Programming":"6.7",
    "Maths":"5.0",
    "Graphics":"4.7",
    "Group":9,
    "Role":"Programmer"
  },
  {
    "id":"Person 5",
    "Average":"4.7",
    "Programming":"4.3",
    "Maths":"3.0",
    "Graphics":"4.0",
    "Group":9,
    "Role":"Mathematician"
  },
  {
    "id":"Person 52",
    "Average":"5.2",
    "Programming":"4.0",
    "Maths":"5.5",
    "Graphics":"5.0",
    "Group":9,
    "Role":"Graphics"
  },
  {
    "id":"Person 75",
    "Average":"4.1",
    "Programming":"4.7",
    "Maths":"3.5",
    "Graphics":"4.0",
    "Group":9,
    "Role":"Mathematician"
  },
  {
    "id":"Person 8",
    "Average":"5.7",
    "Programming":"7.0",
    "Maths":"5.0",
    "Graphics":"4.3",
    "Group":9,
    "Role":"Programmer"
  }
];

var headerAmount = [1,2,3];
var groupNumbers = [1,2,3,4,5,6,7,8,9,10,11];

d3.select(".header")
	.selectAll("div")
	.data(headerAmount)
	.enter().append("div")
	.style("width", "30%")
	.style("background-color", function(d){
		if(d == 1){
			return "red"
		}else if(d == 2){
			return "orange"
		} else{
			return "green"
		}
	})
	.text(function(d){
		if(d == 1){
			return "Group Average < 4.5"
		}else if(d == 2){
			return "4.5 < Group Average > 5.0"
		} else{
			return "Group Average > 5"
		}
	})

// d3.select(".headerText")
// 	.selectAll("div")
// 	.data(headerAmount)
// 	.enter().append("div")
// 	.text(function(d){
// 		if(d == 1){
// 			return "Group Average < 4.5"
// 		}else if(d == 2){
// 			return "4.5 < Group Average > 5.0"
// 		} else{
// 			return "Group Average > 5"
// 		}
// 	})
// 	.style("width", "30%")

d3.select(".groups")
	.selectAll("div")
	.data(groupNumbers)
	.enter().append("div")
	.attr("class", "groupNumber")
	.attr("id", function(d){return d})
	.text(function(d){return d})
	.on("click", function(d){
		console.log("clicked");
	})
	.style("background-color", function(d){
		if( getGroupAverage(d) < 4.5){
			return "red"
		} else if(getGroupAverage(d) > 4.5 && getGroupAverage(d) < 5.0){
			return "orange"
		} else{
			return "green"
		}
	})
	.on("mouseenter", function(d){
		d3.select("#info" + d)
			.text(function(d){
				var group = getGroupMembers(d);
				var returnString = "";
				for (var person in group){
					returnString +=  group[person].id + ": " + "\nRole: " + group[person].Role + "\n\tAverage skill:  " + group[person].Average + " (10)\n\t\t" 
						+ "Math skill: " + group[person].Maths + " (10)\n\t\t" + "Programming skill: " + group[person].Programming + " (10)\n\t\t" 
						+ "Graphic skills: " + group[person].Graphics + " (10)\n\n"
				}
				return returnString
			})
			.style("display", "block");
	})
	.on("mouseleave", function(d){
		d3.select("#info" + d)
			.style("display", "none");
	})
	.append("div").attr("class", "averageGroup")
	.text(function(d){return "Group average: " + getGroupAverage(d)}).style("color", "white")
	.append("div").attr("class","groupSize")
	.text(function(d){return "Size: " + getGroupMembers(d).length + " people"});

d3.select(".infoContainer")
	.selectAll("div")
	.data(groupNumbers)
	.enter().append("div")
	.attr("id", function(d){return "info" + d})
	.attr("class", "groupMemberInfo")
	.style("position","absolute")
	.style("display", "none")
	.style("white-space", "pre")
	.style("font-size", "13px");


function getGroupMembers(groupNumber){
	var tempMembers = [];
	var i = 0;
	for (var person in persons){
		if( persons[person].Group == groupNumber){
			tempMembers[i] = persons[person];
			i++;
		}
	}
	return tempMembers
}

function getGroupAverage(groupNumber){
	var tempAverages = [];
	var average = 0;
	var i = 0;
	for (var person in persons){
		if(persons[person].Group == groupNumber){
			tempAverages[i] = persons[person].Average;
			i++;
		}
	}
	for (var a in tempAverages){
		average += parseInt(tempAverages[a]);
	}

	return ((average/tempAverages.length).toFixed(1));

}