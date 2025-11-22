import React, { useState, useEffect } from "react";
import { Heart, Menu, X, User } from "lucide-react";

const StickyNav = ({ sections = [], onOpenCoupleDashboard }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Détecter la section active
      const sections = document.querySelectorAll("section[id], div[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const defaultSections = [
    { id: "hero", label: "Accueil" },
    { id: "timeline-section", label: "Notre Histoire" },
    { id: "invitations-section", label: "Invitations" },
    { id: "future-sections", label: "À Venir" },
  ];

  const navSections = sections.length > 0 ? sections : defaultSections;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 xs:h-18 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 xs:gap-3">
            <Heart className="w-5 h-5 xs:w-6 xs:h-6 text-amber-500" />
            <span
              className={`font-serif text-lg xs:text-xl sm:text-2xl font-bold transition-colors ${
                isScrolled ? "text-amber-800" : "text-white"
              }`}
            >
              Emma & Louis
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`font-medium text-sm lg:text-base transition-colors relative ${
                  isScrolled
                    ? activeSection === section.id
                      ? "text-amber-600"
                      : "text-gray-700 hover:text-amber-600"
                    : activeSection === section.id
                    ? "text-amber-300"
                    : "text-white/90 hover:text-amber-300"
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500" />
                )}
              </button>
            ))}
            {/* Bouton Espace Marié - Desktop */}
            {onOpenCoupleDashboard && (
              <button
                onClick={onOpenCoupleDashboard}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm lg:text-base transition-all ${
                  isScrolled
                    ? "bg-amber-500 text-white hover:bg-amber-600"
                    : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                }`}
              >
                <User className="w-4 h-4" />
                Espace Marié
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200/50">
            <div className="flex flex-col gap-2 mt-4">
              {navSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? activeSection === section.id
                        ? "bg-amber-50 text-amber-600"
                        : "text-gray-700 hover:bg-gray-50"
                      : activeSection === section.id
                      ? "bg-white/10 text-amber-300"
                      : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  {section.label}
                </button>
              ))}
              {/* Bouton Espace Marié - Mobile */}
              {onOpenCoupleDashboard && (
                <button
                  onClick={() => {
                    onOpenCoupleDashboard();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    isScrolled
                      ? "bg-amber-500 text-white hover:bg-amber-600"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <User className="w-4 h-4" />
                  Accéder à mon espace marié
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default StickyNav;

