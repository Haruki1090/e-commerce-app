// プロフィールページ
import { getServerSession } from "next-auth";
import Link from "next/link";
import { nextAuthOptions } from "../lib/next-auth/options";
import { User } from "@prisma/client";

export default async function ProfilePage() {
  // ユーザー情報を取得
  const session = await getServerSession(nextAuthOptions);
  const user = session?.user as User;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">プロフィール</h1>
        <div className="mb-4">
          <img
            src={user.image || "/public/default_icon.png"}
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
        <Link href="/" legacyBehavior>
          <a className="mt-4 text-blue-500 hover:underline">ホームに戻る</a>
        </Link>
      </div>
    </div>
  );
}
