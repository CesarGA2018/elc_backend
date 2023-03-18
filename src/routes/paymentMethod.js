const express = require("express");
const router = express.Router();
const paymentMethodSchema = require("../models/paymentMethod.js");

// create paymentmethod
router.post('/paymentmethod', (req, res) => {
    const paymentM = paymentMethodSchema(req.body);
    paymentM.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all paymentmethod
router.get('/paymentmethod', (req, res) => {
    paymentMethodSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get one paymentmethod
router.get('/paymentmethod/:id', (req, res) => {
    const { id } = req.params;
    paymentMethodSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update one paymentmethod
router.put('/paymentmethod/:id', (req, res) => {
    const { id } = req.params;
    paymentMethodSchema
    .updateOne({ _id: id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete one paymentmethod
router.delete('/paymentmethod/:id', (req, res) => {
    const { id } = req.params;
    paymentMethodSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;