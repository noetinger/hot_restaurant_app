//Dependencies
var express = require("express");
var path = require("path");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Set up the Express app to handle the data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Table Data
var table = [
    {
    name: "Nack",
    phone: 7045556666,
    email: "nack@email.com",
    ID: "N420"
    }
];

//Routes
//Basic route that sends user to the Home Page
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

//route to reserve table page
app.get("/reserve", function (req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

//route to view table page
app.get("/tables", function (req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

//Display the tables


//Create new table




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });