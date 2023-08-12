import express from "express";

const PORT = 8000;
const app = express();
app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`);
});
