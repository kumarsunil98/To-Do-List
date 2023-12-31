import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb+srv://${db_username}:${db_password}@netflix.6vcy7o0.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully.");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected.");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Error while connecting with the database.", error.message);
  });
};
export default Connection;
