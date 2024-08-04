"use client";

import Product from "./components/Product";
import { getAllProducts } from "./lib/microcms/client";
import { ProductType } from "./types/types";


// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const { contents } = await getAllProducts();

  return (
    <>
      <main className="flex flex-wrap justify-center items-center md:mt-32 mt-20">
        <h2 className="text-center w-full font-bold text-3xl mb-2">
          E-Commerce App
        </h2>
        {contents.map((product: ProductType) => (
          <Product key={product.id} product={product} />
        ))}
      </main>
    </>
  );
}
