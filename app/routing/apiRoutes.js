//dependencies for this page
var friends = require("../data/friends.js");
var path = require("path");

//add the following function to the app(express).
module.exports = function(app) {

    //get the information from the friends.js code.
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    //post the following information back out to be viewed.
    app.post("/api/friends", function(req, res) {
        // Code to find best match

        // Initialize array to hold comparison results
        var smallest = 100000; //set a large small score to insure that the smallest is adjusted later.
        var matchedFriend;

        //ForLoop through each friend in friends.js
        for (var i = 0; i < friends.length; i++) {

            // Here is an array to store our score info.
            var compArray = [];

            //another loop to pick over the scores
            for (var j = 0; j < friends[i].scores.length; j++) {
                var friendScore = friends[i].scores[j];
                // console.log("And the Friend Score IS!!!! " + friendScore);
                console.log("And the Friend Score IS!!!! " + JSON.stringify(req.body));
                var bodyScore = req.body["scores[]"][j];


                var pushItem = (friendScore - bodyScore)
                compArray.push(Math.abs(pushItem));
            }

            //arrow function used to control how the equation is worked along with reduce.
            var matchScore = compArray.reduce((a, b) => a + b, 0);

            //adjust the smallest score and matchedFriend according to the new values.
            if (matchScore < smallest) {
                smallest = matchScore;
                matchedFriend = friends[i];
            }
        }

        // Return best match to user
        res.json(matchedFriend);

        // Add current user to friendsArray
        friends.push(req.body);
    });
}