import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import Swal from "sweetalert2";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-quill/dist/quill.snow.css";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import CONFIG from "../global/config";

export default function AddPage() {
  const navigate = useNavigate();

  const [description_post, setDescription_post] = useState();

  const onInputHandler = (e) => {
    setDescription_post(e.target.innerHTML);
  };

  const onClickHandler = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      await axios.post(
        `${CONFIG.BASE_URL}/api/posts`,
        {
          data: {
            description_post,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your story has been added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className='mx-auto w-[80%] max-w-2xl py-10'>
      <div className='mb-8 flex justify-between'>
        <Link to='/'>
          <BiArrowBack className='h-11 w-11' />
        </Link>
        <button
          onClick={onClickHandler}
          type='submit'
          className='rounded-xl bg-[#4949C9] px-6 py-2 text-white transition-all hover:scale-110'
        >
          Publish
        </button>
      </div>

      <div className='flex gap-4'>
        <LazyLoadImage
          className='h-10 w-10 rounded-full'
          src='/assets/image/profildefault.png'
          alt='foto profil default'
          width='100%'
          height='auto'
        />
        <ReactQuill
          modules={modules}
          placeholder='Write your story here...'
          theme='snow'
          value={description_post}
          onChange={setDescription_post}
          onInput={onInputHandler}
        />
      </div>
    </div>
  );
}
