import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactBtnRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation(); // ✅ NEW

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const toggleContact = () => {
    setIsContactOpen((v) => !v);
    setIsMenuOpen(false);
  };

  const closeContact = () => {
    setIsContactOpen(false);
    setTimeout(() => contactBtnRef.current?.focus(), 0);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setIsContactOpen(false);
    setTimeout(() => contactBtnRef.current?.focus(), 0);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContact();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
  ];

  const whatsappNumber = "76371425";
  const whatsappLink = `https://wa.me/961${whatsappNumber}`;
  const email = "asmaachreih@gmail.com";

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10 shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              onClick={handleNavClick}
              className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/80 transition"
            >
              <img
                src="/logoooo.jpeg"
                alt="Asmaa Shreih"
                className="w-8 h-8 rounded-full object-cover border border-primary/20"
              />
              <span>Asmaa</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleNavClick}
                    className={`relative text-sm font-medium transition-colors
                      ${
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }
                      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                      after:bg-primary after:transition-transform after:duration-300
                      ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
                      hover:after:scale-x-100
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex">
              <button
                ref={contactBtnRef}
                type="button"
                onClick={toggleContact}
                className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg
                hover:shadow-lg hover:scale-105 active:scale-[0.97] transition-all font-medium"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-primary/10 space-y-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleNavClick}
                    className={`block px-4 py-2 rounded-lg font-medium transition
                      ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-primary/10"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <button
                type="button"
                onClick={toggleContact}
                className="block w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium"
              >
                Get in Touch
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Overlay */}
      {isContactOpen && (
        <button
          type="button"
          onClick={closeContact}
          className="fixed inset-0 z-40 bg-black/30"
          aria-label="Close contact panel"
        />
      )}

      {/* Contact Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[320px] max-w-[85vw] bg-white border-r border-primary/10 shadow-2xl
        transform transition-transform duration-300
        ${isContactOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-16 px-4 flex items-center justify-between border-b border-primary/10">
          <h2 className="font-semibold">Contact</h2>
          <button onClick={closeContact} className="p-2 hover:bg-primary/10 rounded-md">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeContact}
            className="flex items-center gap-3 p-4 rounded-xl border hover:bg-primary/5 transition"
          >
            <MessageCircle className="text-primary" />
            <span>+961 {whatsappNumber}</span>
          </a>

          <a
            href={`mailto:${email}`}
            onClick={closeContact}
            className="flex items-center gap-3 p-4 rounded-xl border hover:bg-primary/5 transition"
          >
            <Mail className="text-primary" />
            <span>{email}</span>
          </a>
        </div>
      </aside>
    </>
  );
}

