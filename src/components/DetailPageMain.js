import axios from "axios";
// import parser from "html-react-parser";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CONFIG from "../global/config";
import DetailPageComment from "./DetailPageComment";

function DetailPageMain({ posts }) {
  const { id } = useParams();

  const [commenterInput, setCommenter] = useState("");
  const [commentInput, setComment] = useState("");

  const [newPosts, setNewPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const onChangeCommenterHandler = (e) => {
    setCommenter(e.target.value);
  };

  const onChangeCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("accessToken");
    try {
      await axios.post(
        `${CONFIG.BASE_URL}/api/comments`,
        {
          data: {
            post: id,
            commenter: commenterInput,
            description_comment: commentInput,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCommenter("");
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchGetPosts = async () => {
      try {
        // const res = await axios.get(`${CONFIG.BASE_URL}/api/posts/${id}`);

        const res = await axios.get(
          `${CONFIG.BASE_URL}/api/posts/${id}?populate=*`
        );

        setNewPosts(res.data.data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };

    fetchGetPosts();
  }, [commenterInput]);

  if (loading) {
    return null;
  }

  return (
    <div className='my-10 mx-auto w-[80%] max-w-2xl rounded-lg bg-[#E6E5F3] p-10 shadow-lg'>
      <div className='mb-10 flex'>
        <LazyLoadImage
          className='h-10 w-10 rounded-full'
          src='/assets/image/profildefault.png'
          alt='foto profil default'
          width='100%'
          height='auto'
        />
        <div className='ml-4 grow'>
          <div className='flex items-center justify-between'>
            <h3 className='font-bold'>Anonymous</h3>
            <p className='text-gray-500 xs:text-sm'>
            {new Date(posts.attributes.createdAt)
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
              __html: DOMPurify.sanitize(posts.attributes.description_post),
            }}
          />
        </div>
      </div>

      <p className='font-semibold'>
        {newPosts.attributes.comments.data.length} <span>Comments</span>
      </p>

      <hr className='h-1 rounded-full bg-slate-400' />

      <div className='ml-10'>
        <form onSubmit={onSubmitHandler} className='mt-5'>
          <input
            value={commenterInput}
            onChange={onChangeCommenterHandler}
            type='text'
            className='mb-2 block w-full rounded-lg p-2'
            placeholder='Who are you ?'
            required
          />
          <input
            value={commentInput}
            onChange={onChangeCommentHandler}
            type='text'
            className='mb-4 block w-full rounded-lg p-2'
            placeholder='Write something...'
            required
          />
          <button
            className='rounded-xl bg-[#4949C9] px-6 py-2 text-white transition-all hover:scale-105'
            type='submit'
          >
            Comment
          </button>
        </form>

        {newPosts.attributes.comments.data.map((comment) => (
          <DetailPageComment comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
}

export default DetailPageMain;
