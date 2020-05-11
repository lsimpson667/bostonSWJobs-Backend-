const express = require('express');
const bodyParser = require("body-parser");
const companyRouter = express.Router();

companyRouter.use(bodyParser.json());
companyRouter.use(bodyParser.urlencoded({extended: true}));

// COMPANIES SECTION STARTS HERE
// Order:  Get, Get, Post, then Get Get Put, Delete

// GET COMPANIES
companyRouter.get("/companies", (req, res) => { 
    console.log("This will get the entire list of companies.");
    res.render("companies", { 

    });
});    

//CREATE A NEW COMPANY
companyRouter.post('/companies', (req, res) =>{
    console.log(`This will CREATE company: ${req.body.company} into the database`);
    res.render("companies", {

    });
});

// READ THE PAGE IN ORDER TO CREATE NEW COMPANY
companyRouter.get('/new-company', (req, res) => {
    console.log("This will get the location for the new company");
    res.render("companies", {

    });
});

// //READ COMPANY'S PROFILE PAGE
// companyRouter.get('/:companyId', (req, res) =>{
//     res.send(`WILL READ the details page of company: ${req.params.companyId}`);
// });


// EDIT A COMPANY
companyRouter.get('/:companyId/edit', (req, res) => {
    console.log(`A page with a form that can edit company: ${req.params.companyId} and update it in the database`);
    res.render("/companies", {

    })
});


// UPDATE A COMPANY
companyRouter.put('/:companyId', (req,res) =>{
    console.log(`WILL UPDATE company: ${req.body.title} into the database`);
    res.render("/companies", {

    });
});


// DELETE A COMPANY
companyRouter.delete('/:companyId', (req, res) => {
    console.log(`This will delete the company: ${req.params.companyId}`);
    res.render("/companies", {

    });
});



// gives ability to export router to anyone who wants to use it (entry point)
module.exports = companyRouter;