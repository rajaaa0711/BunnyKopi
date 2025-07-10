import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/jenis-kopi" },
  { name: "Video", path: "/video" },
  { name: "Recommendation", path: "/cafes" }, // Added Café Pilihan
  { name: "About Us", path: "/tentang-kopi" },
  { name: "Contact Us", path: "#" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-16 py-6 bg-black bg-opacity-30 backdrop-blur-sm border-b border-white border-opacity-20">
      <Link to="/">
        <div className="text-3xl font-dancing text-white tracking-wide cursor-pointer hover:text-[#FFD966] transition-colors duration-200">Temu Coffee</div>
      </Link>
      <div className="flex-1 flex justify-center">
        <ul className="flex gap-6 items-center bg-black bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 border border-white border-opacity-30">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-lg font-poppins font-medium transition-all duration-200 px-4 py-2 rounded-full ${
                  location.pathname === item.path 
                    ? "bg-[#FFD966] text-[#4B2E19] shadow-lg underline underline-offset-4"
                    : "text-white hover:bg-white hover:bg-opacity-20 hover:text-[#FFD966]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/signin">
          <button className="text-white font-poppins hover:text-[#FFD966] transition bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-[#FFD966] text-[#4B2E19] font-bold px-6 py-2 rounded-full font-poppins shadow-lg hover:bg-[#fff8f0] transition-all duration-200 border-2 border-[#FFD966]">SignUp</button>
        </Link>
      </div>
    </nav>
  );
} 