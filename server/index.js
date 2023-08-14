import express, { urlencoded } from "express";
import Connection from "./database/db.js";
import cors from "cors";
import Routes from "./routes/route.js";

const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use("/", Routes);
Connection();
app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`);
});
