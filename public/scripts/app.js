function renderTweets(tweets) {
  let num = tweets.length - 1;
  for (num; num >= 0; num--) {
    $("#tweets-container").append(createTweetElement(tweets[num]));
  }
}

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

  let body = $("<body>");
  let tweettext = $("<p>").addClass("tweet-text").text(`${tweet.content.text}`);
  body.append(tweettext);
  $tweet.append(body);

  let footer = $("<footer>");
  let date = new Date(tweet.created_at).toDateString();
  let timestamp = $("<p>").addClass("timestamp").text(date);
  let icons = $("<span>").addClass("icons").html('<i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i>');
  footer.append(timestamp);
  footer.append(icons);
  $tweet.append(footer);

  return $tweet;
}

$(document).ready(function() {

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

function tweetValidation() {
  let tweetLength = $("textarea").val().length;
  if (tweetLength === 0) {
    $(".alert").html("&nbsp;&times;&nbsp;&nbsp;&nbsp;Oops! Looks like you forgot to type a Tweet.").slideDown("slow");
  } else if (tweetLength > 140) {
    $(".alert").html("&nbsp;&times;&nbsp;&nbsp;&nbsp;Your tweet is too long! Try something pithier.").slideDown("slow");
  } else {
    let formData = $newtweet.serialize();
    $.post('/tweets', formData, function (data, status) {
    loadRecentTweet();
    })
  }
}

function loadTweets() {
  $.get('/tweets', function(loadedTweets) {
    renderTweets(loadedTweets);
  });
}

function loadRecentTweet() {
  $.get('/tweets', function(loadedTweets) {
  let arr = loadedTweets.length - 1;
  $("#tweets-container").prepend(createTweetElement(loadedTweets[arr]));
  });
}

loadTweets();

$(".compose").click(function() {
  $(".new-tweet").slideToggle("slow", function() {
    $(".new-tweet textarea").focus();
  })
})

})

