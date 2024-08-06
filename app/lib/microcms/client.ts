import { ProductType } from '@/app/types/types';
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
});

export const getAllProducts = async () => {
    const allProducts = await client.getList<ProductType>({
        endpoint: "set-product",
    });
    return allProducts;
};

export const getProductById = async (id: string) => {
    const product = await client.getList<ProductType>({
      endpoint: "set-product",
      queries: { filters: `id[equals]${id}` },
    });
  
    if (product.contents.length === 0) {
      throw new Error('Product not found');
    }
  
    // console.log('Fetched Product:', product.contents[0]);
    return product.contents[0];
  };