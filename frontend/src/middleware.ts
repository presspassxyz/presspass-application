import { NextRequest, NextResponse } from "next/server";
export default function middleware(req: NextRequest) {
  let verify = req.cookies.get("privy-token");
  let url = req.url;

  console.log(verify, 'verified cookie token')
  console.log(url, 'wats url exact?')
  if (verify && url === 'http://localhost:3000/') { // Check if the user is on the homepage
    return NextResponse.redirect("http://localhost:3000/dashboard");

  }

  return null;
}