import { useState } from 'react';
import { useLike } from '@/context/LikeContext';

export default function LikeButton({ itemId }) {
  const { likes, likedItems, likeItem } = useLike();
  const [showPlusOne, setShowPlusOne] = useState(false);

  const handleClick = () => {
    likeItem(itemId); // 我們等下會改 likeItem 支援加／減切換
    setShowPlusOne(true);
    setTimeout(() => setShowPlusOne(false), 600);
  };

  const liked = likedItems[itemId];
  const count = likes[itemId] || 0;

  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      className="relative w-10 h-10 cursor-pointer transition-transform duration-150 hover:scale-110 focus:outline-none"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(e);
        }
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill={liked ? 'red' : 'none'}
        stroke="red"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 
                 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 
                 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>

     
    </div>

    </div>
  );
}





  