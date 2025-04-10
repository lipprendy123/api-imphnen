const express = require('express')
const Testimonial = require('../models/testimonial_model')

const testimonialController = {
    async getTestimonial(req, res) {
        try {
            const data = await Testimonial.find().select("name message")

            return res.status(200).json({
                success: true,
                message: "Get data success",
                total: data.length,
                data: data
            })
        } catch (error) {
            console.error('Error get testimonial:', error.message);
            return res.status(500).json({
                success: false,
                message: 'Failed to get data',
                data: null
            })
        }
    },

    async createTestimonial(req, res) {
        try {
            const {name, message} = req.body; 

            const testimonial = await Testimonial.create({name, message})

            if (!name || !message) {
                return res.status(400).json({
                    success: false,
                    message: 'Name and message are required',
                    data: null
                });
            }            

            return res.status(201).json({
                success: true,
                message: 'Create testimonial success',
                data: testimonial
            })
        } catch (error) {
            console.error('Error creating testimonial:', error.message);
            return res.status(500).json({
                success: false,
                message: 'Failed to create data',
                data: null
            })
        }
    },

    async updateTestimonial(req, res) {
        try {
            const {id} = req.params

            const {name, message} = req.body

            if (!name || !message) {
                return res.status(400).json({
                    success: false,
                    message: 'Name and message are required',
                    data: null
                });
            }            

            const testimonial = await Testimonial.findOneAndUpdate(
                {_id: id},
                {name, message},
                {new: true}
            )

            if (!testimonial) {
                return res.status(404).json({
                    success: false,
                    message: 'Data not found',
                    data: null
                })
            }

            return res.status(200).json({
                success: true,
                message: 'Testimonial updated successfully',
                data: testimonial
            })
        } catch (error) {
            console.error('Error updating testimonial:', error.message);
            return res.status(500).json({
                success: false,
                message: 'Failed to update data',
                data: null
            })
        }
    },

    async deleteTestimonial(req, res) {
        try {
            const {id} = req.params;

            const testimonial = await Testimonial.findByIdAndDelete({_id: id});

            if (!testimonial) {
                return res.status(404).json({
                    success: false,
                    message: 'Data not found',
                    data: null
                })
            }

            return res.status(200).json({
                success: true,
                message: 'Delete data success',
                data: testimonial
            })
        } catch (error) {
            console.error('Error delete testimonial:', error.message);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
                data: null
            })
        }
    }
}

module.exports = testimonialController