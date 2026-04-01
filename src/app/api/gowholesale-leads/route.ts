import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface LeadData {
  ownerName: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  city: string;
}

function validate(data: Record<string, unknown>): string | null {
  const required: (keyof LeadData)[] = [
    "ownerName",
    "businessName",
    "phone",
    "email",
    "businessType",
    "city",
  ];

  for (const field of required) {
    if (!data[field] || typeof data[field] !== "string" || !(data[field] as string).trim()) {
      return `${field} is required`;
    }
  }

  const email = data.email as string;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid email address";
  }

  const phone = data.phone as string;
  if (!/^[\+]?[\d\s\-\(\)]{7,}$/.test(phone)) {
    return "Invalid phone number";
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationError = validate(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const lead: LeadData = {
      ownerName: body.ownerName.trim(),
      businessName: body.businessName.trim(),
      phone: body.phone.trim(),
      email: body.email.trim().toLowerCase(),
      businessType: body.businessType,
      city: body.city.trim(),
    };

    console.log("[GoWholesale Lead]", JSON.stringify(lead, null, 2));

    return NextResponse.json(
      { message: "Lead submitted successfully", data: lead },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
