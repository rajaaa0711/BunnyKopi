import { useParams } from "react-router-dom";

const dataKopi = {
  arabika: {
    nama: "Arabika",
    gambar: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
  },
  robusta: {
    nama: "Robusta",
    gambar: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  liberika: {
    nama: "Liberika",
    gambar: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
};

export default function DetailKopi() {
  const { jenis } = useParams();
  const kopi = dataKopi[jenis];

  if (!kopi) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600">Kopi tidak ditemukan</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 py-16 px-4">
      <img src={kopi.gambar} alt={kopi.nama} className="w-56 h-56 object-cover rounded-full mb-6 border-4 border-yellow-900 shadow-lg" />
      <h2 className="text-4xl font-bold text-yellow-900 mb-4">{kopi.nama}</h2>
      <div className="text-yellow-800 text-lg text-center max-w-xl mb-8">Deskripsi kopi <b>{kopi.nama}</b> akan ditampilkan di sini. Silakan tambahkan detail sesuai keinginan Anda.</div>
    </div>
  );
} 