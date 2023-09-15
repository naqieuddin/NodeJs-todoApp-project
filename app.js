const express = require("express");
const app = express();
const userController = require("./Controllers/userController");

//setup view engine and static files
app.use(express.static("public"));

app.get("/", userController);

//setup port
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
