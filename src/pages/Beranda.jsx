import { Link } from "react-router-dom";

export default function Beranda() {
  return (
    <div className="relative min-h-screen flex items-center justify-start bg-[#2d1a0b] pt-32 pb-16 px-8">
      <img
        src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80"
        alt="Kopi Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      <div className="relative z-20 flex flex-col items-start justify-center max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins text-[#FFD966] mb-4 drop-shadow-lg tracking-tight leading-tight">
          Temukan rasa, cerita, dan tempat ngopi terbaik di <span className="text-white font-dancing">Singaraja</span>.
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-8 font-poppins drop-shadow">
          Di sinilah <span className="text-[#FFD966] font-bold">kopi mempertemukan kita</span>
        </h2>
        <Link to="/jenis-kopi">
          <button className="bg-[#FFD966] text-[#4B2E19] font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-[#fff8f0] transition-all duration-200">Order Now</button>
        </Link>
      </div>
    </div>
  );
} 