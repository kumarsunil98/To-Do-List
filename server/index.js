import express from "express";
import Connection from "./database/db.js";

const PORT = 8000;
const app = express();
Connection();
app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`);
});
