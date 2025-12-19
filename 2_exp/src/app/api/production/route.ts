import Production from "@/src/app/models/Production";
import { NextResponse } from "next/server";
import { connectDB } from "@/src/lib/db";

export async function GET() {
  await connectDB();
  const data = await Production.find({});
  return NextResponse.json({ success: true, data });
}

export async function POST(request: Request) {
  await connectDB();
  const { production, target } = await request.json();

  if (typeof production !== "number" || typeof target !== "number") {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const newData = await Production.create({ production, target });
  return NextResponse.json({ success: true, data: newData });
}
