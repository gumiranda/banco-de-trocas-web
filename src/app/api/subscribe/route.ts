import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Here, you would save the email to your database or an email list service
  // For example, using a service like Mailchimp, SendGrid, or a database

  // Simulating a successful save operation
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/emailSubscribe/add`, {
    method: "POST",
    headers: request?.headers,
    body: JSON.stringify(await request.json()),
  });
  return NextResponse.json(await response.json());
}
