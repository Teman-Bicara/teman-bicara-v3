/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsChatRightDots, BsPlusCircle } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';

export default function HomePageNav() {
  return (
    <section id="bottom-navigation" className="bg-white shadow-lg">
      <div id="tabs" className="flex justify-between">
        <a href="/home" className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
          <AiOutlineHome className="h-8 w-8 inline-block mb-1" />
          <span className="tab tab-home block text-xs">Beranda</span>
        </a>
        <a href="#" className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
          <BsChatRightDots className="h-8 w-8 inline-block mb-1" />
          <span className="tab tab-home block text-xs">Pesan</span>
        </a>
        <a href="/new/post" className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
          <BsPlusCircle className="h-8 w-8 inline-block mb-1" />
          <span className="tab tab-home block text-xs">
            Tambah
          </span>
        </a>
        <a href="#" className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
          <IoMdNotificationsOutline className="h-8 w-8 inline-block mb-1" />
          <span className="tab tab-home block text-xs">Notifikasi</span>
        </a>
        <a href="/setting" className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
          <VscAccount className="h-8 w-8 inline-block mb-1" />
          <span className="tab tab-home block text-xs">Akun</span>
        </a>
      </div>
    </section>
  );
}
