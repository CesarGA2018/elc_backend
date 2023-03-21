const express = require("express");
const router = express.Router();
const shippingMethodSchema = require("../models/shippingMethod.js");

// create shippingMethod
router.post('/shippingMethod', (req, res) => {
    const paymentM = shippingMethodSchema(req.body);
    paymentM.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all shippingMethod
router.get('/shippingMethod', (req, res) => {
    shippingMethodSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get one shippingMethod
router.get('/shippingMethod/:id', (req, res) => {
    const { id } = req.params;
    shippingMethodSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update one shippingMethod
router.put('/shippingMethod/:id', (req, res) => {
    const { id } = req.params;
    shippingMethodSchema
    .updateOne({ _id: id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete one shippingMethod
router.delete('/shippingMethod/:id', (req, res) => {
    const { id } = req.params;
    shippingMethodSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;