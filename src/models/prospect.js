
const mongoose = require("mongoose");


const pricesSchema = mongoose.Schema({
    usd:{
        type: Number,
        required: true
    },
    cop: {
        type: Number,
        required: false
    },
    minMeli: {
        type: Number,
        required: false
    },
    minMeliEmployee: {
        type: Number,
        required: false
    },
    percent: {
        type: Number,
        required: false
    },
    comitionMeli: {
        type: Number,
        required: false
    },
    comitionMeliEmployee: {
        type: Number,
        required: false
    },
    totalMeli: {
        type: Number,
        required: false
    },
    totalMeliEmployee: {
        type: Number,
        required: false
    },
    revenueMeli: {
        type: Number,
        required: false
    },
    revenueMeliEmployee: {
        type: Number,
        required: false
    }
});


const shippingSchema = mongoose.Schema({
    company:{
        type: String,
        required: true
    },
    shippingCostCalculate: {
        type: Number,
        required: false
    },
    shippingCostReal: {
        type: Number,
        required: false
    }
});  

const salesSchema = mongoose.Schema({
    value:{
        type: Number,
        required: true
    },
    taxes: {
        type: Number,
        required: false
    },
    realvalue:{
        type: Number,
        required: true
    },
    realRevenue:{
        type: Number,
        required: true
    },
    flexValue: {
        type: Number,
        required: false
    },
    shippingCost: {
        type: Number,
        required: false
    }
});  

const prospectSchema = mongoose.Schema({
    productId:{
        type: String,
        required: true
    },
    prices: {
        type: pricesSchema,
        required: true
    },
    freeShipping: {
        type: Boolean,
        required: false
    },
    dateProspect: {
        type: Date,
        default: Date.now()
    }, 
    quantity:{
        type: Number,
        required: false
    },
    quantityPerPackage:{
        type: Number,
        required: false
    },
    dateArring: {
        type: Date
    }, 
    costInTC:{
        type: Number,
        required: false
    },
    status:{
        type: String,
        required: false
    },
    shipping: {
        type: shippingSchema,
        required: false
    },
    sales: {
        type: [salesSchema],
        required: false
    },
    novelty:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Prospect', prospectSchema);