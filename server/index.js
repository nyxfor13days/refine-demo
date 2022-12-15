const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

const controller = require("./controllers/controller");

app.get("/", controller.root);
app.get("/customers", controller.customers);
app.get("/customers/:id", controller.showCustomer);
// app.post("/customers/add", controller.addCustomer);

app.options("*", cors());
app.use((req, res, next) => {
  cors();
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-  With, Content-Type, Accept"
  );
  next();
  bodyParser.urlencoded({ extended: false });
});

app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`
  );
});
