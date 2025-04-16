import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';

const WorkCard = ({ item }) => {
  return (
    <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] flex-shrink-0">
      <div className="bg-[#FFFBF3] shadow-md p-3 transition-transform duration-200 flex flex-col h-full hover:scale-105 group">

       
        <Link to={`/work/${item.category}/${item.id}`}>
          <figure className="w-full h-32 m-0 p-0 bg-gray-200">
            <img
              src={item.photo}
              alt={`Image of ${item.name}`}
              className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-200"
            />
          </figure>
        </Link>

        <div className="flex flex-col mt-2 flex-grow">
         
          <Link to={`/work/${item.category}/${item.id}`}>
            <h3 className="font-bold text-left text-black text-[20px] sm:text-[20px] md:text-[24px] ">
              {item.name}
            </h3>
          </Link>

          <div className="flex flex-col justify-end mt-auto">
                <div className="flex items-center justify-between">
                    <p className="text-left text-sm text-black opacity-60 sm:text-[12px] md:text-[14px]">
                    {item.author}
                    </p>
                    <LikeButton itemId={item.id} />
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default WorkCard;


