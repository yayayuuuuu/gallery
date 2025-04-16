import { createContext, useContext, useState } from 'react';

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState({});
  const [likedItems, setLikedItems] = useState({});

  const likeItem = (id) => {
    setLikes((prev) => {
      const isLiked = likedItems[id];
      return {
        ...prev,
        [id]: isLiked ? Math.max((prev[id] || 1) - 1, 0) : (prev[id] || 0) + 1,
      };
    });

    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // 切換狀態 true ↔ false
    }));
  };

  const totalLikes = Object.values(likes).reduce((sum, v) => sum + v, 0);

  return (
    <LikeContext.Provider value={{ likes, likedItems, likeItem, totalLikes }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => useContext(LikeContext);

