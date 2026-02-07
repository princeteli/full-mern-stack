import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
  let query= await request.nextUrl.searchParams.get('q')
  return NextResponse.json({ query });
}