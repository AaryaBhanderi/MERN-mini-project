const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://admin:admin@miniproject.passhhv.mongodb.net/?retryWrites=true&w=majority&appName=MiniProject";
// Connect to MongoDB
const dbConnect = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};

module.exports = dbConnect;
