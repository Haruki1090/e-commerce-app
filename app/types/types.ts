type ThumbnailType = {
  url: string;
  height: number;
  width: number;
};

type ProductType = {
  id: string;
  title: string;
  description: string;
  thumbnail: ThumbnailType[];
  price: number;
  createdAt: string;
  updatedAt: string;
};

type ProductDetailProps = {
  params: {
    id: string;
  };
};

type ProductProps = {
  product: ProductType;
};

export type { ProductType, ProductDetailProps, ProductProps };
