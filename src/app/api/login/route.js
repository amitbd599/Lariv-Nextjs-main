import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let prisma = new PrismaClient();
    let json = await req.json();
    let result = await prisma.user.create({
      data: json,
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}
export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();
    let result = await prisma.user.findMany();

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}
