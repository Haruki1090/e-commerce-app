"use client";
import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "../types/types";


const Product = ({ product }: ProductProps) => {
  const thumbnail = product.thumbnail[0];

  return (
    <div className="flex flex-col items-center m-4">
      <Link href={`/products/${product.id}`} className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none">
        <Image
          priority
          src={thumbnail.url}
          alt={product.title}
          width={thumbnail.width}
          height={thumbnail.height}
          className="rounded-t-md"
        />
        <div className="px-4 py-4 bg-slate-100 rounded-b-md">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="mt-2 text-lg text-slate-600">{product.description}</p>
          <p className="mt-2 text-md text-slate-700">¥{product.price}円</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
