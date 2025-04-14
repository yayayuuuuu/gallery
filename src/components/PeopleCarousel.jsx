import { useEffect, useState } from 'react';
import CarouselWrapper from './CarouselWrapper';

const PeopleCarousel = ({ id }) => {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    const fetchPeopleData = async () => {
      try {
        const response = await import(`@/json/${id}people.json`);
        setPeopleData(response.default);
      } catch (error) {
        console.error(`Failed to load data for id: ${id}`, error);
        setPeopleData([]); // fallback
      }
    };

    fetchPeopleData();
  }, [id]);

  return (
    <CarouselWrapper
      data={peopleData}
      title="代表作家"
      linkPrefix="/people"
      renderItem={(item) => (
        <div className="w-60 rounded-xl shadow p-4 bg-[#FFFBF3]">
          <img
            src={item.peoplephoto}
            alt={item.peoplename}
            className="h-40 w-full object-cover mb-2"
          />
          <h3 className="text-sm font-bold text-gray-600 text-[14px] sm:text-[16px] md:text-[18px]">
            {item.peoplename}
          </h3>
        </div>
      )}
    />
  );
};

export default PeopleCarousel;
