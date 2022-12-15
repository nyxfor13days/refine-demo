const fs = require("fs");

const getCustomers = () => {
  const jsonData = fs.readFileSync("../data/customers.json", "utf8");
  const customers = JSON.parse(jsonData);
  return customers;
};

module.exports = getCustomers;
