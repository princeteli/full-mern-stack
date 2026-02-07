import { NextRequest, NextResponse } from "next/server";
interface ParamsType {
  params: {
    id: number
  }
}
export async function GET(request: NextRequest, { params }: ParamsType) {
  let { id } =await params
  return NextResponse.json({ id });
}