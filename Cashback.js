import mongoose from "mongoose";

const CashbackSchema = new mongoose.Schema(
  {
    purchaseId: { type: mongoose.Schema.Types.ObjectId, ref: "Purchase" },
    userId: { type: String, required: true },
    cashbackAmount: { type: Number, required: true },
    status: { type: String, default: "pending" }
  },
  { timestamps: true }
);

export default mongoose.models.Cashback ||
  mongoose.model("Cashback", CashbackSchema);