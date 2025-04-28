import express from 'express';

const Product = require('../models/Product');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});


router.post('/', async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;
    const newProduct = new Product({ name, price, description, image, category });
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error adding product' });
  }
});

module.exports = router;
