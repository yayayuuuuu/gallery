const Banner = ({ data }) => {
    if (!data) return null; // 防止未找到資料時出錯
  
    return (
        <div className="relative h-full mt-5 group">
        {/* 圖片背景區塊 */}
        <div
          className="relative bg-cover bg-center py-16 md:py-24 transition-all duration-500"
          style={{
            backgroundImage: `url(${data.categoryphoto})`,
          }}
        >
          {/* 遮罩層 */}
          <div className="absolute inset-0 bg-white/60 transition duration-500 group-hover:bg-white/70"></div>
      
          {/* 內容區 */}
          <div className="relative container mx-auto px-4 md:px-8 text-center">
            {/* 顯示 categoryname（預設顯示，hover 隱藏） */}
            <p className="text-[32px] sm:text-[48px] md:text-[64px] font-semibold text-black inline-block px-4 sm:px-6 py-2 sm:py-3 leading-tight sm:leading-snug 
              group-hover:opacity-0 transition-opacity duration-300">
              {data.categoryname}
            </p>
      
            {/* 顯示 categorydetail（預設隱藏，hover 顯示） */}
            <p className="absolute inset-0 flex items-center justify-center text-black text-base sm:text-lg px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-20">
              {data.categorydetail}
            </p>
          </div>
        </div>
      </div>
      
      
    );
  };
  
  export default Banner;
  

