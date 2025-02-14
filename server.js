const express = require("express");
const path = require("path");
const userRoutes = require("./routes/book");

const app = express();

// Middleware to parse JSON
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Use the routes
app.use("/", userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/users`);
});
