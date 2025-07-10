import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import JenisKopi from "./pages/JenisKopi";
import TentangKopi from "./pages/TentangKopi";
import DetailKopi from "./pages/DetailKopi";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import VideoPage from "./pages/VideoPage";
import CafeRecommendationPage from "./pages/CafeRecommendationPage";
import "antd/dist/reset.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import "./assets/styles/adaptive.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/jenis-kopi" element={<JenisKopi />} />
        <Route path="/jenis-kopi/:jenis" element={<DetailKopi />} />
        <Route path="/tentang-kopi" element={<TentangKopi />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/cafes" element={<CafeRecommendationPage />} />
      </Routes>
    </div>
  );
}

export default App;
