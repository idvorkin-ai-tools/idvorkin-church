import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  useDocumentTitle("Page Not Found");
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-8xl font-bold text-cloud-300 mb-4">404</h1>
        <h2 className="font-display text-2xl font-bold text-ink-900 mb-3">Page Not Found</h2>
        <p className="text-ink-500 mb-8 max-w-md mx-auto leading-relaxed">
          Sorry, we couldn&rsquo;t find the page you&rsquo;re looking for.
          It may have been moved or no longer exists.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-iris-500 text-white rounded-full text-sm font-semibold hover:bg-iris-600 active:scale-[0.97] transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ink-700 border border-cloud-300 rounded-full text-sm font-semibold hover:bg-cloud-50 active:scale-[0.97] transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
