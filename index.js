const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Hardcoded products list
const products = [
  { id: 1, name: 'Eco-Friendly Toothbrush', price: 120 },
  { id: 2, name: 'Reusable Water Bottle', price: 350 },
  { id: 3, name: 'Bamboo Straw Set', price: 200 }
];

// GET /products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /cart
app.post('/cart', (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  if (!quantity || quantity < 1) {
    return res.status(400).json({ error: 'Invalid quantity' });
  }
  const totalPrice = product.price * quantity;
  res.json({ product: product.name, quantity, totalPrice });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
