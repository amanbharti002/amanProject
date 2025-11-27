import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/cashbackSystem";




2


  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("Mongo Error:", err.message);
  }
};
