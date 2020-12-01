// const path = require("path"); // node.js module for working with directory paths
const express = require("express");
// const mongoose = require("mongoose")
// const db = require("./db/db")
// const postRouter = require("./Routes/post");
const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//    extended: false
// }));
// app.use(cors());
app.get("/", (req, res) => res.send("API Running"));
const PORT = process.env.PORT || 5000;
// app.use("/api/posts", postRouter)
app.listen(PORT, (req, res) => {
  console.log(`app is now listening to PORT ${PORT}`);
});
