// components/Card.js
import React from 'react';

const PdfCard = ({ title, description, imageUrl }) => {
  return (
    <div className="card relative text-left p-4 pt-[22px] bg-white border border-gray-300 rounded-lg transition-all duration-300 hover:shadow-lg hover:no-underline">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3 className='font-harmonyos font-inter font-microsoft font-pingfang font-helvetica font-sans mt-4 font-bold text-2xl leading-120 text-gray-800'>{title}</h3>
        <p className='mt-[5px] overflow-hidden text-sm leading-5 text-gray-500 line-clamp-2'>{description}</p>
      </div>
    </div>
  );
};

export default PdfCard;
