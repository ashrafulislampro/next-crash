import { notFound } from "next/navigation";
import React from "react";

export default function BlogDetails({ params }) {
  const { id } = params;
  if (id === "4") {
    notFound();
  }
  return (
    <main>
      <p>Blog Details is : {id}</p>
    </main>
  );
}
