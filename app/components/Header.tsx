"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
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
          <Link
            href="/login"
            className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            ログイン
          </Link>
          <Link href="/profile" className="flex items-center">
            <Image
              width={40}
              height={40}
              alt="profile_icon"
              src="/default_icon.png"
              className="rounded-full"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
