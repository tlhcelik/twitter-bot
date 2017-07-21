var TwitterPackage = require('twitter');

var secret = {
  consumer_key: ' ',
  consumer_secret: ' ',
  access_token_key: ' ',
  access_token_secret: ' '
}
var Twitter = new TwitterPackage(secret);

// for post a twit , change status text 
/* 
Twitter.post('statuses/update', {status: 'Hi! I\'m tw bot. Download me github.com/tlhcelik/twitter-bot'},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
*/
// for read like top trends
Twitter.stream('statuses/filter', {track: '#deprem'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log('\n-------------------------------------\n',tweet.text,'\n-------------------------------------');
	
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
