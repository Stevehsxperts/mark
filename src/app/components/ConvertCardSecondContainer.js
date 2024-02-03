// components/CardContainer.js

import React from 'react';
// import DynamicOwlCarousel from './DynamicOwlCarousel';
import ConvertCardSecond from './ConvertCardSecond';



const ConvertCardSecondContainer = () => {
    

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
  ];


  return (
    <div className='container flex justify-center mt-16'>
        <div className='cardconatininner max-w-[1266px]'>
            <h2 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mb-8 font-bold text-3xl leading-9 text-gray-800'>Convert From PDF</h2>
          
            <div className="card-container grid grid-cols-5 gap-4">
          {cardsData.map((card, index) => (
            <ConvertCardSecond key={index} {...card} />
          ))}
        </div>
    {/* <DynamicOwlCarousel cardsData={cardsData} /> */}
        </div>
    </div>
  );
};


export default ConvertCardSecondContainer;
