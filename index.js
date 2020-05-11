const express = require('express');
const app = express();	
const PORT = 8000;
const path = require('path');
const bodyParser = require('body-parser');


app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public'))); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// HOMPAGE SECTION STARTS HERE

// GET HOMEPAGE
app.get("/", (req, res) => { 
    console.log("This will get the home/index page.");
    res.render("index");
}); 
// HOMPAGE SECTION ENDS HERE


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 

