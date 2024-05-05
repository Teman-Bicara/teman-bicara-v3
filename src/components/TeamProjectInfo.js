import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import profil from '../../public/assets/profil-kucing.jpg';

// import profil1 from '../profil1.webp';
// import profil2 from '../profil2.webp';
// import profil3 from '../profil3.webp';
// import profil4 from '../profil4.webp';
import profil1 from "../img/patrick.jpg";
import profil2 from "../img/patrick.jpg";
import profil3 from "../img/patrick.jpg";
import profil4 from "../img/patrick.jpg";

function TeamProjectInfo() {
  return (
    <section
      data-aos='fade-up'
      className='bg-cover bg-center bg-no-repeat pt-8 pb-16'
      style={{
        backgroundImage: "url('assets/image/background-teamproject.webp')",
      }}
      id='about-us'
    >
      <div className='mx-auto max-w-[85%] xl:max-w-[70%]'>
        <h2 className='mx-auto mb-8 max-w-md bg-white py-2 text-center text-base font-bold  text-[#304652] shadow-2xl xl:max-w-xl xl:py-6 xl:text-4xl'>
          Our Team
        </h2>
        <div className='mt-20 grid gap-20 md:grid-cols-2 xl:gap-32'>
          <div
            data-aos='flip-left'
            className='relative rounded-2xl bg-[#FFFFFFAD] px-11 shadow-2xl'
          >
            <LazyLoadImage
              src={profil1}
              alt='Foto profil tim 1 '
              className='absolute top-[-3rem] left-4 h-[110px] w-[110px] rounded-full bg-cover'
            />
            <h1 className='mt-20 mb-1 text-2xl font-bold text-primary'>
              Muhammad Alif Hanafiah
            </h1>
            <p className='mb-4 font-bold text-[#304652]'>
              Universitas Putra Indonesia Yptk Padang
            </p>
            <p className='mb-8 font-bold text-[#304652]'>
              Saya adalah seorang mahasiswa yang memiliki passion dalam
              membangun aplikasi web yang interaktif dan memiliki aksesibilitas
              yang baik untuk penggunanya.
            </p>
            <ul className='mb-12 flex gap-8'>
              <li>
                <a
                  href='https://www.instagram.com/alifff_hanafiah/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LazyLoadImage
                    src='/assets/icons/instagramPersonal.svg'
                    alt='icon instagram'
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/alifhanafiah/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LazyLoadImage
                    src='/assets/icons/linkedinPersonal.svg'
                    alt='icon linkedin'
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/alifhanafiah'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LazyLoadImage
                    src='/assets/icons/githubPersonal.svg'
                    alt='icon github'
                  />
                </a>
              </li>
            </ul>
          </div>

          <div
            data-aos='flip-right'
            className='relative rounded-2xl bg-[#26235CAD] px-11 shadow-2xl'
          >
            <LazyLoadImage
              src={profil2}
              alt='Foto profil tim 2'
              className='absolute top-[-3rem] left-4 h-[110px] w-[110px] rounded-full bg-cover'
            />
            <h1 className='mt-20 mb-1 text-2xl font-bold text-[#2DF8BB]'>
              Kresna Satya Nugroho
            </h1>
            <p className='mb-4 font-bold text-white'>Universitas Tanjungpura</p>
            <p className='mb-8 font-bold text-white'>
              Seorang mahasiswa tingkat akhir di Universitas Tanjungpura yang
              sedang belajar Front-End Development. Hobi ngoding cita-cita jadi
              fullstuckoverflow developer.
            </p>
            <ul className='mb-12 flex gap-8'>
              <li>
                <a
                  href='https://www.instagram.com/kisnaak.ngroho/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LazyLoadImage
                    src='/assets/icons/instagramPersonal.svg'
                    alt='icon instagram'
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/kresna-satya-nugroho-0bb3b1227/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LazyLoadImage
                    src='/assets/icons/linkedinPersonal.svg'
                    alt='icon linkedin'
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/kisnak21'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LazyLoadImage
                    src='/assets/icons/githubPersonal.svg'
                    alt='icon github'
                  />
                </a>
              </li>
            </ul>
          </div>

          <div
            data-aos='flip-left'
            className='relative rounded-2xl bg-[#304652AD] px-11 shadow-2xl'
          >
            <LazyLoadImage
              src={profil3}
              alt='Foto profil tim 3 '
              className='absolute top-[-3rem] left-4 h-[110px] w-[110px] rounded-full bg-cover'
            />
            <h1 className='mt-20 mb-1 text-2xl font-bold text-[#2DF8BB]'>
              Muhammad Raihan Ramadhan
            </h1>
            <p className='mb-4 font-bold text-white'>
              Universitas Nusa Mandiri
            </p>
            <p className='mb-8 font-bold text-white'>
              Saya seorang Front-end Development Website pemula yang berdomisili
              di jakarta. Sekarang saya adalah mahasiswa semester 7 di
              Universitas Nusa Mandiri
            </p>
            <ul className='mb-12 flex gap-8'>
              <li>
                <a
                  href='https://www.instagram.com/_raihan2k_/?hl=id'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LazyLoadImage
                    src='/assets/icons/instagramPersonal.svg'
                    alt='icon instagram'
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/muhammad-raihan-ramadhan-62272b245/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LazyLoadImage
                    src='/assets/icons/linkedinPersonal.svg'
                    alt='icon linkedin'
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/Raihan-2k'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LazyLoadImage
                    src='/assets/icons/githubPersonal.svg'
                    alt='icon github'
                  />
                </a>
              </li>
            </ul>
          </div>

          <div
            data-aos='flip-right'
            className='relative rounded-2xl bg-[#FFFFFFAD] px-11 shadow-2xl'
          >
            <LazyLoadImage
              src={profil4}
              alt='Foto profil tim 4 '
              className='absolute top-[-3rem] left-4 h-[110px] w-[110px] rounded-full bg-cover'
            />
            <h1 className='mt-20 mb-1 text-2xl font-bold text-primary'>
              Laida Lavenia. H
            </h1>
            <p className='mb-4 font-bold text-[#304652]'>Universitas Jember</p>
            <p className='mb-8 font-bold text-[#304652]'>
              Saya merupakan seorang mahasiswa semester 5 dari jurusan Teknologi
              Informasi. Dan saya juga suka mempelajari hal-hal baru yang bisa
              menambah skill saya terutama di bidang IT yaitu Front End Web
              Developer
            </p>
            <ul className='mb-12 flex gap-8'>
              <li>
                <a
                  href='https://www.instagram.com/laidalav_/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LazyLoadImage
                    src='/assets/icons/instagramPersonal.svg'
                    alt='icon instagram'
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/laidalavenia/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LazyLoadImage
                    src='/assets/icons/linkedinPersonal.svg'
                    alt='icon linkedin'
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/laidalavenia'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LazyLoadImage
                    src='/assets/icons/githubPersonal.svg'
                    alt='icon github'
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamProjectInfo;
