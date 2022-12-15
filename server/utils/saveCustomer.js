const fs = require("fs");

const saveCustomer = (data) => {
  const customers = getCustomers();
  customers.push(data);
  const jsonData = JSON.stringify(customers);
  fs.writeFileSync("../data/customers.json", jsonData, "utf8");
};

module.exports = saveCustomer;
