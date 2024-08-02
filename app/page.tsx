"use client";

import Book from "./components/Book";

// 疑似データ
const books = [
  {
    id: 1,
    title: "Book 1",
    thumbnail: "/thumbnails/claudio-schwarz-3cWxxW2ggKE-unsplash.jpg",
    description:"Book 1です。こんにちは!",
    price: 2980,
    author: {
      id: 1,
      name: "Author 1",
      description: "Author 1 description",
      profile_icon: "https://source.unsplash.com/random/2",
    },
    content: "Content 1",
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
  },
  {
    id: 2,
    title: "Book 2",
    thumbnail: "/thumbnails/clay-banks-vEn9-Er8td4-unsplash.jpg",
    description:"Book 2だよ! こんばんは!",
    price: 1980,
    author: {
      id: 2,
      name: "Author 2",
      description: "Author 2 description",
      profile_icon: "https://source.unsplash.com/random/3",
    },
    content: "Content 2",
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
  },
  {
    id: 3,
    title: "Book 3",
    thumbnail: "/thumbnails/jairo-gonzalez-WU1gzf_08UU-unsplash.jpg",
    description:"Book 3だよ! Hello!",
    price: 4980,
    author: {
      id: 3,
      name: "Author 3",
      description: "Author 3 description",
      profile_icon: "https://source.unsplash.com/random/4",
    },
    content: "Content 3",
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
  },
];

export default function Home() {
  return (
    <>
      <main className="flex flex-wrap justify-center items-center md:mt-32 mt-20">
        <h2 className="text-center w-full font-bold text-3xl mb-2">
          Book Commerce
        </h2>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </main>
    </>
  );
}