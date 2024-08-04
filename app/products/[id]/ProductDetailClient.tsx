"use client";

import { useState } from "react";
import { ProductType } from "@/app/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ProductDetailClientProps = {
  product: ProductType;
};

const ProductDetailClient = ({ product }: ProductDetailClientProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const startCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: product.title,
            price: product.price,
            id: product.id,
          }),
        }
      );

      const responseData = await response.json();

      if (responseData) {
        router.push(responseData.checkout_url);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const thumbnail = product.thumbnail[0];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <Image
          priority
          src={thumbnail.url}
          alt={product.title}
          width={thumbnail.width}
          height={thumbnail.height}
          className="rounded-md"
        />
        <div className="px-4 py-4 bg-slate-100 rounded-md mt-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="mt-2 text-lg text-slate-600">{product.description}</p>
          <p className="mt-2 text-md text-slate-700">¥{product.price}円</p>
          <button
            onClick={startCheckout}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            disabled={loading}
          >
            {loading ? "処理中..." : "購入する"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailClient;
