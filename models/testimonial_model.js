const mongoose = require('mongoose')

const TestimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Testimonial', TestimonialSchema)