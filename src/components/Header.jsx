import { useLike } from '@/context/LikeContext';
import { Link } from 'react-router-dom';

function Header() {
  const { totalLikes } = useLike();

  return (
    <header className="w-full h-12 sm:h-12 md:h-12 bg-[#ce342c] flex items-center justify-between px-4">
      <Link to="/">
        <img src="/images/logo.svg" className="h-6 md:h-10 object-contain" />
      </Link>

      <div className="relative w-8 h-8 mt-2">
        <svg
          viewBox="0 0 24 24"
          fill="red"
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

        <span className="absolute -top-2 -right-2 bg-white text-pink-600 text-xs font-bold px-1 rounded-full shadow">
          {totalLikes}
        </span>
      </div>
    </header>
  );
}

export default Header;

