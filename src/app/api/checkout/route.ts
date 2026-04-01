import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, sessionId } = body;

    const total = items.reduce(
      (sum: number, item: { price: number; quantity: number }) =>
        sum + item.price * item.quantity,
      0
    );

    const order = await prisma.order.create({
      data: {
        total,
        status: "pending",
        items: {
          create: items.map(
            (item: { id: string; quantity: number }) => ({
              quantity: item.quantity,
              sessionId,
              productId: item.id,
            })
          ),
        },
      },
      include: { items: true },
    });

    return NextResponse.json(order, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Checkout failed" },
      { status: 500 }
    );
  }
}
