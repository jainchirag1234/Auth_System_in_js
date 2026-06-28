import express from "express";

const app = express();
dbConnection();
app.listen(8081, () => {
  console.log("Server is running at port 8081");
});
