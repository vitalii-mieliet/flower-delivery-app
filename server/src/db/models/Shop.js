import { Schema, model } from 'mongoose';
import { PHONE_REGEX, EMAIL_REGEX } from '../../constants/index.js';

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      match: PHONE_REGEX,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      match: EMAIL_REGEX,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      trim: true,
    },
    logoUrl: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Shop = model('Shop', shopSchema);

export default Shop;
