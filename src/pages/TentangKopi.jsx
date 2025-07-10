import React, { useState } from "react";

// Daftar artikel tentang kopi
const articles = [
  {
    id: "1",
    title: "History of Coffee – National Coffee Association",
    url: "https://www.ncausa.org/About-Coffee/History-of-Coffee",
    thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    description: "Telusuri asal-usul kopi dari Ethiopia hingga menjadi minuman yang mendunia."
  },
  {
    id: "2",
    title: "Produksi Kopi Indonesia – Badan Pusat Statistik",
    url: "https://www.bps.go.id/indicator/55/1425/1/produksi-kopi.html",
    thumbnail: "https://images.unsplash.com/photo-1613470208960-5eab1d1c7e0c?auto=format&fit=crop&w=800&q=80",
    description: "Data resmi mengenai produksi kopi nasional dan distribusinya."
  },
  {
    id: "3",
    title: "13 Manfaat Minum Kopi untuk Kesehatan – Healthline",
    url: "https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee",
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description: "Berbagai manfaat kopi yang terbukti secara ilmiah untuk kesehatan tubuh."
  },
  {
    id: "4",
    title: "Coffee Review: Rating dan Ulasan Kopi Terbaik",
    url: "https://www.coffeereview.com/",
    thumbnail: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    description: "Review mendalam tentang kopi dari berbagai penjuru dunia."
  },
  {
    id: "5",
    title: "Perbedaan Kopi Arabika dan Robusta – JPW Coffee",
    url: "https://www.jpwcoffee.com/perbedaan-kopi-arabika-dan-robusta/",
    thumbnail: "https://images.unsplash.com/photo-1535141192574-5b7857c39b8e?auto=format&fit=crop&w=800&q=80",
    description: "Kenali perbedaan rasa, aroma, dan karakteristik Arabika & Robusta."
  },
  {
    id: "6",
    title: "Kopi Luwak: Antara Eksklusivitas dan Kontroversi",
    url: "https://www.coffeehunter.com/kopi-luwak-guide/",
    thumbnail: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=800&q=80",
    description: "Fakta menarik dan sisi kontroversial kopi luwak dari Indonesia."
  },
  {
    id: "7",
    title: "Sejarah Kopi di Indonesia dari Zaman Belanda",
    url: "https://indonesiabaik.id/infografis/sejarah-kopi-di-indonesia",
    thumbnail: "https://images.unsplash.com/photo-1604882732116-e40c2f30a703?auto=format&fit=crop&w=800&q=80",
    description: "Bagaimana kopi diperkenalkan ke Indonesia dan berkembang pesat."
  },
  {
    id: "8",
    title: "Panduan Seduh Kopi Manual (V60, French Press, dsb.)",
    url: "https://www.perfectdailygrind.com/2017/09/the-ultimate-guide-to-manual-brewing-coffee/",
    thumbnail: "https://images.unsplash.com/photo-1583511655826-05700d52f4b3?auto=format&fit=crop&w=800&q=80",
    description: "Langkah-langkah menyeduh kopi secara manual untuk hasil optimal."
  },
  {
    id: "9",
    title: "Kopi dalam Budaya dan Filosofi Masyarakat Dunia",
    url: "https://www.npr.org/sections/thesalt/2013/07/05/198535220/coffee-culture",
    thumbnail: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=80",
    description: "Peran kopi dalam tradisi, budaya, dan filosofi di berbagai negara."
  },
  {
    id: "10",
    title: "Tips Memilih Biji Kopi Berkualitas untuk Pemula",
    url: "https://beanbox.com/blog/coffee-bean-guide",
    thumbnail: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    description: "Panduan untuk memilih biji kopi sesuai selera dan kebutuhanmu."
  },
];

const SearchBar = ({ value, onChange }) => (
  <div className="w-full max-w-6xl mx-auto mb-10 px-4">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Cari artikel tentang kopi..."
      className="w-full px-6 py-3 rounded-full bg-white/100 border border-gray-300 text-gray-800 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
  </div>
);

const ArticleCard = ({ article }) => (
  <a
    href={article.url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex flex-col"
  >
    <img
      src={article.thumbnail}
      alt={article.title}
      className="w-full h-52 object-cover"
    />
    <div className="p-5 flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {article.description}
        </p>
      </div>
      <div className="mt-4 text-sm text-yellow-700 font-medium">Baca selengkapnya →</div>
    </div>
  </a>
);

export default function ArtikelKopiPage() {
  const [search, setSearch] = useState("");
  const filtered = articles.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-yellow-50 font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[360px] md:h-[460px] flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow mb-4">
            Baca & Pahami Kopi
          </h1>
          <p className="text-2xl md:text-xl drop-shadow mb-4">
            Temukan berbagai artikel seputar kopi: sejarah, manfaat, budaya, dan tren terkini.
          </p>
        </div>
      </section>

      {/* ARTICLE SECTION */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

        {filtered.length === 0 ? (
          <p className="text-center text-gray-700 mt-24 text-lg">Tidak ada artikel ditemukan.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
