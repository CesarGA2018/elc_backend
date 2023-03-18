const express = require("express");
const router = express.Router();
const productSchema = require("../models/product.js");

// create product
router.post('/product', (req, res) => {
    const paymentM = productSchema(req.body);
    paymentM.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all product
router.get('/product', (req, res) => {
    productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get one product
router.get('/product/:id', (req, res) => {
    const { id } = req.params;
    productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update one product
router.put('/product/:id', (req, res) => {
    const { id } = req.params;
    const { name, weight, real_weight, url } = req.body;
    productSchema
    .updateOne({ _id: id }, { $set: { name, weight, real_weight, url }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete one product
router.delete('/product/:id', (req, res) => {
    const { id } = req.params;
    productSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;