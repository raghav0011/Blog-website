import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home/HomePage";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/register/RegisterPage";
import ContactUs from "./pages/ContactUs";
import AbouttUs from "./pages/AboutUs";
import TeamDetail from "./pages/TeamDetail/TeamDetail";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AbouttUs />} />
        <Route path="/TeamDetails" element={<TeamDetail />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
