/* eslint-disable jsx-a11y/anchor-is-valid */
import parser from "html-react-parser";
import DOMPurify from "dompurify";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function PostItem({ post }) {
  return (
    <div className='my-5 h-auto w-full rounded-md bg-[#E6E5F3] py-3 px-3 shadow-md'>
      <div className='flex h-16 w-full items-center justify-between '>
        <div className='flex'>
          <LazyLoadImage
            className=' mr-3 h-10 w-10 rounded-full'
            src='/assets/image/profildefault.png'
            alt=''
          />
          <div>
            <h3 className='text-md font-semibold '>Anonymous</h3>
          </div>
        </div>
        <p className='text-xs text-gray-500'>
          {new Date(post.attributes.createdAt)
            .toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })
            .replace(/(\w+), (\d+)\/(\d+)\/(\d+)/, "$1, $3/$2/$4")}
        </p>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.attributes.description_post),
        }}
      />
      <div className='my-3 mt-8 flex w-full px-5 '>
        <a className='flex w-full flex-row items-center justify-center space-x-3 '>
          <AiOutlineLike
            className='h-7 w-7 cursor-pointer hover:scale-150 hover:text-blue-600'
            aria-placeholder='likes'
          />
        </a>
        <a className='flex w-full flex-row items-center justify-center space-x-3'>
          <Link to={`/posts/${post.id}`}>
            <BiCommentDetail
              className='h-7 w-7 cursor-pointer hover:scale-150 hover:text-yellow-600'
              aria-placeholder='comments'
            />
          </Link>
        </a>
      </div>
    </div>
  );
}
export default PostItem;
