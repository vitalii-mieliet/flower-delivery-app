import { model, Schema } from 'mongoose';
import { PHONE_REGEX, EMAIL_REGEX } from '../../constants/index.js';

const orderSchema = new Schema(
  {
    userData: {
      name: {
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
        required: true,
        trim: true,
        lowercase: true,
      },
      address: {
        type: String,
        required: true,
        trim: true,
      },
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        name: {
          type: String,
          required: true,
          trim: true,
        },
        quantity: {
          type: Number,
          required: true,

          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
        rowTotal: { type: Number, required: true },
      },
    ],
    orderTotal: {
      type: Number,
      required: true,
      default: 0,
    },
    currency: {
      type: String,
      required: true,
      default: 'USD',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

orderSchema.pre('validate', function (next) {
  if (!this.items || !Array.isArray(this.items) || this.items.length === 0) {
    this.orderTotal = 0;
    return next();
  }

  this.items.forEach((item) => {
    const price =
      typeof item.price === 'number' ? item.price : Number(item.price) || 0;
    const quantity =
      typeof item.quantity === 'number'
        ? item.quantity
        : Number(item.quantity) || 0;
    item.rowTotal = price * quantity;
  });

  this.orderTotal = this.items.reduce(
    (acc, item) => acc + (item.rowTotal || 0),
    0,
  );

  next();
});

const Order = model('Order', orderSchema);
export default Order;
