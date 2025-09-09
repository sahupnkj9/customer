import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiBell, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [darkmode, setDarkmode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  const toggleTheme = () => setDarkmode(!darkmode);

  return (
    <nav className="fixed top-0 w-full z-50 p-3 bg-[#FFFFFF] dark:bg-[#101828] flex items-center justify-between border-b border-[#CBD0DD] font-outfit">
      <h1 className=" pl-4 text-2xl font-bold cursor-pointer dark:text-[#FFFFFF]">
        Car
        <span className="text-[#FF5C35]">Fix</span>
        Pro               
      </h1>
      <div className="flex items-center justify-between  px-2 py-[7px] rounded-full w-1/4  border-[1px] border-[#CBD0DD]">
        <FiSearch className="text-[#525B75CC] mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm text-[#525b75] dark:text-[#FFFFFF] font-medium w-full "
        />
      </div>
      <div className="flex items-center gap-5 pr-7">
        <button className="rounded-full cursor-pointer" onClick={toggleTheme}>
          {darkmode ? (
            <FiSun className="text-[#525B75CC]" />
          ) : (
            <FiMoon className="text-[#525B75CC]" />
          )}
        </button>
        <button className=" relative p-2 rounded-full cursor-pointer">
          <FiBell className="text-[#525B75CC]" />
          <span className="absolute top-0 right-0 bg-red-500 text-xs px-1 rounded-full">
            3
          </span>
        </button>
        <div className="flex items-center cursor-pointer ">
          <img
            src="https://prium.github.io/phoenix/v1.23.0/assets/img/team/72x72/57.webp"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
