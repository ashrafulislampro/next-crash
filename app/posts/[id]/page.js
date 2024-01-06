import Comments from "@/app/components/comments";
import getAllPost from "@/lib/getAllPost";
import getPostById from "@/lib/getPostById";
import getPostComments from "@/lib/getPostComments";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPostById(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostDetails({ params }) {
  const { id } = params;
  const postPromise = getPostById(id);
  const commentsPromise = getPostComments(id);

  //   const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  const post = await postPromise;

  return (
    <div>
      <h1 className="font-bold text-2xl my-3">{post.title}</h1>
      <p className="text-sm">{post.body}</p>
      <hr />

      <Suspense fallback="Loading comments...">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPost();

  return posts.map((item) => ({
    id: item.id.toString(),
  }));
}
