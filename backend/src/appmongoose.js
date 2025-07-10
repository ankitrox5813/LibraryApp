require('dotenv').config();
const { connect } = require("mongoose");

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const DB_NAME = "your_db_name"; // Use your actual DB name

const connectDB = async () => {
  await connect(`${MONGO_DB_URL}/${DB_NAME}`);
  console.log(`Mongo Connection Successful...`);
};

module.exports = connectDB;