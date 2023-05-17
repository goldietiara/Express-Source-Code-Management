const fs = require("fs");

module.exports = {
  getProducts: (req, res) => {
    let products = fs.readFileSync("./data/products.json");
    res.status(200).send(JSON.parse(products));
  },

  addData: (req, res) => {
    let products = JSON.parse(fs.readFileSync("./data/products.json"));
    products.push(req.body);

    fs.writeFileSync("./data/products.json", JSON.stringify(products));
    res.status(200).send(JSON.parse(fs.readFileSync("./data/products.json")));
  },
};
