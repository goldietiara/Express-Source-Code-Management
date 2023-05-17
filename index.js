const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const PORT = 2602;
const app = express();

app.use(cors());
app.use(bodyParser());

const { products_router } = require("./router");

app.use("/data", products_router);

app.listen(PORT, () => {
  console.log(`Server Running ${PORT} YEAYY!!!!`);
});
