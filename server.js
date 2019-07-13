//Dependencies
var express = require("express");
var path = require("path");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Set up the Express app to handle the data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Table Data
var table = [{
    name: "Nack",
    phone: 7045556666,
    email: "nack@email.com",
    ID: "N420"
}];

//Routes
//Basic route that sends user to the Home Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/home.html", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

//route to reserve table page
app.get("/reserve.html", function (req, res) {
    console.log("Sent reserve.html");
    res.sendFile(path.join(__dirname, "reserve.html"));
});

//route to view table page and display table
app.get("/tables.html", function (req, res) {
    console.log("Sent table.HTML");
    res.sendFile(path.join(__dirname, "tables.html"));
});

//route to view table page and display table
app.get("/tables", function (req, res) {
    console.log("Sent table data");
    return res.json(table);
});

//Create new table
app.post("/reserve.html", function (req, res) {
    console.log("posted reserve info.")
    var newTable = req.body;

    console.log(newTable);

    table.push(newTable);

    res.json(newTable);
    /* 
    //If there are more than 5 reservations, send to the wait list:
    if(tables.length > 5){
        for(i = 5; i < tables.length; i++){

        }
    }
    */
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});