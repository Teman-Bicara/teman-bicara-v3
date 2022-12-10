/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function HomePageNav({ logout, username }) {
  return (
    <section id="bottom-navigation" className="bg-white shadow-lg">
      <div id="tabs" className="flex justify-between">
        <Link to="/" className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
          <AiOutlineHome className="h-8 w-8 inline-block mb-1" />
          <span className="tab tab-home block text-xs">
            Beranda
          </span>
        </Link>
        <Link to="/posts/new" className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
          <BsPlusCircle className="h-8 w-8 inline-block mb-1" />
          <span className="tab tab-home block text-xs">
            Tambah
          </span>
        </Link>
        <Link to="/">
          <button onClick={logout} className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
            <AiOutlineLogout className="h-8 w-8 inline-block mb-1" />
            <span className="tab tab-home block text-xs">
              {username}
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
