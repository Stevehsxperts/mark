// components/CardContainer.js
import React from 'react';
import Card from './PdfCard';

const PdfCardContainer = () => {
  const cardsData = [
    {
      title: 'Edit PDF',
      description: 'Use the best online PDF editor to edit PDFs in your browser.',
      imageUrl: 'https://images.hipdf.com/images2022/icons/editPDF.svg',
    },
    {
      title: 'Crop PDF',
      description: 'Crop PDF online to a selected area, and adjust margin size swiftly.',
      imageUrl: 'https://images.hipdf.com/images2022/icons/Crop-PDF.svg',
    },
    {
      title: 'Replace Text',
      description: 'The easiest way to replace text online.',
      imageUrl: 'https://images.hipdf.com/images2022/icons/replace-text-pdf.svg',
    },
    {
      title: 'Rotate PDF',
      description: 'Rotate and save your PDF pages online for free.',
      imageUrl: 'https://images.hipdf.com/images2022/icons/Rotate-PDF.svg',
    },
  ];

  return (
    <div className='container flex justify-center mt-16'>
        <div className='cardconatininner max-w-[1266px]'>
            <h2 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mb-8 font-bold text-3xl leading-9 text-gray-800'>Your Bookmarks</h2>
        <div className="card-container grid grid-cols-5 gap-4">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
        </div>
    </div>
  );
};

export default PdfCardContainer;
