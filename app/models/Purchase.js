import mongoose from "mongoose";

const PurchaseSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    storeId: { type: String, required: true },
    amount: { type: Number, required: true }
  },
  { timestamps: true }
);

export default mongoose.models.Purchase ||
  mongoose.model("Purchase", PurchaseSchema);