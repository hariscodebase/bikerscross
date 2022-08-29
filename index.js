const express = require("express");
const path = require("path");

const app = express();
const port = process.env.port || 5000; //set a port number

app.set("views", path.join(__dirname, "views")); //set express views 
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); //set path for static files

var siteTitle = "Bikers Cross";

//routes
app.get("/", (req, res) => {
    res.render("home", { title: siteTitle, headerText: "Meet new and passionate bikers nearby."})
});

app.get("/pricing", (req, res) => {
    res.render("pricing", { title: siteTitle, headerText: "Choose the plan the best suits your needs."});
})

app.get("/gallery", (req, res) => {
    res.render("gallery", { title: siteTitle, headerText: "Here are our recent events"});
})


//setup server listen
app.listen(process.env.port || 5000, () => {
    //console.log(`Listening on http://localhost:${port}`);
})