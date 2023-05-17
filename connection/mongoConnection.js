const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.magenta);
  } catch (error) {
    console.log(`MongoDB Not connected ${error}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;