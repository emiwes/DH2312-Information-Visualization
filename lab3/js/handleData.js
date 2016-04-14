

function initialize(){
	// console.log(FB14_jan_feb_PAGE);
	// console.log(FB14_feb_aug_PAGE);
	// console.log(FB14_aug_feb_PAGE);
	// console.log(FB15_feb_aug_PAGE);
	// console.log(FB15_aug_feb_PAGE);

	var wLikes_1 = getWeeklyLikesOnPage(FB14_jan_feb_PAGE[3]);
	var wLikes_2 = getWeeklyLikesOnPage(FB14_feb_aug_PAGE[3]);
	var wLikes_3 = getWeeklyLikesOnPage(FB14_aug_feb_PAGE[3]);
	var wLikes_4 = getWeeklyLikesOnPage(FB15_feb_aug_PAGE[3]);
	var wLikes_5 = getWeeklyLikesOnPage(FB15_aug_feb_PAGE[3]);

	var likeArray = [];
	var reachArray = [];

	// for (var i = 1; i < FB14_aug_feb_PAGE.length; i++){
	// 	likeArray[i] = parseInt(getDailyNewLikesOnPage(FB14_aug_feb_PAGE[i]));
	// 	reachArray[i] = parseInt(getDailyReachesOnPage(FB14_aug_feb_PAGE[i]));
	// }

	// testArray = [likeArray, reachArray];
	function createPostArray(array){
		var returnArray = [];
		for(var j = array.length-1; j > 0; j--){
			if(array[j]['Type'] === ''){
				array[j]['Type'] = 'Other';
			}
			returnArray.push({ 
				'Lifetime Engaged Users' : parseInt(checkIfEmpty(array[j]['Lifetime Engaged Users'])),
				'Lifetime Post Stories by action type - like' : parseInt(checkIfEmpty(array[j]['Lifetime Post Stories by action type - like'])),
				'Lifetime Post Stories by action type - share' : parseInt(checkIfEmpty(array[j]['Lifetime Post Stories by action type - share'])),
				'Lifetime Post Total Reach' : parseInt(checkIfEmpty(array[j]['Lifetime Post Total Reach'])),
				'Lifetime Post reach by people who like your Page' : parseInt(checkIfEmpty(array[j]['Lifetime Post reach by people who like your Page'])),
				'Lifetime Talking About This (Post) by action type - like' : parseInt(checkIfEmpty(array[j]['Lifetime Talking About This (Post) by action type - like'])),
				'Lifetime Talking About This (Post) by action type - share' : parseInt(checkIfEmpty(array[j]['Lifetime Talking About This (Post) by action type - share'])),
				'Permalink' :  array[j]['Permalink'],
				'Post ID' : 'name' + array[j]['Post ID'],
				'Post Message' : array[j]['Post Message'],
				'Type' : array[j]['Type'],
				'Posted' : getDateOfPost(array[j])
			});
		}
		return returnArray;
	}
	longerArray = 	createPostArray(FB14_jan_feb_POSTS).concat(
					createPostArray(FB14_feb_aug_POSTS).concat(
					createPostArray(FB14_aug_feb_POSTS).concat(
					createPostArray(FB15_feb_aug_POSTS).concat(
					createPostArray(FB15_aug_feb_POSTS) ))));


	// clustered(createPostArray(FB15_feb_aug_POSTS));
	clustered(longerArray);
	parallellData(longerArray);
}

//
//	PAGE FUNCTIONS
//
function getTotalLikesOnPage(day){
	return checkIfEmpty(day['Lifetime Total Likes']);
}

function getDateOfDayOnPage(day){
	var d = new Date(checkIfEmpty(day.Date));
	d = d.getDate() + '/' + (d.getMonth() + 1) + '/' + String(d.getFullYear()).slice(2,4);
	return d;
}

function getDailyEngagedUsersOnPage(day){
	return checkIfEmpty(day['Daily Page Engaged Users']);
}

function getDailyReachesOnPage(day){
	return checkIfEmpty(day['Daily Total Reach']);
}

function getDailyNewLikesOnPage(day){
	return checkIfEmpty(day['Daily New Likes']);
}

function getDailyNewUnlikesOnpage(day){
	return checkIfEmpty(day['Daily Unlikes']);
}

function getWeeklyLikesOnPage(day){
	return checkIfEmpty(day['Weekly Positive Feedback from Users - like']);
}

function getWeeklyEngagesOnPage(day){
	return checkIfEmpty(day['Weekly Page Engaged Users']);
}

function getWeeklyOrganicReachesOnPage(day){
	return checkIfEmpty(day['Weekly Total Reach']);
}


//
//	POST FUNCTIONS
//
function getTotalReachOfPost(post){
	return checkIfEmpty(post['Lifetime Post Total Reach']);
}

function getTotalLikesOfPost(post){
	return checkIfEmpty(post['Lifetime Talking About This (Post) by action type - like']);
}

function getPostID(post){
	return post['Post ID'];
}

function getPostLink(post){
	return post.Permalink;
}

function getPostMessage(post){
	return post['Post Message'];
}

function getDateOfPost(post){
	var postDate = post.Posted;
	postDate = postDate.slice(0,10);
	return postDate;
}

function getMinMaxReachOfPosts(posts){
	var maxReach = posts[0]['Lifetime Post Total Reach'];
	var minReach = posts[0]['Lifetime Post Total Reach'];
	for (var i = 1; i < posts.length; i++ ){
		if(posts[i]['Lifetime Post Total Reach'] > maxReach){
			maxReach = posts[i]['Lifetime Post Total Reach'];
		}
		if(posts[i]['Lifetime Post Total Reach'] < minReach){
			minReach = posts[i]['Lifetime Post Total Reach'];
		}
	}
	return [minReach, maxReach];
}

//
//	CHECK IF DATA IS '', RETURN '0' WHEN TRUE
//
function checkIfEmpty(string){
	if(string === '' || string === undefined){
		return '0';
	}else{
		return string;
	}
}


function getAllPostTypes(posts){
	var types = [];
	var tempType = '';
	types.push(posts[0]['Type']);
	for( var i = 0; i < posts.length; i++ ){
		if( (types.indexOf(posts[i]['Type']) <= -1) && posts[i]['Type'] !== ''){
			types.push(posts[i]['Type']);
			
		}
	}
	return types;
}





