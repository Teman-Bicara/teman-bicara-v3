import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function LandingPageFooter() {
  return (
    <div className='relative overflow-hidden' id='contact-us'>
      <hr className='absolute left-0 right-0 top-14 z-10 h-2 bg-white' />

      <div className='relative z-20'>
        <p className='mx-auto mt-12 w-fit bg-primary px-4 font-montserrat font-bold'>
          Get in touch with us
        </p>
        <p className='mt-8 mb-2 text-white'>Contact us</p>
        <ul className='flex justify-center gap-4'>
          <li>
            <a
              href='mailto:tebicara@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <LazyLoadImage
                src='/assets/icons/email.svg'
                alt='logo email '
                width='44px'
                height='44px'
              />
            </a>
          </li>
        </ul>

        <p className='mt-4 mb-2 text-white'>Follow us</p>
        <ul className='flex justify-center gap-4'>
          <li>
            <a
              href='https://github.com/Teman-Bicara'
              target='_blank'
              rel='noreferrer'
            >
              <LazyLoadImage
                src='/assets/icons/github.svg'
                alt='logo github'
                width='44px'
                height='44px'
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/channel/UCkXQBg8Y0CREUZtRUzt8IFA'
              target='_blank'
              rel='noreferrer'
            >
              <LazyLoadImage
                src='/assets/icons/youtube.svg'
                alt='logo youtube'
                width='44px'
                height='44px'
              />
            </a>
          </li>
        </ul>
        <div className='flex items-center justify-center pt-40'>
          <LazyLoadImage
            src='/assets/image/logo-tebi.svg'
            alt='logo teman bicara'
            className='mx-[-1.25rem]'
          />
          <p className='mt-3 font-bold'>All Rights Reserved</p>
        </div>
      </div>
      <div className='absolute bottom-12 left-0 right-0 z-10 sm:bottom-0'>
        <LazyLoadImage
          src='/assets/image/footer3.svg'
          alt='gambar footer'
          className='scale-y-[3] scale-x-125 sm:scale-100'
        />
      </div>
    </div>
  );
}

export default LandingPageFooter;
