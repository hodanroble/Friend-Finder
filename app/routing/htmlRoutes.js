//dependency required for this piece.
var path = require("path");

//export the following information into the app(express) for use.
module.exports = function(app) {

    //navigate back to the home page.
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //navigate to the survey page.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
};