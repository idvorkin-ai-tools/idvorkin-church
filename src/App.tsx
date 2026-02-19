import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { WorshipPage } from "./pages/WorshipPage";
import { MinistriesPage } from "./pages/MinistriesPage";
import { CommunityPage } from "./pages/CommunityPage";
import { GivePage } from "./pages/GivePage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/worship" element={<WorshipPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/give" element={<GivePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
