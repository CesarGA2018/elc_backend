const mongoose = require("mongoose");

const paymentMethodSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    tax: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('PaymentMethod', paymentMethodSchema);