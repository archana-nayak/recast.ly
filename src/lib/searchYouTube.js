var OAUTH2_CLIENT_ID = window.YOUTUBE_API_KEY;
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

// var dataObj = {videos: []};

var searchYouTube = (options, callback) => {
  // TODO
  var myUrl = 'https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=5&q=testthing&key=AIzaSyCZI8rHy4F1uSsxbG8y6JVn4qXw_s0hC28';
  var jqxhr = $.get( myUrl, function(data) {
    console.log('data from youtube ', data.items);
    callback(data.items);
    // console.log('youTubeVideoData', youTubeVideoData);
    
  });
    // .done(function() {
    //   alert( "second success" );
    // })
    // .fail(function() {
    //   alert( "error" );
    // })
    // .always(function() {
    //   alert( "finished" );
    // });
   
  // Perform other work here ...
   
  // Set another completion function for the request above
  // jqxhr.always(function() {
  //   alert( "second finished" );
  // });
        
};

window.searchYouTube = searchYouTube;
// window.youTubeVideoData = dataObj[videos];
// console.log('In search ', window.youTubeVideoData);

