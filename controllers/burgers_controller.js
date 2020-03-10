const express = require("express");
const router = express.Router();
//Import model(burger.js)
const burger = require("../models/burger.js");
//GET all data from table and render to index.handlebars
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    let hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
  });
});
//POST user input/new burger 
router.post("/api/burgers", (req, res) => {
  burger.insert([req.body.burger_name], function(result) {
    res.redirect('/')
  });
});

// PUT (update) devoured boolean for the corresponding ID
router.put("/api/burgers/:id", (req, res) => {
  let condition = req.params.id;
  console.log(condition)
  burger.update(
    {
      devoured: req.body.devoured
    },
    condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});
//DELETE selected burger by ID
router.delete("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// Export routes for server.js to use.
module.exports = router;