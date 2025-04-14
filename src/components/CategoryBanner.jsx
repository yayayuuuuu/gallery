import React from 'react';
import Banner from '../components/Banner';
import categoryData from '../json/category.json';

const CategoryBanner = () => {
  return (
    <div className="space-y-8">
      {categoryData.map((category) => (
        <Banner
          key={category.id}
          name={category.categoryname}   // 對應元件需要的 name
          photo={category.categoryphoto} // 對應元件需要的 photo
        />
      ))}
    </div>
  );
};

export default CategoryBanner;