import { Link } from "react-router-dom";

const MoreButton = ({ className = "" }) => {
    return (
      <Link to="/">
        <div
          className={`inline-block px-6 py-2 text-lg font-medium text-white bg-red-600 border border-red-600 cursor-pointer transition-all duration-300 hover:bg-red-50 hover:text-red-600 select-none ${className}`}
        >
          more
        </div>
      </Link>
    );
  };
  

export default MoreButton;
