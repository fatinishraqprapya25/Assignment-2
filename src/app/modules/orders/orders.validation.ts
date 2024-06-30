import Joi from 'joi';

const orderValidationSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required',
        'string.email': 'Email must be a valid email address'
    }),
    productId: Joi.string().required().messages({
        'string.empty': 'Product ID is required'
    }),
    price: Joi.number().positive().required().messages({
        'number.base': 'Price must be a number',
        'number.positive': 'Price must be a positive number',
        'any.required': 'Price is required'
    }),
    quantity: Joi.number().integer().positive().required().messages({
        'number.base': 'Quantity must be a number',
        'number.integer': 'Quantity must be an integer',
        'number.positive': 'Quantity must be a positive number',
        'any.required': 'Quantity is required'
    })
});

export default orderValidationSchema;