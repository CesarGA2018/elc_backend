const mongoose = require("mongoose");


const shippingMethodSchema = mongoose.Schema({
    company:{
        type: String,
        required: true
    },
    shippingCostCalculate: {
        type: Number,
        required: false
    },
    shippingRealCost: {
        type: Number,
        required: false
    },
    valueDeclarated: {
        type: Number,
        required: false
    },
    valueDeclarated: {
        type: Number,
        required: false
    },
    dateArrivingEU: {
        type: Date,
        default: Date.now()
    }, 
    dateArrivingCO: {
        type: Date,
        default: Date.now()
    }, 
});

module.exports = mongoose.model('ShippingMethod', shippingMethodSchema);