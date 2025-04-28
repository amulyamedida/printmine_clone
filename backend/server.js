import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors()); 
app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
}));


app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const newProduct = new Product({ name, description, price });
    await newProduct.save();
    res.status(201).json(newProduct); 
  } catch (error) {
    res.status(400).json({ message: 'Error adding product', error: error.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
