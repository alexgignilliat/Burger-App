const express = require("express")
const bodyParser = require("body-parser");
//Variables for the server and express
const PORT = process.env.PORT || 8080;
const app = express();
//Serve static content for the app from the "public" directory 
app.use(express.static("public"));
//Parse urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//Parse JSON
app.use(bodyParser.json());
//Handlebars setup
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//Import routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);
// Start the server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});