import React from 'react';
import { ProductType } from '../types/types';

type PurchasedProductType = ProductType & { purchasedAt: string };

type PurchasedDatasProps = {
  purchasedDatas: PurchasedProductType;
  className?: string;
};

const PurchasedDatas: React.FC<PurchasedDatasProps> = ({ purchasedDatas, className }) => {
  return (
    <div className={`p-4 bg-white rounded-lg shadow-md ${className}`}>
      <img
        src={purchasedDatas.thumbnail[0].url}
        alt={purchasedDatas.title}
        width={80}
        height={80}
        className="rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">
          {purchasedDatas.title}
        </h2>
        <p className="mt-2 text-md text-slate-700">
          ¥{purchasedDatas.price}円
        </p>
        <p className="mt-2 text-sm text-gray-500">
          購入日: {new Date(purchasedDatas.purchasedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PurchasedDatas;
