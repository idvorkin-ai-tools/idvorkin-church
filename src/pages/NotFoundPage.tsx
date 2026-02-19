import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  useDocumentTitle("Page Not Found");
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-navy-200 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-navy-900 mb-2">Page Not Found</h2>
        <p className="text-navy-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for.
          It may have been moved or no longer exists.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 text-white rounded-lg text-sm font-medium hover:bg-navy-900 transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-800 border border-navy-200 rounded-lg text-sm font-medium hover:bg-navy-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
