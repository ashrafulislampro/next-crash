import getAllPost from "@/lib/getAllPost";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Post Page",
  description: "This is all post page.",
};

export default async function Posts() {
  const posts = await getAllPost();

  return (
    <div>
      <h1 className="my-4 font-bold text-xl">All Post</h1>
      {posts.map((item, index) => (
        <li key={index}>
          <Link href={`/posts/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </div>
  );
}
