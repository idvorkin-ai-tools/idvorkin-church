import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { InfoBanner } from "./InfoBanner";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export function Layout() {
  useScrollToTop();
  return (
    <div className="min-h-screen flex flex-col bg-navy-50">
      <InfoBanner />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
