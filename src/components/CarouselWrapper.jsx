import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CarouselWrapper = ({
  data = [],
  title = "Gallery",
  linkPrefix = "/category",
  renderItem = null
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4); // default
  const [isHovered, setIsHovered] = useState(false);
  const totalItems = data.length;
  const intervalRef = useRef(null);

  
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 500) setVisibleCount(1);       // 手機
      else if (width < 768) setVisibleCount(2);  // 平板
      else setVisibleCount(4);                   // 桌機
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setStartIndex((prevIndex) => (prevIndex + 1) % totalItems);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, totalItems]);

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % totalItems;
      items.push(data[index]);
    }
    return items;
  };

  if (totalItems === 0) {
    return <div className="px-4 py-6 text-gray-500">No data available.</div>;
  }

  return (
    <div className="relative w-full px-4 py-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <div
        className="flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className="mx-2 text-[14px] sm:text-[16px] md:text-[18px] px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-md bg-[#FFFBF3] text-[#333] hover:bg-[#FFE082] border-none shadow-md transition"
          onClick={handlePrev}
        >
          ❮
        </button>

        <div className="flex gap-4 overflow-hidden">
          {getVisibleItems().map((item) => (
            <Link to={`${linkPrefix}/${item.id}`} key={item.id}>
              {renderItem ? renderItem(item) : (


                    <div className="card w-60 bg-[#FFFBF3] shadow-md p-3 flex-shrink-0 hover:scale-105 transition-transform duration-200">
                      <figure className="w-full h-32 m-0 p-0 bg-gray-200">
                        <img
                          src={item.categoryphoto}
                          alt={`Image of ${item.categoryname}`}
                          className="w-full h-full object-cover opacity-50 hover:opacity-80 transition-opacity duration-200"
                        />
                      </figure>
                      <div className="mt-2">
                          <h3 className="font-bold text-sm text-gray-600 sm:text-[16px] md:text-[18px]">{item.categoryname}</h3>
                          <p className="text-xs text-gray-600">
                            {item.categorydetail?.replace(/\n/g, '').slice(0, 50)}...
                          </p>
                      </div>
                    </div>
            
              
              
    
              )}
            </Link>
          ))}
        </div>

        <button
          className="mx-2 text-[14px] sm:text-[16px] md:text-[18px] px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-md bg-[#FFFBF3] text-[#333] hover:bg-[#FFE082] border-none shadow-md transition"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default CarouselWrapper;

