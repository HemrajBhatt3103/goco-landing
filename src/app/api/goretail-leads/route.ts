import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  businessName: string;
  businessType: string;
  businessLocation: string;
}

function validate(data: Record<string, unknown>): string | null {
  const required: (keyof LeadData)[] = [
    "ownerName",
    "ownerPhone",
    "ownerEmail",
    "businessName",
    "businessType",
    "businessLocation",
  ];

  for (const field of required) {
    if (!data[field] || typeof data[field] !== "string" || !(data[field] as string).trim()) {
      return `${field} is required`;
    }
  }

  const email = data.ownerEmail as string;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid email address";
  }

  const phone = data.ownerPhone as string;
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
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    const lead: LeadData = {
      ownerName: body.ownerName.trim(),
      ownerPhone: body.ownerPhone.trim(),
      ownerEmail: body.ownerEmail.trim().toLowerCase(),
      businessName: body.businessName.trim(),
      businessType: body.businessType,
      businessLocation: body.businessLocation.trim(),
    };

    console.log("[GoRetail Lead]", JSON.stringify(lead, null, 2));

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
