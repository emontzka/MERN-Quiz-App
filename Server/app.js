// const path = require("path"); // node.js module for working with directory paths
const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/qa", require("./routes/api/qa"));
app.use("/api/taxonomies", require("./routes/api/taxonomies"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`app is now listening to PORT ${PORT}`);
});
