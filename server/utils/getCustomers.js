const fs = require("fs");
const jsonData = require("../data/customers.json");

const getCustomers = () => {
  const customers = jsonData;
  return customers;
};

module.exports = getCustomers;
