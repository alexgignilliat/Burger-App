// Requiring express
const express = require("express");
const router = express.Router();
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    let hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
  });
});
//POST route which will post a new burger
router.post("/api/burgers", (req, res) => {
  burger.insert([req.body.burger_name], function(result) {
    res.redirect('/')
  });
});

// PUT route which will update the boolean devoured
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
//DELETE route which will delete selected burger by ID
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