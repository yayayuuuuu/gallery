// src/pages/WorkDetailPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WorkDetailPage = () => {
  const { category, id } = useParams(); // c1 + Angelico002
  const [work, setWork] = useState(null);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const data = await import(`@/json/${category}galleryworks.json`);
        const found = data.default.find((item) => item.id === id);
        setWork(found || null);
      } catch (error) {
        console.error(`❌ 無法載入 ${category}galleryworks.json`, error);
        setWork(null);
      }
    };

    fetchWork();
  }, [category, id]);

  if (!work) return <div className="text-center py-10">找不到作品</div>;

  return (
    <div className="w-full max-w-[1366px] mx-auto bg-base-100">
      <Header />

      <div className="p-6 flex flex-col items-center text-black">
        <h1 className="text-3xl font-bold mb-4">{work.name}</h1>
        <img src={work.photo} alt={work.name} className="max-w-full max-h-[400px] object-contain mb-4 shadow-md" />
        <div className="w-full max-w-md text-left space-y-2">
          <p><strong>作者：</strong>{work.author}</p>
          <p><strong>創作年份：</strong>{work.year}</p>
          <p><strong>尺寸：</strong>{work.size}</p>
          <p><strong>媒材：</strong>{work.material}</p>
          <p><strong>作品說明：</strong>{work.detail}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkDetailPage;

