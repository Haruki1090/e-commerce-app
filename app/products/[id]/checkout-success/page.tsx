"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


const PurchaseSuccessPage = () => {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");

    useEffect(()=>{
        const fetchData = async () => {
            if (sessionId) {
                try {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_API_URL}/checkout/success`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ sessionId }),
                        }
                    );
                } catch (error) {
                    console.error(error);
                }
            }
        };

        fetchData();
    }, [sessionId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          ご購入ありがとうございます！
        </h1>
        <p className="text-gray-700 mb-6">ご注文が正常に処理されました。</p>
        <Link href="/" >
          <p className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            ホームに戻る
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PurchaseSuccessPage;
