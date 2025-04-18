import { Link } from "react-router-dom";

const MoreButton = ({ className = "" }) => {
    return (
      <Link to="/">
        <div
          className={`inline-block px-6 py-2 text-lg font-medium text-[#FFFBF3] bg-[#CE342C] border border-[#CE342C] cursor-pointer transition-all duration-300 hover:bg-[#FFFBF3] hover:text-[#CE342C] select-none ${className}`}
        >
          more
        </div>
      </Link>
    );
  };
  

export default MoreButton;
