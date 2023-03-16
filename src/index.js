const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.js')
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

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