import React, { useState, useRef } from "react";
import { Tooltip } from "antd";
import { FiEdit2, FiMapPin, FiX, FiMoreVertical } from "react-icons/fi";
import RekomendasiCafe from "../assets/images/RekomendasiCafe.png";

// Mocked user (simulate authentication)
const user = {
  id: "user123",
  username: "kopilover",
  isAuthenticated: true,
};

function StarRating({ value, onChange, readOnly = false }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`focus:outline-none ${readOnly ? "cursor-default" : "cursor-pointer"}`}
          onClick={() => !readOnly && onChange(star)}
          tabIndex={readOnly ? -1 : 0}
        >
          <svg
            className={`w-6 h-6 transition-colors duration-200 ${star <= value ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

function CafeForm({ onSubmit, initial, onClose }) {
  const [name, setName] = useState(initial?.name || "");
  const [desc, setDesc] = useState(initial?.desc || "");
  const [maps, setMaps] = useState(initial?.maps || "");
  const [rating, setRating] = useState(initial?.rating || 0);
  const [photo, setPhoto] = useState(initial?.photo || null);
  const [photoFile, setPhotoFile] = useState(null);
  const fileInput = useRef();

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !desc || !maps || !rating || !photo) return;
    onSubmit({ name, desc, maps, rating, photo, photoFile });
    if (onClose) onClose();
    setName(""); setDesc(""); setMaps(""); setRating(0); setPhoto(null); setPhotoFile(null);
    if (fileInput.current) fileInput.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 w-full max-w-md mx-auto font-poppins animate-fade-in">
      <h2 className="text-2xl font-bold text-coffee-700 mb-2">{initial ? "Edit Cafe" : "Add Cafe Recommendation"}</h2>
      <input className="border border-coffee-200 rounded-lg px-4 py-3 text-base font-poppins" placeholder="Cafe Name" value={name} onChange={e => setName(e.target.value)} required />
      <textarea className="border border-coffee-200 rounded-lg px-4 py-3 text-base font-poppins min-h-[60px]" placeholder="Short Description" value={desc} onChange={e => setDesc(e.target.value)} required />
      <input className="border border-coffee-200 rounded-lg px-4 py-3 text-base font-poppins" placeholder="Google Maps Link" value={maps} onChange={e => setMaps(e.target.value)} required />
      <div className="flex items-center gap-3">
        <span className="text-coffee-700 font-medium font-poppins">Rating:</span>
        <StarRating value={rating} onChange={setRating} />
      </div>
      <div className="flex items-center gap-4">
        <input type="file" accept="image/*" ref={fileInput} onChange={handlePhoto} className="text-base font-poppins" />
        {photo && <img src={photo} alt="Preview" className="w-16 h-16 object-cover rounded border" />}
      </div>
      <button type="submit" className="w-full mt-2 bg-coffee-600 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-coffee-700 transition-all duration-200 focus:ring-2 focus:ring-coffee-400 font-poppins">{initial ? "Update Cafe" : "Add Cafe"}</button>
      {onClose && <button type="button" onClick={onClose} className="text-sm text-coffee-500 hover:underline font-poppins">Cancel</button>}
    </form>
  );
}

function ReviewSection({ cafeId, reviews, onAdd, onDelete }) {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [menuOpenId, setMenuOpenId] = useState(null);
  const menuRef = useRef();

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpenId(null);
      }
    }
    if (menuOpenId !== null) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [menuOpenId]);

  return (
    <div className="mt-4 bg-coffee-50 rounded-2xl p-4 font-poppins">
      <h4 className="font-semibold text-coffee-700 mb-3 text-base">Reviews</h4>
      <div className="flex flex-col gap-3 mb-3">
        {reviews.length === 0 && <span className="text-coffee-400 text-sm">No reviews yet.</span>}
        {reviews.map((r) => (
          <div key={r.id} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow text-base relative">
            <span className="font-bold text-coffee-600 text-sm mr-2">{r.username}</span>
            {editId === r.id ? (
              <>
                <input
                  className="flex-1 border border-coffee-200 rounded-lg px-3 py-2 text-base font-poppins mr-2"
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                  autoFocus
                />
                <button
                  className="bg-coffee-600 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-coffee-700 transition-all mr-2"
                  onClick={() => { if (editText.trim()) { onAdd(editText, r.id); setEditId(null); } }}
                >Save</button>
                <button
                  className="bg-gray-200 text-coffee-700 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-all"
                  onClick={() => setEditId(null)}
                >Cancel</button>
              </>
            ) : (
              <>
                <span className="text-gray-700 text-base flex-1">{r.text}</span>
                {user.id === r.authorId && (
                  <div className="relative" ref={menuRef}>
                    <button
                      className="p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer focus:outline-none"
                      onClick={() => setMenuOpenId(menuOpenId === r.id ? null : r.id)}
                      aria-label="Review options"
                    >
                      <FiMoreVertical size={18} />
                    </button>
                    {menuOpenId === r.id && (
                      <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg py-1 w-36 z-30 animate-fade-in">
                        <button
                          className="w-full text-left px-4 py-2 text-sm text-coffee-700 hover:bg-gray-100 transition-all cursor-pointer"
                          onClick={() => { setEditId(r.id); setEditText(r.text); setMenuOpenId(null); }}
                        >Edit Review</button>
                        <button
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-all cursor-pointer"
                          onClick={() => { onDelete(r.id); setMenuOpenId(null); }}
                        >Delete Review</button>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={e => { e.preventDefault(); if (text.trim()) { onAdd(text); setText(""); } }} className="flex flex-row gap-2 mt-2 items-center">
        <input className="flex-1 border border-coffee-200 rounded-lg px-4 py-3 text-base font-poppins" placeholder="Add a review..." value={text} onChange={e => setText(e.target.value)} />
        <button type="submit" className="bg-coffee-600 text-white px-4 py-2 rounded-lg text-base font-semibold hover:bg-coffee-700 focus:ring-2 focus:ring-coffee-400 transition-all font-poppins">Post</button>
      </form>
    </div>
  );
}

function CafeCard({ cafe, onEdit, onAddReview, onDeleteReview }) {
  return (
    <div className="relative bg-white rounded-3xl shadow-lg border border-[#ede0d1] p-7 flex flex-col justify-between min-h-[480px] transition-all duration-300 hover:shadow-2xl animate-fade-in group overflow-hidden">
      {/* Edit button (top-right, compact, dark brown) */}
      {user.id === cafe.creatorId && (
        <Tooltip title="Edit this cafe" placement="left">
          <button
            onClick={onEdit}
            className="absolute top-4 right-4 bg-coffee-700 text-white p-2 rounded-full border-2 border-white shadow-lg z-20 hover:bg-coffee-800 focus:ring-2 focus:ring-coffee-400 transition-all"
            aria-label="Edit this cafe"
          >
            <FiEdit2 size={18} />
          </button>
        </Tooltip>
      )}
      {/* Cafe image */}
      <div className="relative mb-5">
        <img src={cafe.photo} alt={cafe.name} className="w-full h-48 object-cover rounded-2xl shadow-sm" />
        {/* Open in Maps button */}
        <a
          href={cafe.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 right-2 bg-coffee-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow hover:bg-coffee-700 transition-all z-10"
        >
          <FiMapPin className="inline-block" />
          Open in Maps
        </a>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-extrabold text-coffee-700 mb-2 leading-tight">{cafe.name}</h3>
          <div className="mb-2 flex items-center gap-2">
            <StarRating value={cafe.rating} readOnly />
          </div>
          <p className="text-base text-coffee-500 mb-4 leading-relaxed">{cafe.desc}</p>
        </div>
        <ReviewSection cafeId={cafe.id} reviews={cafe.reviews} onAdd={onAddReview} onDelete={onDeleteReview} />
      </div>
    </div>
  );
}

export default function CafeRecommendationPage() {
  const [cafes, setCafes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editCafe, setEditCafe] = useState(null);

  const handleCafeSubmit = (data) => {
    if (editCafe) {
      setCafes((prev) => prev.map((c) => c.id === editCafe.id ? { ...c, ...data, creatorId: user.id, id: c.id } : c));
      setEditCafe(null);
    } else {
      setCafes((prev) => [{ ...data, id: Date.now().toString(), creatorId: user.id, reviews: [] }, ...prev]);
    }
    setShowForm(false);
  };

  const handleAddReview = (cafeId, text, editId = null) => {
    setCafes((prev) =>
      prev.map((c) =>
        c.id === cafeId
          ? {
              ...c,
              reviews: editId
                ? c.reviews.map((r) => r.id === editId ? { ...r, text } : r)
                : [
                    ...c.reviews,
                    {
                      id: Date.now().toString(),
                      username: user.username,
                      authorId: user.id,
                      text,
                    },
                  ],
          }
        : c
      )
    );
  };

  const handleDeleteReview = (cafeId, reviewId) => {
    setCafes((prev) => prev.map((c) => c.id === cafeId ? { ...c, reviews: c.reviews.filter((r) => r.id !== reviewId) } : c));
  };

  if (!user.isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-coffee-50">
        <div className="bg-white rounded-xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-coffee-700">Please log in to access cafe recommendations.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-coffee-100 to-white font-poppins">
      {/* Header with background image */}
      <div className="relative w-full h-[260px] md:h-[340px] flex items-center justify-center mb-10">
        <img
          src={RekomendasiCafe}
          alt="Cafe Recommendation Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.55) blur(0px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">Ngopi Di Mana Hari Ini?</h1>
          <p className="text-lg md:text-2xl text-[#ffe9a7] font-medium drop-shadow max-w-2xl mx-auto"><span className="font-semibold text-white"></span>Cari tempat ngopi cozy? Lihat rekomendasi, kasih review, & share spot favoritmu biar makin banyak yang tahu!</p>
        </div>
      </div>
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-coffee-800 text-center sm:text-left flex-1">Spot Favorit Kamu</h2>
          <button
            onClick={() => { setShowForm(true); setEditCafe(null); }}
            className="bg-coffee-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-coffee-700 transition-all duration-200 focus:ring-2 focus:ring-coffee-400 w-full sm:w-auto sm:ml-4"
          >
            + Tambah Cafe
          </button>
        </div>
        {showForm && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
            <CafeForm onSubmit={handleCafeSubmit} initial={editCafe} onClose={() => { setShowForm(false); setEditCafe(null); }} />
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-12">
          {cafes.length === 0 && <div className="col-span-full text-center text-coffee-400 py-10">Belum ada nih. Yuk, isi dengan tempat ngopi kesukaanmu!</div>}
          {cafes.map((cafe) => (
            <CafeCard
              key={cafe.id}
              cafe={cafe}
              onEdit={() => { if (user.id === cafe.creatorId) { setEditCafe(cafe); setShowForm(true); } }}
              onAddReview={(text) => handleAddReview(cafe.id, text)}
              onDeleteReview={(reviewId) => handleDeleteReview(cafe.id, reviewId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
