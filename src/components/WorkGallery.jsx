import React from 'react';
import WorkCard from './WorkCard';
import galleryworks from '../json/c1galleryworks.json';

const WorkGallery = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center px-15 py-6">
    {galleryworks.map((item) => (
      <WorkCard key={item.id} item={item} />
    ))}
  </div>
  );
};

export default WorkGallery;