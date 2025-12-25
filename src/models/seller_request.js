import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    shop_name: {
      type: String,
      required: true,
    },
    shop_category: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approaved", "rejected"],
      default: "pending",
    },

    created_at: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

export const seller_request = mongoose.model("seller_request", sellerSchema);
