import Joi from 'joi';
import { EMAIL_REGEX, PHONE_REGEX } from '../constants/index.js';

export const createOrderSchema = Joi.object({
  userData: Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
      'string.base': 'Username should be a string',
      'string.min': 'Username should have at least {#limit} characters',
      'string.max': 'Username should have at most {#limit} characters',
      'any.required': 'Username is required',
    }),

    phone: Joi.string().pattern(PHONE_REGEX).required().messages({
      'any.required': 'Phone number is required',
    }),

    email: Joi.string().pattern(EMAIL_REGEX).required().messages({
      'string.pattern.base': 'Invalid email format',
      'any.required': 'Email is required',
    }),

    address: Joi.string().min(5).max(100).required().messages({
      'any.required': 'Address is required',
      'string.min': 'Address should have at least {#limit} characters',
      'string.max': 'Address should have at most {#limit} characters',
    }),
  }),

  items: Joi.array()
    .items(
      Joi.object({
        productId: Joi.string().required().messages({
          'any.required': 'Product ID is required',
        }),
        name: Joi.string().required().messages({
          'any.required': 'Product name is required',
        }),
        quantity: Joi.number().integer().min(1).required().messages({
          'number.base': 'Quantity should be a number',
          'number.min': 'Quantity should be at least {#limit}',
          'any.required': 'Quantity is required',
        }),
        price: Joi.number().min(0).required().messages({
          'number.base': 'Price should be a number',
          'any.required': 'Price is required',
        }),
      }),
    )
    .min(1)
    .required()
    .messages({
      'array.base': 'Items must be an array',
      'array.min': 'At least one product is required',
      'any.required': 'Items are required',
    }),
});
