import { Link } from "react-router"

function Header() {
    return (
        <header className="w-full h-8 sm:h-8 md:h-12 bg-[#ce342c] flex items-center">
            <Link to="/">
                <img src="/images/logo.svg" className="h-6.5 sm:h-6.5 md:h-10 ml-3 sm:ml-3 md:ml-6 object-contain" />
            </Link>
        </header>
        
    );
}

export default Header;