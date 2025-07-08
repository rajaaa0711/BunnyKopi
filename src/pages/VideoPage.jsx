import React, { useState, useEffect } from "react";

// Semua video YouTube bertema kopi
const videos = [
  {
    id: "1",
    title: "Kontroversi, Manipulasi, Seni dan Filosofi Kopi",
    youtubeUrl: "https://youtu.be/MRMc0VjhIwk?si=HTJ7uzbQSncSybmT",
    thumbnailUrl: "https://img.youtube.com/vi/MRMc0VjhIwk/maxresdefault.jpg",
  },
  {
    id: "2",
    title: "MARI MENGENAL 4 JENIS KOPI POPULER DI DUNIA!",
    youtubeUrl: "https://youtu.be/tDqLjMps650?si=hNF2xbZ6jf1o1Qqt",
    thumbnailUrl: "https://img.youtube.com/vi/tDqLjMps650/maxresdefault.jpg",
  },
  {
    id: "3",
    title: "MARI MENGENAL 5 PROSES FERMENTASI KOPI DI DUNIA!",
    youtubeUrl: "https://youtu.be/EqpplY5UBCk?si=2Gsx9vrIAjLbyISx",
    thumbnailUrl: "https://img.youtube.com/vi/EqpplY5UBCk/maxresdefault.jpg",
  },
  {
    id: "4",
    title: "INI CARA MEMBEDAKAN KOPI PROSES NATURAL & WASHED!",
    youtubeUrl: "https://youtu.be/QGksmoZoZzU?si=fHSgTO0zlISdUcjH",
    thumbnailUrl: "https://img.youtube.com/vi/QGksmoZoZzU/maxresdefault.jpg",
  },
  {
    id: "5",
    title: "APAKAH PROSES HONEY PADA KOPI MELIBATKAN MADU?",
    youtubeUrl: "https://youtu.be/uHfR2wYi_P0?si=cMeUvlz_6VpiUawq",
    thumbnailUrl: "https://img.youtube.com/vi/uHfR2wYi_P0/maxresdefault.jpg",
  },
  {
    id: "6",
    title: "Perbedaan Kopi Robusta dan Arabica, Pecinta Kopi Wajib Tahu!",
    youtubeUrl: "https://youtu.be/T5GX8yum_Ss?si=ZbHozm7_Miw6OjVD",
    thumbnailUrl: "https://img.youtube.com/vi/T5GX8yum_Ss/maxresdefault.jpg",
  },
  {
    id: "7",
    title: "Beda Antara Espresso dengan Kopi Biasa",
    youtubeUrl: "https://youtu.be/DRho6WsSHxs?si=y9-8QSk8PDcgvK6W",
    thumbnailUrl: "https://img.youtube.com/vi/DRho6WsSHxs/maxresdefault.jpg",
  },
  {
    id: "8",
    title: "9 Jenis Kopi Yang Harus Kalian Tahu Agar Tidak Salah Pesan Di Caffe",
    youtubeUrl: "https://youtu.be/h6rAtOkg6H8?si=vp-kvnU5lAdtV3Bn",
    thumbnailUrl: "https://img.youtube.com/vi/h6rAtOkg6H8/maxresdefault.jpg",
  },
  {
    id: "9",
    title: "INI BEDANYA ESPRESSO PAKAI FULL ARABICA DAN FULL ROBUSTA!",
    youtubeUrl: "https://youtu.be/XvGfhtKfRG4?si=dddtU4A5-NFBNDlq",
    thumbnailUrl: "https://img.youtube.com/vi/XvGfhtKfRG4/maxresdefault.jpg",
  },
  {
    id: "10",
    title: "Begini Cara Nyeduh Kopi Yang Benar‼ Bikin Rasa Kopi 10x Lebih Nikmat",
    youtubeUrl: "https://youtu.be/GikDTry75qA?si=pX7hOtHv2sjFwAj7",
    thumbnailUrl: "https://img.youtube.com/vi/GikDTry75qA/maxresdefault.jpg",
  },
  {
    id: "11",
    title: "YUK LIHAT AKTIVITAS DAN BELAJAR ROASTING KOPI BERSAMA JPW COFFEE ROASTERY",
    youtubeUrl: "https://youtu.be/F7qwSKv0c40?si=H4bNPxl37zn3jsrk22",
    thumbnailUrl: "https://img.youtube.com/vi/F7qwSKv0c40/maxresdefault.jpg",
  },
  {
    id: "12",
    title: "PERBEDAAN ANTARA CAFE LATTE, CAPPUCINO, FLAT WHITE, DAN PICCOLO",
    youtubeUrl: "https://youtu.be/pYatfLpextc?si=IknbUhJ1kKLtbC2X",
    thumbnailUrl: "https://img.youtube.com/vi/pYatfLpextc/maxresdefault.jpg",
  },
];

const SearchBar = ({ value, onChange }) => (
  <div className="w-full max-w-6xl mx-auto mb-10 px-4">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Cari video kopi..."
      className="w-full px-6 py-3 rounded-full bg-white/100 backdrop-blur border border-coffee-300 text-coffee-900 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
    />
  </div>
);

const VideoCard = ({ video }) => (
  <a
    href={video.youtubeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
  >
    <img
      src={video.thumbnailUrl}
      alt={video.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-2xl md:text-2xl font-semibold text-black font-sans mb-4">
        {video.title}
      </h3>
    </div>
  </a>
);

export default function VideoPage() {
  const [search, setSearch] = useState("");
  const filtered = videos.filter((v) =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-coffee-50 font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[360px] md:h-[460px] flex items-center justify-center text-center bg-coffee-hero bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-sans drop-shadow mb-4">
               Belajar Kopi Lewat Layar
          </h1>
          <p className="text-2xl md:text-2xl text-white font-sans drop-shadow mb-4">
          Belajar kopi jadi santai, tonton step brew, kenal alat, & update tren dunia semua lewat video!
          </p>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

        {filtered.length === 0 ? (
          <p className="text-center text-coffee-700 mt-24 text-lg">Tidak ada video ditemukan</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
