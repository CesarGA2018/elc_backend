const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.js');
const paymentMethodsRoutes = require('./routes/paymentMethod.js');
const productRoutes = require('./routes/product.js');
const prospectRoutes = require('./routes/prospect.js')
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', paymentMethodsRoutes);
app.use('/api', productRoutes);
app.use('/api', prospectRoutes);


//routes
app.get('/', (req, res)=> {
    res.send("Welcome to my api");
});

//mongodb coneection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to atlas'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('Server listeening on port', port));