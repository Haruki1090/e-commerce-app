"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className="bg-white text-black shadow-sm">
      <nav className="flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-black">
          E-Commerce App
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            ホーム
          </Link>
          {user ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              ログアウト
            </button>
          ) : (
            <Link
              href="/login"
              className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              ログイン
            </Link>
          )}
          <Link href={user ? "/profile" : "/login"} className="flex items-center">
            <Image
              width={40}
              height={40}
              alt="profile_icon"
              src={user?.image || "/default_icon.png"}
              className="rounded-full"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
