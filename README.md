# Tweeter Project

Tweeter is a simple, single-page Twitter clone. This project uses HTML, CSS, JavaScript, jQuery and AJAX on the front end and Node, Express and MongoDB on the back end.

## Final Product

!["Screenshot of tweets"](https://github.com/uabdul/tweeter/blob/master/docs/tweet-stream.png?raw=true)
!["Screenshot of 'Compose Tweet' box"](https://github.com/uabdul/tweeter/blob/master/docs/compose-tweet.png?raw=true)

The final product is a single-page application that allows users to view a stream of tweets that are saved in the database and post new tweets using the "Compose" button.

## Dependencies

Tweeter requires the following dependencies:

- Express
- body-parser
- MongoDB
- chance

**NOTE**: Tweeter utilizes a MongoDB database called "tweeter," and tweets are saved within a collection named "tweets."

# Getting Started

In order to use Tweeter, please follow these steps:
- Install all dependencies (using the 'npm install' command in the command-line interface).
- Start the Mongo command line interface (type `mongo` in the command line)
- create a new database called 'tweeter' by typing `use tweeter`.
- To test the application's ability to read tweets from the database, seed some tweets in the "tweets" collection (sample tweets and instructions are below).
- Once the tweets have been seeded, exit the Mongo command line interface (Ctrl + C on a Mac) and go into the tweeter folder on the command line.
- Run the development web server using the `npm run local` command.
- Visit http://localhost:8080 in your browser and start tweeting!


# Sample Tweets and MongoDB Instructions

If you would like to test Tweeter using some sample tweets in your database, please follow these instructions:

- Type `mongo` in the command line.
- Create a new database called tweeter by typing `use tweeter`.
- create a new variable called tweets with some sample tweets (copy and paste the code below).
- Type 'db.tweets.insertMany(tweets)'.

Once you have completed these steps, continue with the instructions above. Here are some sample tweets to get you started:

```
var tweets = [
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
]
```
