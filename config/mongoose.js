const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://AjayMahato:Ajay123@cluster0.yfl1fhd.mongodb.net/getplaced?retryWrites=true&w=majority"
);

// connect mongodb database
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to DB");
});

module.exports = db;
