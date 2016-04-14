
function clustered(posts){

    // Setup
    var width = 600;
    var height = 600;
    var div = d3.select('.chart'),
        svg = div.append('svg')
            .attr('width', width)
            .attr('height', height),
            // .attr('viewBox','0 0 600 600')
            // .attr('preserveAspectRatio', 'xMidYMid'),
        rw = 25,
        rh = 25,
        rowPos = 'translate(0, 0)',
        rowNum = 0,
        colPos = 0,
        colNum = 0,
        columns = 20,
        padding = 5;

    var sortByDateBtn = d3.select('#sortDateBtn');
    var sortByReachBtn = d3.select('#sortReachBtn');
    var sortByLikeBtn = d3.select('#sortLikeBtn');
    var sortByTypeBtn = d3.select('#sortTypeBtn');

    var colorFill = d3.scale.linear()
        .domain([0,  getMaxreach(posts) - 28000])
        .range(["#FF0000","#00FF5A"]); // red to green

    var grp = svg.append('g')
        .style('width', '100%')
        .style('margin','0 auto')
        .attr('x','50%');

    // For each group, create a set of rectangles and them to the inner array
    // (the inner array is binded to the group)
    var rect = grp.selectAll('rect')
        .data(posts)
        .enter()
        .append('rect')
            .attr('transform', function(d,i){
                if(i % (columns) === 0){
                    rowPos = 'translate(0, ' + (rh + padding) * rowNum + ')';
                    rowNum++;
                }
                d3.select(this).attr('row', rowNum);
                return rowPos;
            })
            .attr('x', function(d, i) {
                colPos = (rw + padding) * colNum;
                d3.select(this).attr('col', colNum);
                if(colNum !== columns-1){
                    colNum++;
                }else{
                    colNum = 0;
                }
                return colPos;
            })
            .attr('width', rw)
            .attr('height', rh)
            .attr('fill', function(d, i){
                if( d['Lifetime Post Total Reach'] === getMaxreach(posts)){
                    return 'gold';
                }else{
                    return colorFill(d['Lifetime Post Total Reach']);
                }
            })
            .attr('id', function(d){
                return d['Post ID'];
            })
            .style('opacity', 1)

        .on('mouseover', function(d, i){
            d3.select("#date-text").text(d['Posted']);
            d3.select("#reach-text").text(d['Lifetime Post Total Reach']);
            d3.select("#like-text").text(d['Lifetime Talking About This (Post) by action type - like']);
            d3.select("#engagement-text").text(d['Lifetime Engaged Users']);
            d3.select("#type-text").text(d['Type']);
            d3.select(this).style('opacity', 0.5);
        })

        .on('mouseout', function(d, i){ 
            d3.select("#date-text").text('');
            d3.select("#reach-text").text('');
            d3.select("#like-text").text('');
            d3.select("#engagement-text").text('');
            d3.select("#type-text").text('');
            
            d3.select(this).style('opacity', function(d, i){
                if(!d3.select(this).classed('hidden')){
                    if(d3.select(this).classed('clicked')){
                        return 0.2;
                    }else{
                        return 1;
                    }
                }else if(d3.select(this).classed('hidden') && d3.select(this).classed('clicked')){
                    return 0.5;
                }else{
                    return 0;
                }
            });
        })
        .on('click', function(d, i){
            if(tempClicked != d3.select(this)){

                if(tempClicked){
                    if(tempClicked.classed('hidden')){
                        tempClicked.style('opacity', 0).classed('clicked', false); 
                    }
                    else{
                        tempClicked.style('opacity', 1).classed('clicked', false); 
                    }
                }
                if( d3.select(this).classed('hidden')){
                    d3.select(this).style('opacity', 0.5).classed('clicked', true);
                }else{
                    d3.select(this).style('opacity', 0.2).classed('clicked', true);
                }
                d3.select('#postDate').style('color', 'steelblue').text(d['Posted']);
                d3.select('#postType').text(' - ' + d['Type']);
                d3.select('#postMessage').text('"' + d['Post Message'] + '"');
                d3.select('#postReach').text(d['Lifetime Post Total Reach']);
                d3.select('#postLike').text(d['Lifetime Talking About This (Post) by action type - like']);
                d3.select('#postEngage').text(d['Lifetime Engaged Users']);
                d3.select("#postLink").text('facebook');
                d3.select("#postLink").attr('href', d['Permalink']);
                tempClicked = d3.select(this);

            }

        })
        .append('title').text(function (d, i) {
            return 'Reach: ' + d['Lifetime Post Total Reach'];
        });

    function getMinValue(array, _param){
        var minValue = array[0][_param];
        for(var k = 1; k< array.length; k++){
            if(array[k][_param] < minValue){
                minValue = array[k][_param];
            }
        }
        return minValue;
    }

    function sortBy(array, newSortedarray, _param){
        for(var i = 0; i < array.length; i++){
            if(array[i][_param] == getMinValue(array, _param)){
                newSortedarray.push(array[i]);
                array.splice(i, 1);
                sortBy(array, newSortedarray, _param);
                break;
            }
        }
        return newSortedarray;
    }

    function sortByType(_array, _newSortedArray){
        for(var i = 0; i < _array.length; i ++){
            if(typeExists(_array, 'Link')){
                if(_array[i]['Type'] == 'Link'){
                    _newSortedArray.push(_array[i]);
                    _array.splice(i, 1);
                    sortByType(_array, _newSortedArray);
                    continue;
                }
            }else if(typeExists(_array, 'Other')){
                if(_array[i]['Type'] == 'Other'){
                    _newSortedArray.push(_array[i]);
                    _array.splice(i, 1);
                    sortByType(_array, _newSortedArray);
                    continue;
                }
            }else if(typeExists(_array, 'Photo')){
               if(_array[i]['Type'] == 'Photo'){
                   _newSortedArray.push(_array[i]);
                   _array.splice(i, 1);
                   sortByType(_array, _newSortedArray);
                   continue;
               }
            }else if (typeExists(_array, 'SharedVideo')){
                if(_array[i]['Type'] == 'SharedVideo'){
                    _newSortedArray.push(_array[i]);
                    _array.splice(i, 1);
                    sortByType(_array, _newSortedArray);
                    continue;
                }
            }else if (typeExists(_array, 'Status')){
                if(_array[i]['Type'] == 'Status'){
                    _newSortedArray.push(_array[i]);
                    _array.splice(i, 1);
                    sortByType(_array, _newSortedArray);
                    continue;
                }
            }else{
                _newSortedArray.push(_array[i]);
                _array.splice(i, 1);
                sortByType(_array, _newSortedArray);
            }
        }

        return _newSortedArray;
    }

    function typeExists(_array, _type){
        for(var i = 0; i < _array.length; i++){
            if(_array[i]['Type'] == _type){
                return true;
            }
        }
        return false;
    }

    function animateSort(_sortedArray){
        rowPos = 'translate(0, 0)';
        rowNum = 0;
        colPos = 0;
        colNum = 0;
        for(var i = 0; i < _sortedArray.length; i++){
            var square = d3.select('#' + _sortedArray[i]['Post ID']);

            square.transition().delay(500).duration(1500)
                .attr('transform', function(){
                    if(i % (columns) === 0){
                        rowPos = 'translate(0, ' + (rh + padding) * rowNum + ')';
                        rowNum++;
                    }
                    square.attr('row', rowNum);
                    return rowPos;
                })
            
                .attr('x', function() {
                    colPos = (rw + padding) * colNum;
                    square.attr('col', colNum);
                    if(colNum !== columns-1){
                        colNum++;
                    }else{
                        colNum = 0;
                    }
                    return colPos;
                });
        }
    }


    sortByReachBtn.on('click',function(){
        var tempArray = posts.slice();
        var sortedArray = [];
        sortedArray = sortBy(tempArray, sortedArray, 'Lifetime Post Total Reach');
        animateSort(sortedArray);
    });

    sortByDateBtn.on('click', function(){
        animateSort(posts);
    });

    sortByLikeBtn.on('click', function(){
        var tempArray = posts.slice();
        var sortedArray = [];
        sortedArray = sortBy(tempArray, sortedArray, 'Lifetime Talking About This (Post) by action type - like');
        animateSort(sortedArray);
    });

    sortByTypeBtn.on('click', function(){
        var tempArray = posts.slice();
        var sortedArray = [];
        sortedArray = sortByType(tempArray, sortedArray);
        animateSort(sortedArray);
    });
}

var tempClicked;

function hideSquare(_post){
    var hiddenSquare = d3.select('#' + _post['Post ID']);
    if(hiddenSquare.classed('showing')){
        hiddenSquare.classed('showing', false);
    }
    hiddenSquare.classed('hidden',true);
    if(hiddenSquare.classed('clicked')){
        hiddenSquare.style('opacity',0.2);
    }else{
        hiddenSquare.style('opacity',0);
    }
}

function showSquare(_post){
    var showingSquare = d3.select('#' + _post['Post ID']);
    if(showingSquare.classed('hidden')){
        showingSquare.classed('hidden', false);
    }
    showingSquare.classed('showing', true);
    if(showingSquare.classed('clicked')){
        showingSquare.style('opacity',0.2);
    }else{
        showingSquare.style('opacity',1);
    }
}

function getMaxreach(array){
    var maxValue = 0;
    for( var j = 0; j< array.length; j++){
        if(array[j]['Lifetime Post Total Reach'] > maxValue){
            maxValue = array[j]['Lifetime Post Total Reach'];
        }
    }
    return maxValue;
}