const express = require('express')
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


mongoose.connect("mongodb+srv://CRUD_API:QMyv4Qq2RZBiMl92@backenddb.nwtt6.mongodb.net/CRUD_API?retryWrites=true&w=majority&appName=BackendDb")
  .then(() => {
      console.log('Connected!');
      app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000')
    });
  })
  .catch(err => console.log(err));
