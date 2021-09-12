import {
  ThumbUpIcon,
  AnnotationIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import Comment from "./Comment";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Posts({ post, cont }) {
  const [showComment, setShowComment] = useState(false);

  const showCommentHandler = () => {
    setShowComment(!showComment);
  };

  console.log(cont);

  return (
    <>
      <div className="mt-3 rounded-lg bg-white w-full py-3 shadow-sm border border-gray-300">
        <div className="flex px-4">
          <div className="w-10 h-10 rounded-full relative cursor-pointer">
            <Link href={`/profile/${post.name}`}>
              <Image
                src={post.profilePicture}
                alt="profile Photo"
                layout="fill"
                className="rounded-full"
              />
            </Link>
          </div>
          <div className="ml-2">
            <Link href={`/profile/${post.name}`}>
              <p className="text-sm font-medium cursor-pointer">{post.name}</p>
            </Link>
            <p className="text-xs text-gray-500">6hr ago</p>
          </div>
        </div>

        <p className="px-4 text-sm mt-2">{post.des}</p>
        {/* Post Image */}
        <div className="w-full h-96 relative mt-3 border-b-2">
          <Image src={post.img} alt="post image" layout="fill" />
        </div>
        {/* Likes and comment div */}
        <div className="flex justify-between items-center px-3 py-2">
          <div className="flex items-center">
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
              alt=""
              className="w-5 h-5"
            />
            <p className="ml-2 text-gray-500">5 likes</p>
          </div>
          <p className="text-gray-500">50 comments</p>
        </div>
        <div className="px-3 py-2 -mt-1">
          <hr />
        </div>
        <div className="flex px-3 -mt-1">
          <div className="flex items-center cursor-pointer justify-center flex-1 hover:bg-gray-100 py-2.5">
            <ThumbUpIcon className="h-5 text-gray-700" />
            <p className="ml-2 text-sm font-medium text-gray-700">Like</p>
          </div>
          <div
            className="flex items-center cursor-pointer justify-center flex-1 hover:bg-gray-100 ml-1"
            onClick={showCommentHandler}
          >
            <AnnotationIcon className="h-5 text-gray-700 mt-1" />
            <p className="ml-2 text-sm font-medium text-gray-700">Comment</p>
          </div>
          <div className="flex items-center cursor-pointer justify-center flex-1 hover:bg-gray-100 ml-1">
            <ShareIcon className="h-5 text-gray-700" />
            <p className="ml-2 text-sm font-medium text-gray-700">Like</p>
          </div>
        </div>
        <div className="px-3 py-2 -mt-1">
          <hr />
        </div>
        {showComment ? <Comment /> : ""}
      </div>
    </>
  );
}

export default Posts;

export const getServerSideProps = (ctx) => {
  const cont = ctx.post;
  return {
    props: {
      cont,
    },
  };
};
