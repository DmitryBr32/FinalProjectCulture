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

router.get('/products/:id', async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found', data: null });
  }

  res.json({ data: product });
});

module.exports = router;