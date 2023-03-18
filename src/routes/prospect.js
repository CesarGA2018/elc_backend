const express = require("express");
const router = express.Router();
const prospectSchema = require("../models/prospect.js");

// create prospect
router.post('/prospect', (req, res) => {
    const paymentM = prospectSchema(req.body);
    paymentM.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all prospect
router.get('/prospect', (req, res) => {
    prospectSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get one prospect
router.get('/prospect/:id', (req, res) => {
    const { id } = req.params;
    prospectSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update one prospect
router.put('/prospect/:id', (req, res) => {
    const { id } = req.params;
    prospectSchema
    .updateOne({ _id: id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete one prospect
router.delete('/prospect/:id', (req, res) => {
    const { id } = req.params;
    prospectSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;