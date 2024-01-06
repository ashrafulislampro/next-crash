import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogsArr = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 details.",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 details.",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "Blog 3 details.",
    },
  ];

  return (
    <main>
      <h1 className="mb-2 border-b w-20 mt-10">Blogs</h1>
      {blogsArr.map((item, index) => (
        <li key={index}>
          <Link href={`/blogs/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </main>
  );
}
