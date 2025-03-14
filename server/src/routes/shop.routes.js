const router = require("express").Router();
const { Product } = require('../db/models'); 
const formatResponse = require("../utils/formatResponse");

router.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(formatResponse(200, "Products retrieved successfully", products));
  } catch (error) {
    res.status(500).json(formatResponse(500, "Error retrieving products", error.message));
  }
});

module.exports = router;