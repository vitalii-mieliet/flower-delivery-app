import { Schema, model, Types } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      amount: { type: Number, required: true, min: 0 },
      currency: { type: String, default: 'USD' },
    },
    imageUrl: { type: String },

    shopId: { type: Types.ObjectId, ref: 'Shop', required: true }, // связь с магазином
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Product = model('Product', productSchema);
export default Product;
