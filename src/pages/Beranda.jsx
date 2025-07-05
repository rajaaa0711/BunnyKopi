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
        <span className="text-lg text-white font-poppins mb-2 drop-shadow">Kopi di Bali merupakan bagian penting dari budaya dan pertanian lokal. Bali dikenal menghasilkan kopi arabika berkualitas tinggi, khususnya dari daerah Kintamani yang terletak di dataran tinggi. Kopi Kintamani tumbuh di ketinggian sekitar 1.200 meter di atas permukaan laut, dengan tanah vulkanik yang subur dan sistem pertanian tradisional subak.</span>
        <h1 className="text-[5rem] md:text-[7rem] font-dancing text-white leading-none mb-2 drop-shadow-lg">Coffee</h1>
        <p className="text-lg text-white font-poppins mb-8 max-w-lg drop-shadow">Kopi adalah minuman yang dibuat dari biji tanaman kopi yang telah disangrai dan digiling. Biji kopi berasal dari buah tanaman kopi (coffee cherry) yang umumnya tumbuh di daerah beriklim tropis di ketinggian tertentu. Setelah dipanen, biji kopi melewati proses pengolahan, pengeringan, dan pemanggangan sebelum diseduh menjadi minuman.

Kopi mengandung kafein, zat alami yang memberikan efek menyegarkan dan meningkatkan fokus. Minuman ini memiliki cita rasa yang sangat beragam tergantung dari jenis biji, cara penanaman, proses pengolahan, dan metode penyeduhan.</p>
        <Link to="/jenis-kopi">
          <button className="bg-[#FFD966] text-[#4B2E19] font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-[#fff8f0] transition-all duration-200">Order Now</button>
        </Link>
      </div>
    </div>
  );
} 