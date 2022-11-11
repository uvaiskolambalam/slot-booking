const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("mongo db cnnected ");
});
connection.on("error", (error) => {
  console.log("error in mongoDB connection", error);
});

module.exports - mongoose;
