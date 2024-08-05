import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// 購入履歴の保存
export async function POST(request: Request, response: Response) {
  const { sessionId } = await request.json();

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // 既に同じ購入データがないか確認する
    const existingPurchase = await prisma.purchases.findFirst({
      where: {
        userId: session.client_reference_id!,
        itemId: session.metadata?.itemId!,
        createdAt: session.metadata?.createdAt,
      },
    });

    if (!existingPurchase) {
      const purchase = await prisma.purchases.create({
        data: {
          userId: session.client_reference_id!,
          itemId: session.metadata?.itemId!,
          createdAt: session.metadata?.createdAt,
        },
      });
      return NextResponse.json({ purchase });
    } else {
      return NextResponse.json({ message: "Already purchased" });
    }
  } catch (err) {
    return NextResponse.json(err);
  }
}
