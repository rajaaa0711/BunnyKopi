import { useParams, Link } from "react-router-dom";
import KintamaniImg from "../assets/images/Kintamani.png";
import RobustaImg from "../assets/images/Robusta.png";
import NaturalImg from "../assets/images/Natural1.png";
import LuwakImg from "../assets/images/LUWAK.png";

const dataKopi = {
  arabika: {
    nama: "Kopi Kintamani – Arabika Premium dari Dataran Tinggi Bali",
    gambar: KintamaniImg,
    detail: (
      <>
        <p className="mb-4 text-base md:text-lg leading-relaxed text-yellow-900 font-normal">
          Kopi Kintamani adalah salah satu kopi spesialti terbaik dari Indonesia yang berasal dari daerah Kintamani, Kabupaten Bangli, Bali. Kopi ini ditanam di ketinggian 1.200–1.500 meter di atas permukaan laut, tepat di lereng Gunung Batur yang memiliki tanah vulkanik subur dan iklim sejuk sepanjang tahun — kondisi ideal untuk pertumbuhan kopi Arabika berkualitas tinggi.
        </p>
        <p className="mb-4 text-base md:text-lg leading-relaxed text-yellow-900 font-normal">
          Yang membuat Kopi Kintamani begitu istimewa adalah sistem pertanian <span className="font-semibold text-yellow-700">tumpang sari</span>, di mana kopi ditanam berdampingan dengan tanaman jeruk dan rempah. Hal ini memberikan karakter <span className="font-semibold text-yellow-700">rasa citrus yang segar, aroma floral, dan body yang ringan</span>. Tidak hanya itu, petani di Kintamani umumnya menggunakan sistem organik tanpa bahan kimia, menjaga kemurnian rasa dan ramah lingkungan.
        </p>
        <p className="mb-4 text-base md:text-lg leading-relaxed text-yellow-900 font-normal">
          Kopi ini diolah menggunakan proses <span className="font-semibold text-yellow-700">washed (basah)</span>, yang membuat cita rasanya bersih, kompleks, dan sangat cocok untuk penyeduhan manual seperti pour over atau V60. Kopi Kintamani telah mendapat <span className="font-semibold text-yellow-700">sertifikat Indikasi Geografis (IG)</span> dan dikenal di pasar ekspor, terutama ke Jepang, Amerika, dan Eropa.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded mb-2">
          <span className="font-bold text-yellow-800">Cita rasa khas:</span> asam jeruk segar, manis alami, body ringan, aftertaste bersih.
        </div>
      </>
    ),
  },
  robusta: {
    nama: "Kopi Robusta Pupuan – Kekayaan Rasa dari Bali Barat",
    gambar: RobustaImg,
    detail: (
      <>
        <p className="mb-4 text-base md:text-lg leading-relaxed text-yellow-900 font-normal">
          Berbeda dari Kintamani yang terkenal dengan Arabika-nya, kawasan Pupuan di Kabupaten Tabanan menghasilkan <span className="font-semibold text-yellow-700">kopi Robusta</span> berkualitas tinggi. Tumbuh di ketinggian sekitar 600–900 meter di atas permukaan laut, kopi ini menikmati curah hujan tinggi dan tanah yang kaya mineral, menghasilkan biji kopi yang tebal dan kaya rasa.
        </p>
        <p className="mb-4 text-base md:text-lg leading-relaxed text-yellow-900 font-normal">
          Robusta Pupuan dikenal dengan <span className="font-semibold text-yellow-700">cita rasa yang bold (kuat), pahit yang khas, dengan sedikit rasa coklat pahit atau kayu</span>, dan kandungan kafein yang lebih tinggi dibanding Arabika. Cocok untuk penikmat kopi sejati yang menyukai sensasi kuat, dan biasa digunakan sebagai campuran espresso atau kopi tubruk.
        </p>
        <p className="mb-4 text-base md:text-lg leading-relaxed text-yellow-900 font-normal">
          Menariknya, kopi dari Pupuan seringkali melalui proses <span className="font-semibold text-yellow-700">semi-washed atau full natural</span>, memberikan karakter rasa yang lebih dalam dan earthy. Kopi ini juga menjadi pilihan banyak warung kopi lokal Bali dan perlahan mulai menembus pasar domestik dan mancanegara.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded mb-2">
          <span className="font-bold text-yellow-800">Cita rasa khas:</span> pahit pekat, aroma kayu/coklat, body full, kafein tinggi.
        </div>
      </>
    ),
  },
  liberika: {
    nama: "Kopi Bali Natural – Proses Tradisional dengan Rasa Penuh Kejutan",
    gambar: NaturalImg,
    detail: (
      <>
        <p className="mb-4 text-base md:text-lg leading-relaxed text-yellow-900 font-normal">
          Kopi Bali Natural bukan nama jenis kopi tertentu, melainkan menunjuk pada <span className="font-semibold text-yellow-700">metode pengolahan biji kopi secara alami (natural/dry process)</span>, yang banyak digunakan oleh petani di beberapa wilayah Bali seperti Kintamani, Bangli, dan Karangasem.
        </p>
        <p className="mb-4 text-base md:text-lg leading-relaxed text-yellow-900 font-normal">
          Pada proses ini, buah kopi dijemur <span className="font-semibold text-yellow-700">bersama kulit dan daging buahnya</span> tanpa melalui pencucian. Proses fermentasi alami ini berlangsung selama beberapa hari hingga minggu, memberikan biji kopi karakter yang sangat berbeda dari proses basah: <span className="font-semibold text-yellow-700">aroma fruity yang kompleks, rasa manis seperti wine atau berry, dan body yang lebih tebal</span>.
        </p>
        <p className="mb-4 text-base md:text-lg leading-relaxed text-yellow-900 font-normal">
          Kopi Bali yang diproses secara natural umumnya digunakan untuk pasar specialty coffee, di mana penikmat kopi benar-benar menghargai kompleksitas rasa dan aroma yang muncul dari fermentasi alami ini. Jenis ini juga sering dijadikan andalan dalam kompetisi barista dan cupping.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded mb-2">
          <span className="font-bold text-yellow-800">Cita rasa khas:</span> fruity (beri, anggur), manis fermentasi, body heavy, aftertaste lama.
        </div>
      </>
    ),
  },
  luwak: {
    nama: "Kopi Luwak – Eksklusivitas dari Alam Indonesia",
    gambar: LuwakImg,
    detail: (
      <>
        <p className="mb-4 text-base md:text-lg leading-relaxed text-yellow-900 font-normal">
          Kopi luwak adalah salah satu kopi paling eksklusif dan bernilai tinggi di dunia. Proses uniknya dimulai saat luwak (sejenis musang) memilih dan memakan buah kopi terbaik. Di dalam sistem pencernaannya, biji kopi mengalami fermentasi alami, lalu dikeluarkan dalam keadaan utuh. Biji ini kemudian dikumpulkan, dibersihkan, dikeringkan, dan dipanggang secara khusus oleh para petani terlatih.
        </p>
        <p className="mb-4 text-base md:text-lg leading-relaxed text-yellow-900 font-normal">
          Proses ini menghasilkan rasa kopi yang lembut, bersih, dan kompleks, dengan tingkat keasaman rendah serta aroma yang khas dan unik. Tidak seperti kopi biasa, kopi luwak memiliki karakter yang lebih halus dan mendalam karena proses fermentasinya yang alami. Jumlahnya yang terbatas membuatnya menjadi kopi istimewa yang sangat dihargai oleh para pecinta kopi premium di seluruh dunia.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded mb-2">
          <span className="font-bold text-yellow-800">Cita rasa khas:</span> Kopi luwak memiliki cita rasa yang sangat halus, earthy (beraroma tanah), sedikit manis, dan rendah keasaman.
        </div>
      </>
    ),
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-yellow-100 py-16 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center border-2 border-yellow-200 max-w-2xl w-full">
        <img src={kopi.gambar} alt={kopi.nama} className="w-44 h-44 md:w-56 md:h-56 object-cover rounded-full mb-6 border-4 border-yellow-900 shadow-lg" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-900 mb-6 text-center font-poppins tracking-tight drop-shadow-lg">
          {kopi.nama}
        </h2>
        <div className="text-yellow-900 text-base md:text-lg text-justify font-poppins leading-relaxed">
          {kopi.detail}
        </div>
        <Link to="/jenis-kopi" className="mt-8">
          <button className="bg-[#FFD966] text-[#4B2E19] font-bold px-8 py-2 rounded-full font-poppins shadow hover:bg-[#fff8f0] transition-all duration-200 text-lg">Kembali ke Jenis Kopi</button>
        </Link>
      </div>
    </div>
  );
} 