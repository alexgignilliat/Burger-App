// Requiring Dependencies -- express & body-parseconst express = require("express");
const bodyParser = require("body-parser");
const express = require("express")
// Variables for the server and express
const PORT = process.env.PORT || 3000;
const app = express();

// Serve static content for the app from the "public" directory 
app.use(express.static("public"));

// Parse application/urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});