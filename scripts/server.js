const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let orders = [];

// Endpoint to receive order details
app.post('/api/orders', (req, res) => {
  const order = req.body;
  orders.push(order);
  fs.writeFileSync(path.join(__dirname, 'orders.json'), JSON.stringify(orders, null, 2));
  res.status(200).json({ message: 'Order received' });
});

// Endpoint to get order details
app.get('/api/orders', (req, res) => {
  res.status(200).json(orders);
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});