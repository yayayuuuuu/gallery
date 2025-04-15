import { Link } from "react-router-dom";

const ShopButton = ({ className = "" }) => {
    return (
      <Link to="/shop">
        <div
          className={`inline-block w-full my-5 sm:w-1/2 px-6 py-2 sm:text-[16px] md:text-[20px] font-medium text-[#FFFBF3] bg-[#CE342C] border border-[#CE342C] cursor-pointer transition-all duration-300 hover:bg-[#FFFBF3] hover:text-[#CE342C] select-none ${className}`}
        >
          我要訂購！
        </div>
      </Link>
    );
  };
  

export default ShopButton;