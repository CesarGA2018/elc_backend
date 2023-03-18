const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: false
    },
    real_weight: {
        type: Number,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    store: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model('Product', productSchema);