const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
  for (var obj of tweets) {
    $("#tweets-container").append(createTweetElement(obj));
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

renderTweets(data);



