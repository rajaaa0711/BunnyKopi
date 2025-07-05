export default function TentangKopi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-50 flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-6">Tentang Kopi</h2>
      <div className="max-w-3xl bg-white rounded-lg shadow-lg p-8 border-2 border-yellow-200">
        <h3 className="text-2xl font-semibold text-yellow-800 mb-2">Sejarah Kopi</h3>
        <p className="mb-4 text-yellow-900">
          Kopi pertama kali ditemukan di Ethiopia dan menyebar ke seluruh dunia melalui perdagangan Arab. Kini, kopi menjadi salah satu minuman paling populer di dunia.
        </p>
        <h3 className="text-2xl font-semibold text-yellow-800 mb-2">Manfaat Kopi</h3>
        <ul className="list-disc pl-6 mb-4 text-yellow-900">
          <li>Meningkatkan energi dan konsentrasi</li>
          <li>Mengandung antioksidan</li>
          <li>Dapat meningkatkan suasana hati</li>
        </ul>
        <h3 className="text-2xl font-semibold text-yellow-800 mb-2">Fakta Menarik</h3>
        <p className="text-yellow-900">
          Indonesia adalah salah satu produsen kopi terbesar di dunia, dengan berbagai jenis kopi khas dari setiap daerah.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
        alt="Coffee Shop"
        className="rounded-lg shadow-lg w-full max-w-md mt-8 border-4 border-yellow-900"
      />
    </div>
  );
} 