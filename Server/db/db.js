const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url =
  "mongodb://testuser:<password>@cluster0-shard-00-00.ecaql.mongodb.net:27017?ssl=true&replicaSet=atlas-ceza4t-shard-0&authSource=admin&retryWrites=true&w=majority"; // Connect MongoDB at default port 27017.
const db = require("./db/db");
const postRouter = require("./Routes/post");
const app = express();

//db: Quiz-app-cluster
//user: Quiz-Admin
//pw: KxmFhZ4rIsVi5Wlo

//full driver code:

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Quiz-Admin:<password>@quiz-app-cluster.lxf6e.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
