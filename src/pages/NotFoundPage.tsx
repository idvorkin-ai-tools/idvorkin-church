import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  useDocumentTitle("Page Not Found");
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-8xl tracking-wider text-parchment-300 mb-4">404</h1>
        <h2 className="font-heading text-2xl italic text-midnight-900 mb-3">Page Not Found</h2>
        <p className="text-midnight-500 mb-8 max-w-md mx-auto leading-relaxed">
          Sorry, we couldn&rsquo;t find the page you&rsquo;re looking for.
          It may have been moved or no longer exists.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3 bg-midnight-900 text-parchment-100 rounded-sm text-xs font-display tracking-[0.15em] uppercase hover:bg-midnight-800 transition-colors duration-300"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-7 py-3 bg-parchment-50 text-midnight-700 border border-parchment-300 rounded-sm text-xs font-display tracking-[0.15em] uppercase hover:bg-parchment-200/60 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
