const express = require("express");
const { products_controller } = require("../controller");
const router = express.Router();

router.get("/products", products_controller.getProducts);
router.post("/products", products_controller.addData);

module.exports = router;

// const fs = require("fs");

// module.exports = {
//   getProducts: (req, res) => {
//     let products = fs.readFileSync("./data/products.json");
//     res.status(200).send(JSON.parse(products));
//   },
// };
