import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertCircle, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <>
      <Header />

      <main className="flex-1 min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <AlertCircle className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h1 className="text-7xl sm:text-8xl font-bold text-primary mb-4">
            404
          </h1>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>

          <p className="text-lg text-muted-foreground mb-2 max-w-lg mx-auto">
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved, deleted, or you may have mistyped the URL.
          </p>

          <p className="text-sm text-muted-foreground mb-8">
            Requested path: <code className="bg-primary/10 px-3 py-1 rounded font-mono text-primary">{location.pathname}</code>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:asmaachreih@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold"
            >
              Report Issue
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
