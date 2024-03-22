import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    total_amount: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Payment Done",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: {
      type: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food",
            required: true,
          },
          quantity: { type: Number, default: 1 },
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Orders", OrderSchema);
