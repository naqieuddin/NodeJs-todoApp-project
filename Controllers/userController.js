//declare path module
const path = require("path");

//create controller
function userController(req, res) {
  //join index.html file
  const htmlPath = path.join(__dirname, "../views/index.html");

  res.setHeader("Content-Type", "text/html");

  res.sendFile(htmlPath);
}

module.exports = userController;
