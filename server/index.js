const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;

const controller = require("./controllers/controller");

app.get("/", controller.root);
app.get("/customers", controller.customers);
app.post("/customers/add", controller.addCustomer);

app.use((req, res) => {
  bodyParser.urlencoded({ extended: false });
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`
  );
});
