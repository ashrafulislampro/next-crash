import React from "react";

export default async function Comments({ promise }) {
  const comments = await promise;
  return (
    <div>
      <h1 className="text-2xl my-5 font-bold">Comments</h1>
      <ul>
        {comments.map((item, index) => (
          <li className="mb-2" key={index}>
            {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
