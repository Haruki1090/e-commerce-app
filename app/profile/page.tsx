import { getServerSession } from "next-auth";
import Link from "next/link";
import { nextAuthOptions } from "../lib/next-auth/options";
import { User } from "@prisma/client";
import { ProductType } from "../types/types";
import { getProductById } from "../lib/microcms/client";
import PurchasedDatas from "../components/PurchasedDatas";

type PurchasedProductType = ProductType & { purchasedAt: string };

export default async function ProfilePage() {
  const session = await getServerSession(nextAuthOptions);
  const user = session?.user as User | undefined;

  let purchasedData = null;
  let purchasedDatas: PurchasedProductType[] = [];

  if (user) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/purchased/${user.id}`,
        { cache: "no-cache" }
      );
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      purchasedData = data.purchasedData;
      console.log('Purchased Data:', purchasedData);

      purchasedDatas = await Promise.all(
        purchasedData.map(async (purchase: { itemId: string; createdAt: string }) => {
          const product = await getProductById(purchase.itemId.toString());
          console.log('Product:', product);
          return { ...product, purchasedAt: purchase.createdAt }; // 購入日時を追加
        })
      );
    } catch (error) {
      console.error("Failed to fetch purchased data:", error);
    }
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">エラー</h1>
          <p>ユーザー情報を取得できませんでした。</p>
          <Link href="/" legacyBehavior>
            <a className="mt-4 text-blue-500 hover:underline">ホームに戻る</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">プロフィール</h1>
        <div className="mb-4">
          <img
            src={user.image || "/default_icon.png"}
            alt="profile_icon"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div className="mb-4">
          <h1 className="block text-gray-700">名前</h1>
          <h2>{user.name}</h2>
        </div>
        <div className="mb-4">
          <h1 className="block text-gray-700">メールアドレス</h1>
          <h2>{user.email}</h2>
        </div>
        {purchasedDatas.length > 0 ? (
          <div className="mb-4 w-full">
            <h1 className="block text-gray-700">購入履歴</h1>
            <div className="grid grid-cols-1 gap-4">
              {purchasedDatas.map((purchasedData) => (
                <PurchasedDatas key={purchasedData.id} purchasedDatas={purchasedData} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <h1 className="block text-gray-700">購入履歴</h1>
            <p className="text-slate-600">購入履歴がありません。</p>
          </div>
        )}
        <Link href="/" legacyBehavior>
          <a className="mt-4 text-blue-500 hover:underline">ホームに戻る</a>
        </Link>
      </div>
    </div>
  );
}
