const express = require('express')
const testimonialController = require('../controllers/Testimonial')
const {testimonialLimiter} = require('../middlewares/rateLimiter')

const testiRoute = express.Router()

testiRoute.get('/testimoni', testimonialController.getTestimonial)
testiRoute.post('/testimoni', testimonialLimiter ,testimonialController.createTestimonial)
testiRoute.put('/testimoni/:id', testimonialController.updateTestimonial)
testiRoute.delete('/testimoni/:id', testimonialController.deleteTestimonial)

module.exports = testiRoute 