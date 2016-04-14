function parallellData(data){

    var margin = {top: 30, right: -200, bottom: 500, left: 0},
    width = 1400,
    height = 500;

    var x = d3.scale.ordinal().rangePoints([0, width], 1),
        y = {},
        dragging = {};

    var line = d3.svg.line(),
        axis = d3.svg.axis().orient("left"),
        typeAxis = d3.svg.axis().orient("right"),
        reachAxis = d3.svg.axis().orient('left').ticks(5),
        background,
        foreground,
        highlight;

    var svg = d3.select('.parallelChart').append("svg")
        // .attr("width", '100%')
        // .attr("height", height + 50)
        .attr('viewBox','0 0 1400 600')
        .attr('preserveAspectRatio', 'xMidYMid')
      .append("g")
        .attr("transform", "translate(" + (margin.left) + "," + margin.top + ")");

    // Extract the list of dimensions and create a scale for each.
    x.domain(dimensions = d3.keys(data[0]).filter(function(d) {
        if (["Lifetime Talking About This (Post) by action type - like", "Lifetime Engaged Users", "Lifetime Talking About This (Post) by action type - share"].indexOf(d) > -1){
            return (y[d] = d3.scale.linear()
                .domain(d3.extent(data, function(p) { return +p[d]; }))
                .range([height, 0]));
        }else if(d == 'Type'){
            return (y[d] = d3.scale.ordinal()
                .domain(['Link', 'Other', 'Photo','SharedVideo', 'Status', 'Video'])
                .rangePoints([height, 0]));
        }else if(d == 'Lifetime Post Total Reach'){
            return (y[d] = d3.scale.sqrt()
                .domain(d3.extent(data, function(p) { if(p[d] == getMaxreach(data)){ return getMaxreach(data) + 100;}else{return +p[d]; }}))
                .range([height, 0]));
        }
    }));


      // Add grey background lines for context.
      background = svg.append("g")
          .attr("class", "background")
        .selectAll("path")
          .data(data)
        .enter().append("path")
          .attr("d", path);

      // Add pink foreground lines for focus.
      foreground = svg.append("g")
          .attr("class", "foreground")
        .selectAll("path")
          .data(data)
        .enter().append("path")
          .attr("d", path)
          .on('mouseover', function(d, i){
            d3.select("#l" + (i)).style("display","block");
            d3.select('#parallelReach').text(d['Lifetime Post Total Reach']);
            d3.select('#parallelLike').text(d['Lifetime Talking About This (Post) by action type - like']);
            d3.select('#parallelEngage').text(d['Lifetime Engaged Users']);
            d3.select('#parallelShare').text(d['Lifetime Talking About This (Post) by action type - share']);
            d3.select('#parallelType').text(d['Type']);
          })
          .on('mouseout', function(d, i){
            d3.select("#l" + (i)).style("display","none");
            d3.select('#parallelReach').text('0');
            d3.select('#parallelLike').text('0');
            d3.select('#parallelEngage').text('0');
            d3.select('#parallelShare').text('0');
            d3.select('#parallelType').text('post');
          }); 

      //gold highlight lines
      highlight = svg.append("g")
          .attr("class", "highlight")
        .selectAll("path")
          .data(data)
        .enter().append("path")
          .attr("d", path)
          .attr("id", function(d,i){return "l" + i;});


      // Add a group element for each dimension.
      var g = svg.selectAll(".dimension")
          .data(dimensions)
        .enter().append("g")
          .attr("class", "dimension")
          .attr("transform", function(d) { return "translate(" + x(d) + ")"; });

      // Add an axis and title.
      g.append("g")
        .attr("class", "axis")
        .each(function(d) {
            if(d == 'Type'){
                d3.select(this).call(typeAxis.scale(y[d]));
            }else if(d == 'Lifetime Post Total Reach'){
                d3.select(this).call(reachAxis.scale(y[d]));
            }
            else{
                d3.select(this).call(axis.scale(y[d])); 
            }
        })
        .append("text")
            .style("text-anchor", "middle")
            .style('fill','gold')
            .attr("y", -15)
            .text(function(d) {
                if(d === 'Type'){
                    return 'Type';
                }
                if(d === 'Lifetime Engaged Users'){
                    return 'Engages';
                }else if(d === 'Lifetime Post Total Reach'){
                    return 'Reach';
                }else if(d === 'Lifetime Talking About This (Post) by action type - like'){
                    return 'Likes';
                }else if(d === 'Lifetime Talking About This (Post) by action type - share'){
                    return 'Shares';
                }
            });

      // Add and store a brush for each axis.
      g.append("g")
          .attr("class", "brush")
          .each(function(d) {
            d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
          })
        .selectAll("rect")
          .attr("x", -12)
          .attr("width", 24);

    function position(d) {
      var v = dragging[d];
      return v == null ? x(d) : v;
    }

    // Returns the path for a given data point.
    function path(d) {
      return line(dimensions.map(function(p) { return [position(p), y[p](d[p])]; }));
    }

    function brushstart() {
      d3.event.sourceEvent.stopPropagation();
    }

    // Handles a brush event, toggling the display of foreground lines.
    function brush() {
        update = [];
        var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); });
        var extents = actives.map(function(p) { return y[p].brush.extent(); });
        foreground.style("display", function(d,i) {
            var state =  actives.every(function(p, i) {
                if (p == "Type"){
                    var value = ["Link","Other","Photo","SharedVideo","Status","Video"].reverse().indexOf(d[p])*100;
                }else{
                    var value = d[p];
                }
                return extents[i][0] <= value && value <= extents[i][1];
            }) ? null : "none";

            if(state == "none"){
                hideSquare(d);
            }else{
                showSquare(d);
            }
            return state;
      });

    }
}