const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send('Hello from Node API server Updated')
});

const dbURI = process.env.DB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
      console.log('Connected!');
      app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000')
    });
  })
  .catch(err => console.log(err));
