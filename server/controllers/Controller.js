const getCustomers = require("../utils/getCustomers");
const saveCustomer = require("../utils/saveCustomer");

module.exports = {
  root: (req, res) => {
    res.send("This is a mock api for customer data.");
  },
  customers: (req, res) => {
    const customers = getCustomers();
    res.json(customers);
  },

  addCustomer: (req, res) => {
    const customers = getCustomers();
    const data = req.body;

    // check if user already exists
    const userExists = customers.some((customer) => {
      return customer.id === data.id;
    });

    if (userExists) {
      res.status(400).json({ success: false, msg: "Customer already exists" });
    }

    customers.push(data);
    saveCustomer(customers);
    res.send({ success: true, msg: "Customer added!" });
  },
};
