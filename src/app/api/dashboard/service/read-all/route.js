import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();

    let result = await prisma.service.findMany({});

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}