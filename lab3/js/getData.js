

var FB14_jan_feb_PAGE = [];
var FB14_jan_feb_POSTS = [];


var FB14_feb_aug_PAGE = [];
var FB14_feb_aug_POSTS = [];

var FB14_aug_feb_PAGE = [];
var FB14_aug_feb_POSTS = [];

var FB15_feb_aug_PAGE = [];
var FB15_feb_aug_POSTS = [];

var FB15_aug_feb_PAGE = [];
var FB15_aug_feb_POSTS = [];



//
//			2014 JANUARI TO FEBRUARY DATA
//
d3.csv("data/Facebook Insights Data Export - Visualization Studio VIC - 2014-01-01 - 2014-02-27.csv", function(error, data) {
    data.forEach(function(d) {
        FB14_jan_feb_PAGE = data.map(function(d, i) {
        		return d;
		}); 
    });
    // console.log(FB14_jan_feb_PAGE);
 //    for(var i = 1; i < FB14_jan_feb_PAGE.length; i++){
	// 	console.log(FB14_jan_feb_PAGE[i].Date);
	// 	console.log('Daily New Likes: ' + FB14_jan_feb_PAGE[i]['Daily New Likes']);
	// 	console.log('Daily Unlikes: ' + FB14_jan_feb_PAGE[i]['Daily Unlikes']);
	// 	console.log('Daily total reach: ' + FB14_jan_feb_PAGE[i]['Daily Total Reach']);
	// 	console.log('Daily Total Consumers: ' + FB14_jan_feb_PAGE[i]['Daily Total Consumers']);
	// }
	d3.csv("data/Facebook Insights Data Export (Post Level) - Visualization Studio VIC - 2014-01-01 - 2014-02-27.csv", function(error, data) {
	    data.forEach(function(d) {
	        FB14_jan_feb_POSTS = data.map(function(d) {
	        	return d;
			}); 
	    });
		// console.log(FB14_jan_feb_POSTS);
		// console.log('Total Reach: ' +  FB14_jan_feb_POSTS[1]['Lifetime Post Total Reach']);
		// console.log('Message: ' + FB14_jan_feb_POSTS[1]['Post Message']);
		// console.log('Amount of Likes: ' + FB14_jan_feb_POSTS[1]['Lifetime Talking About This (Post) by action type - like']);
		// console.log('Post ID: ' + FB14_jan_feb_POSTS[1]['Post ID']);
		// console.log('Link to FB: ' + FB14_jan_feb_POSTS[1]['Permalink']);
		// console.log('Date: ' + FB14_jan_feb_POSTS[1]['Posted']);

		//
		//			2014 FEBRUARY TO AUGUST DATA
		//
		d3.csv("data/Facebook Insights Data Export - Visualization Studio VIC - 2014-02-28 - 2014-08-23.csv", function(error, data) {
		    data.forEach(function(d) {
		        FB14_feb_aug_PAGE = data.map(function(d) {
		        	return d;
				}); 
		    });
			// console.log(FB14_feb_aug_PAGE);

			d3.csv("data/Facebook Insights Data Export (Post Level) - Visualization Studio VIC - 2014-02-28 - 2014-08-23_2.csv", function(error, data) {
			    data.forEach(function(d) {
			        FB14_feb_aug_POSTS = data.map(function(d) {
			        	return d;
					}); 
			    });
				// console.log(FB14_feb_aug_POSTS);
				
				//
				//			2014 AUGUST TO FEBRUARY DATA
				//
				d3.csv("data/Facebook Insights Data Export - Visualization Studio VIC - 2014-08-24 - 2015-02-19.csv", function(error, data) {
				    data.forEach(function(d) {
				        FB14_aug_feb_PAGE = data.map(function(d) {
				        	return d;
						}); 
				    });
					// console.log(FB14_aug_feb_PAGE);

					d3.csv("data/Facebook Insights Data Export (Post Level) - Visualization Studio VIC - 2014-08-24 - 2015-02-19.csv", function(error, data) {
					    data.forEach(function(d) {
					        FB14_aug_feb_POSTS = data.map(function(d) {
					        	return d;
							}); 
					    });
						// console.log(FB14_aug_feb_POSTS);
						
						//
						//			2015 FEBRUARY TO AUGUST DATA
						//
						d3.csv("data/Facebook Insights Data Export - Visualization Studio VIC - 2015-02-20 - 2015-08-18.csv", function(error, data) {
						    data.forEach(function(d) {
						        FB15_feb_aug_PAGE = data.map(function(d) {
						        	return d;
								}); 
						    });
							// console.log(FB15_feb_aug_PAGE);

							d3.csv("data/Facebook Insights Data Export (Post Level) - Visualization Studio VIC - 2015-02-20 - 2015-08-18.csv", function(error, data) {
							    data.forEach(function(d) {
							        FB15_feb_aug_POSTS = data.map(function(d) {
							        	return d;
									}); 
							    });
								// console.log(FB15_feb_aug_POSTS	);

								//
								//			2015 AUGUST TO FEBRUARY DATA
								//
								d3.csv("data/Facebook Insights Data Export - Visualization Studio VIC - 2015-08-19 - 2016-02-15.csv", function(error, data) {
								    data.forEach(function(d) {
								        FB15_aug_feb_PAGE = data.map(function(d) {
								        	return d;
										}); 
								    });
									// console.log(FB15_aug_feb_PAGE);

									d3.csv("data/Facebook Insights Data Export (Post Level) - Visualization Studio VIC - 2015-08-19 - 2016-02-15.csv", function(error, data) {
									    data.forEach(function(d) {
									        FB15_aug_feb_POSTS = data.map(function(d) {
									        	return d;
											}); 
									    });
										// console.log(FB15_aug_feb_POSTS);

									    //
									    // INITALIZING VISUALIZATION
									    //
										initialize();
									});
								});
							});
						});
					});
				});
			});
		});
	});
});



