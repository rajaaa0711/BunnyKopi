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
        <span className="text-lg text-white font-poppins mb-2 drop-shadow">Kopi adalah minuman yang berasal dari biji tanaman kopi yang disangrai dan digiling. Rasanya pahit khas, aromanya kuat, dan bisa memberi energi karena mengandung kafein. Setiap jenis kopi—seperti Arabika atau Robusta—punya karakter rasa yang unik tergantung tempat tumbuh, cara olah, dan penyajiannya. Kopi bukan cuma minuman, tapi budaya: dinikmati sambil ngobrol, bekerja, atau merenung. Dari kopi hitam polos hingga latte artistik, kopi selalu punya cara untuk dinikmati setiap orang.</span>
        <h1 className="text-[5rem] md:text-[7rem] font-dancing text-white leading-none mb-2 drop-shadow-lg">Coffee</h1>
        <p className="text-lg text-white font-poppins mb-8 max-w-lg drop-shadow">Kopi Bali dikenal karena tumbuh di dataran tinggi vulkanik yang subur, seperti di daerah Kintamani. Cita rasanya unik: ringan, sedikit asam, dan ada aroma buah-buahan tropis karena sistem pertanian tumpang sari dengan jeruk. Selain itu, kopi Bali juga terkenal dengan proses pengolahan tradisionalnya yang menjaga kualitas rasa. Tak sekadar minuman, kopi di Bali jadi bagian dari budaya dan keramahan masyarakat lokal.

Kopi mengandung kafein, zat alami yang memberikan efek menyegarkan dan meningkatkan fokus. Minuman ini memiliki cita rasa yang sangat beragam tergantung dari jenis biji, cara penanaman, proses pengolahan, dan metode penyeduhan.</p>
        <Link to="/jenis-kopi">
          <button className="bg-[#FFD966] text-[#4B2E19] font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-[#fff8f0] transition-all duration-200">Order Now</button>
        </Link>
      </div>
    </div>
  );
} 