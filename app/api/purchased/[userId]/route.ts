import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";


// 購入履歴の取得
export async function GET(
    request: Request,
    {params}: {params: {userId: string}}
){
    const {userId} = params;
    try {
        const purchasedData = await prisma.purchases.findMany({
            where: {
                userId: userId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json({purchasedData});
    } catch (err: any) {
        return NextResponse.json(err.message);
    }
}