import mongoose from "mongoose";

const productItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    oredrPrice: {
      type: Number,
      required: true,
    },
    costomer: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [productItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELEVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
