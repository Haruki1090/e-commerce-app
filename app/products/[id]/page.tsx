import { getProductById } from "@/app/lib/microcms/client";
import ProductDetailClient from "./ProductDetailClient";

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);
  return <ProductDetailClient product={product} />;
};

export default ProductDetail;
