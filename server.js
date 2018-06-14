
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var PORT = process.env.PORT || 3000; 


var app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});