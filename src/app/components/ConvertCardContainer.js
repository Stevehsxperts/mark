// components/CardContainer.js

// import React from 'react';
// import Slider from 'react-slick';
// import ConvertCard from './ConvertCard';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import ConvertCard from './ConvertCard';
// import 'swiper/css/swiper-bundle.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const ConvertCardContainer = () => {
    

  const cardsData = [
    {
      title: 'PDF to Word',
      description: 'Easily convert PDF to Word online.',
      imageUrl: 'https://images.hipdf.com/images2022/icons/pdf-word.svg',
    },
    {
      title: 'PDF to PPT',
      description: 'Convert PDF to Powerpoint online.',
      imageUrl: 'https://images.hipdf.com/images2022/icons/PDF-PPT.svg',
    },
    {
      title: 'PDF to Excel',
      description: 'Convert PDF to Excel for free online.',
      imageUrl: 'https://images.hipdf.com/images2022/icons/pdf-excel.svg',
    },
    {
      title: 'PDF to JPG',
      description: 'Convert PDF files to JPG online for free in high quality. Quickly transform any PDF into high-quality images.',
      imageUrl: 'https://images.hipdf.com/images2022/icons/PDF-JPG.svg',
    },
    {
        title: 'PDF to Text',
        description: 'Convert your PDF to TXT, extract text from your PDF',
        imageUrl: 'https://images.hipdf.com/images2022/icons/PDF-TXT.svg',
      },
      {
        title: 'PDF to RTF',
        description: 'Convert PDF to RTF online and free.',
        imageUrl: 'https://images.hipdf.com/images2022/icons/PDF-RTX.svg',
      },
      {
        title: 'PDF to Pages',
        description: 'The fastest way to convert PDF to Pages on Mac and Windows.',
        imageUrl: 'https://images.hipdf.com/images2022/icons/PDF-Pages.svg',
      },
      {
        title: 'PDF to HTML',
        description: 'Convert your PDF document into an HTML web page.',
        imageUrl: 'https://images.hipdf.com/images2022/icons/pdf-html.svg',
      },
  ];
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // You can adjust the number of slides shown at a time
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

  return (
    <div className='container flex justify-center mt-16'>
        <div className='cardconatininner max-w-[1266px]'>
            <h2 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mb-8 font-bold text-3xl leading-9 text-gray-800'>Convert From PDF</h2>
          
            <div className="card-container grid grid-cols-5 gap-4">
      {cardsData.map((card, index) => (
        <ConvertCard key={index} {...card} />
      ))}
    </div>
    {/* <Slider {...sliderSettings}>
          {cardsData.map((card, index) => (
            <ConvertCard key={index} {...card} />
          ))}
        </Slider> */}

{/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <ConvertCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper> */}

        </div>
    </div>
  );
};


export default ConvertCardContainer;
