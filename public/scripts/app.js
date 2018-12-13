//Helper function that goes through array of tweets and runs each one
//through createTweetElement function before appending

function renderTweets(tweets) {
  let num = tweets.length - 1;
  for (num; num >= 0; num--) {
    $("#tweets-container").append(createTweetElement(tweets[num]));
  }
}

// function parses through tweet data and creates new tweet HTML element
function createTweetElement(tweet) {
  let $tweet = $("<article>").addClass("tweet");

  let header = $("<header>");
  let img = `<img src=${tweet.user.avatars.large} class="avatar">`;
  header.append(img);
  let username = $("<h2>").addClass("username").text(`${tweet.user.name}`)
  header.append(username);
  let handle = $("<p>").addClass("handle").text(`${tweet.user.handle}`)
  header.append(handle);
  $tweet.append(header);

  let div = $("<div>").addClass("tweet-body");
  let tweettext = $("<p>").addClass("tweet-text").text(`${tweet.content.text}`);
  div.append(tweettext);
  $tweet.append(div);

  let footer = $("<footer>");
  let date = moment(tweet.created_at).fromNow();
  let timestamp = $("<p>").addClass("timestamp").text(date);
  let icons = $("<span>").addClass("icons").html('<i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i>');
  footer.append(timestamp);
  footer.append(icons);
  $tweet.append(footer);

  return $tweet;
}

$(document).ready(function() {


//Upon the "Tweet" button being clicked, checks if error message is visible
//If yes, runs slide up animation before running tweet validation
//If not, automatically runs tweet validation function
var $newtweet = $("#post-tweet");
$newtweet.submit(function (event) {
  console.log('Button clicked!');
  event.preventDefault();
  if ($(".alert").is(":visible")) {
    $(".alert").slideUp("slow", function () {
      tweetValidation();
    });
  } else {
    tweetValidation();
  }

});

//Tweet validation (checks for null or more than 140 characters)
function tweetValidation() {
  let tweetLength = $("textarea").val().length;
  if (tweetLength === 0) {
    $(".alert").html("&nbsp;&times;&nbsp;&nbsp;&nbsp;Oops! Looks like you forgot to type a Tweet.").slideDown("slow");
  } else if (tweetLength > 140) {
    $(".alert").html("&nbsp;&times;&nbsp;&nbsp;&nbsp;Your tweet is too long! Try something pithier.").slideDown("slow");
  } else {
    let formData = $newtweet.serialize();
    $(".new-tweet textarea").val('').focus();
    $(".new-tweet .counter").text(140);
    $.post('/tweets', formData, function (data, status) {
    loadRecentTweet();
    })
  }
}

//AJAX get request function that sends returned array to renderTweets function
function loadTweets() {
  $.get('/tweets', function(loadedTweets) {
    renderTweets(loadedTweets);
  });
}

//Prepends most recent Tweet upon submission by user (after validation)
function loadRecentTweet() {
  $.get('/tweets', function(loadedTweets) {
  let arr = loadedTweets.length - 1;
  $("#tweets-container").prepend(createTweetElement(loadedTweets[arr]));
  });
}

//Calls loadTweets function to load Tweets already in database
loadTweets();

//Toggle animation for "Compose" button
$(".compose").click(function() {
  $(".new-tweet").slideToggle("slow", function() {
    $(".new-tweet textarea").focus();
  })
})

})

