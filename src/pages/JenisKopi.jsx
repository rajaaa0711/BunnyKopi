import { Link } from "react-router-dom";
import KintamaniImg from "../assets/images/Kintamani.png";
import RobustaImg from "../assets/images/Robusta.png";
import NaturalImg from "../assets/images/Natural1.png";
import LuwakImg from "../assets/images/LUWAK.png";

const jenisKopi = [
  {
    nama: "Kintamani (Arabika)-Bali",
    deskripsi:
      "Kopi Arabika memiliki rasa yang cenderung asam, aroma wangi, dan kadar kafein lebih rendah. Banyak digemari karena cita rasanya yang kompleks.",
    gambar: KintamaniImg,
    slug: "arabika",
  },
  {
    nama: "Robusta Pupuan-Bali",
    deskripsi:
      "Kopi Robusta memiliki rasa yang lebih pahit, kadar kafein tinggi, dan aroma lebih kuat. Sering digunakan untuk kopi instan dan espresso.",
    gambar: RobustaImg,
    slug: "robusta",
  },
  {
    nama: "Bali Natural / Fermentasi",
    deskripsi:
      "Kopi Bali adalah kopi khas dari Pulau Bali yang terkenal dengan cita rasa seimbang, aroma rempah, dan sentuhan rasa floral.",
    gambar: NaturalImg,
    slug: "liberika",
  },
  {
    nama: "Kopi Luwak Bali",
    deskripsi:
      "Kopi luwak berasal dari biji kopi yang telah melewati proses alami dalam sistem pencernaan luwak. Memiliki rasa yang halus, aroma khas, dan keasaman rendah. Cocok bagi penikmat kopi eksklusif.",
    gambar: LuwakImg,
    slug: "luwak",
  },
];

export default function JenisKopi() {
  return (
    <div className="relative min-h-screen bg-yellow-50 py-10 px-4 flex flex-col items-center pt-20 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
        alt="Background Kopi"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      <div className="relative z-20 flex flex-col items-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-8 mt-12 drop-shadow-lg tracking-wide px-6 py-3 bg-white bg-opacity-80 rounded-xl shadow-2xl border-2 border-yellow-300">
          Jenis-Jenis Kopi
        </h2>
        <div className="grid md:grid-cols-4 gap-8 w-full max-w-6xl">
          {jenisKopi.map((kopi) => (
            <div key={kopi.nama} className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center border-2 border-[#bfa77a] hover:border-[#a67c52] transition">
              <img src={kopi.gambar} alt={kopi.nama} className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-yellow-900" />
              <h3 className="text-xl font-semibold text-yellow-900 mb-2 text-center whitespace-normal break-words">{kopi.nama}</h3>
              <p className="text-yellow-800 text-center mb-4">{kopi.deskripsi}</p>
              <Link to={`/jenis-kopi/${kopi.slug}`}>
                <button className="bg-[#FFD966] text-[#4B2E19] font-bold px-6 py-2 rounded-full font-poppins shadow hover:bg-[#fff8f0] transition-all duration-200">Lihat Detail</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 