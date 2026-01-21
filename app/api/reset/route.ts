import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST() {
  await query("DELETE FROM users WHERE email != 'admin@coffeeshop.com'");
  return NextResponse.json({ success: true });
}
