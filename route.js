import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Purchase from "@/models/Purchase";
import Cashback from "@/models/Cashback";

const CASHBACK_PERCENT = 10; 

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { userId, storeId, amount } = body;

    if (!userId || !storeId || !amount) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    
    const purchase = await Purchase.create({ userId, storeId, amount });

    
    const cashbackAmount = (amount * CASHBACK_PERCENT) / 100;

    
    const cashback = await Cashback.create({
      purchaseId: purchase._id,
      userId,
      cashbackAmount,
      status: "pending"
    });

    return NextResponse.json(
      {
        message: "Purchase created successfully",
        purchase,
        cashback
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}