"use client";
import Image from "next/image";
import { ProductType } from "../types/types";

type ProductProps = {
  product : ProductType;
};

const Product = ({product} : ProductProps) => {
  return (
    <>
      <div className="flex flex-col items-center m-4">
        <a className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none">
          <Image
            priority
            src={product.thumbnail.url}
            alt={product.title}
            width={450}
            height={350}
            className="rounded-t-md"
          />
          <div className="px-4 py-4 bg-slate-100 rounded-b-md">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="mt-2 text-lg text-slate-600">{product.description}</p>
            <p className="mt-2 text-md text-slate-700">¥{product.price}円</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Product;
