import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navBarContent = [
    { to: "/", label: "Gallery" },
    { to: "/shop", label: "Shop" },
  ];

  return (
    <div className="flex flex-wrap justify-center mt-2">
      {navBarContent.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `relative group mx-6  leading-[2] text-[20px] transition-all duration-500 ease-in-out 
             ${isActive ? "!text-black sm:text-[24px] opacity-100" : "!text-black sm:text-[24px] opacity-50 hover:opacity-100"}`
          }
        >
          {({ isActive }) => (
            <>
              {label}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-black transition-all duration-500 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full opacity-100"
                }`}
              />
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
}


