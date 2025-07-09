import { Link } from "react-router-dom";
import KintamaniImg from "../assets/images/Kintamani.png";
import RobustaImg from "../assets/images/Robusta.png";
import NaturalImg from "../assets/images/Natural.png";

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
    nama: "Bali Natural/Fermentasi",
    deskripsi:
      "Kopi Liberika memiliki aroma unik seperti buah dan bunga, dengan rasa yang khas dan jarang ditemukan di pasaran.",
    gambar: NaturalImg,
    slug: "liberika",
  },
];

export default function JenisKopi() {
  return (
    <div className="min-h-screen bg-yellow-50 py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-8">Jenis-Jenis Kopi</h2>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        {jenisKopi.map((kopi) => (
          <div key={kopi.nama} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center border-2 border-yellow-200 hover:border-yellow-700 transition">
            <img src={kopi.gambar} alt={kopi.nama} className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-yellow-900" />
            <h3 className="text-xl font-semibold text-yellow-900 mb-2">{kopi.nama}</h3>
            <p className="text-yellow-800 text-center mb-4">{kopi.deskripsi}</p>
            <Link to={`/jenis-kopi/${kopi.slug}`}>
              <button className="bg-[#FFD966] text-[#4B2E19] font-bold px-6 py-2 rounded-full font-poppins shadow hover:bg-[#fff8f0] transition-all duration-200">Lihat Detail</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 