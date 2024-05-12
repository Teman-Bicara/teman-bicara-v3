import React from "react";
import parser from "html-react-parser";
import DOMPurify from "dompurify";

function DetailPageComment({ comment }) {
  return (
    <>
      <div className='my-4 ml-8'>
        <h3 className='font-semibold'>{comment.attributes.commenter}</h3>
        <p
          className='text-slate-600'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(comment.attributes.description_comment),
          }}
        />
      </div>
      <hr className='ml-8 h-[2px] rounded-full bg-slate-400' />
    </>
  );
}

export default DetailPageComment;
