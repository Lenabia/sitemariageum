import React, { useState, useEffect } from "react";

import {
  Heart,
  Baby,
  Sparkles,
  ArrowRight,
  Camera,
  Video,
  BookOpen,
} from "lucide-react";

// Importez votre image de fond ici
import couplePhoto from "../assets/images/photowedding.webp";
import InvitationsSection from "./InvitationsSection";
import StoryModal from "./StoryModal";
import PhotoGallery from "./PhotoGallery";
import VideoModal from "./VideoModal";
import Countdown from "./Countdown";
import StickyNav from "./StickyNav";
import ScrollToTop from "./ScrollToTop";
import ScrollProgress from "./ScrollProgress";
import ScrollReveal from "./ScrollReveal";
import PricingSection from "./PricingSection";
import BioSection from "./BioSection";
import CoupleSpace from "./CoupleSpace";

const WeddingSite = () => {
  const [doorsOpen, setDoorsOpen] = useState(false);

  const [showContent, setShowContent] = useState(false);

  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(false);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const [showCoupleSpace, setShowCoupleSpace] = useState(false);

  useEffect(() => {
    if (doorsOpen) {
      setTimeout(() => setShowContent(true), 2500);
    }
  }, [doorsOpen]);

  const handleOpenDoors = () => {
    setDoorsOpen(true);
  };

  // Détection du scroll pour la section Timeline
  useEffect(() => {
    if (!showContent) return;

    const timelineSection = document.getElementById("timeline-section");
    if (!timelineSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTimelineVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Se déclenche quand 20% de la section est visible
        rootMargin: "0px",
      }
    );

    observer.observe(timelineSection);

    return () => {
      if (timelineSection) {
        observer.unobserve(timelineSection);
      }
    };
  }, [showContent]);

  if (!showContent) {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background Image */}

        <div
          className={`absolute inset-0 transition-all duration-[4000ms] ${
            doorsOpen ? "scale-110 blur-sm" : "scale-100"
          }`}
          style={{
            backgroundImage: `url(${couplePhoto})`,

            backgroundSize: "cover",

            backgroundPosition: "center",
          }}
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black bg-opacity-30" />

        {/* Door Container */}

        <div className="absolute inset-0" style={{ perspective: "2000px" }}>
          {/* Left Door */}

          <div
            className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-r-2 border-amber-400 transition-all duration-[4000ms] origin-left ${
              doorsOpen ? "opacity-0" : "opacity-100"
            }`}
            style={{
              transform: doorsOpen ? "rotateY(-100deg)" : "rotateY(0deg)",

              boxShadow: "4px 0 30px rgba(0,0,0,0.8)",
            }}
          >
            {/* Door Handle */}

            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-20 h-2 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full shadow-lg" />

            {/* Decorative Pattern */}

            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)",
              }}
            />
          </div>

          {/* Right Door */}

          <div
            className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-900 via-gray-800 to-gray-900 border-l-2 border-amber-400 transition-all duration-[4000ms] origin-right ${
              doorsOpen ? "opacity-0" : "opacity-100"
            }`}
            style={{
              transform: doorsOpen ? "rotateY(100deg)" : "rotateY(0deg)",

              boxShadow: "-4px 0 30px rgba(0,0,0,0.8)",
            }}
          >
            {/* Door Handle */}

            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-20 h-2 bg-gradient-to-l from-amber-300 to-amber-500 rounded-full shadow-lg" />

            {/* Decorative Pattern */}

            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)",
              }}
            />
          </div>

          {/* Center Line */}

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent" />
        </div>

        {/* Content */}

        {!doorsOpen && (
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
            <h1
              className="font-serif text-3xl xs:text-4xl xs2:text-5xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 tracking-wider text-amber-100 text-center"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
            >
              Emma & Louis
            </h1>

            <div className="flex items-center gap-2 xs:gap-3 xs2:gap-4 sm:gap-4 mb-6 xs2:mb-7 sm:mb-8">
              <div className="h-px w-6 xs:w-8 xs2:w-12 sm:w-16 bg-gradient-to-r from-transparent to-amber-400" />

              <Heart className="w-4 h-4 xs:w-5 xs:h-5 xs2:w-6 xs2:h-6 sm:w-6 sm:h-6 text-amber-400" />

              <div className="h-px w-6 xs:w-8 xs2:w-12 sm:w-16 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <p className="text-base xs:text-lg xs2:text-xl sm:text-xl md:text-2xl mb-6 xs2:mb-8 sm:mb-12 text-amber-100 font-light tracking-wide text-center px-4">
              Notre Histoire
            </p>

            <button
              onClick={handleOpenDoors}
              className="group px-5 xs:px-6 xs2:px-8 sm:px-10 py-2.5 xs:py-3 xs2:py-3.5 sm:py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 rounded-full font-semibold text-sm xs:text-base xs2:text-base sm:text-lg hover:from-amber-300 hover:to-amber-400 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:scale-105"
            >
              <span className="flex items-center gap-2 xs:gap-2.5 xs2:gap-3 sm:gap-3">
                <span className="hidden xs2:inline sm:inline">
                  Entrer dans notre univers
                </span>
                <span className="xs2:hidden">Entrer</span>
                <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 xs2:w-5 xs2:h-5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // Si l'espace marié est ouvert, afficher uniquement cette page
  if (showCoupleSpace) {
    return <CoupleSpace onBackToSite={() => setShowCoupleSpace(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50 to-rose-50 overflow-x-hidden w-full max-w-full">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Navigation */}
      {showContent && (
        <StickyNav onOpenCoupleDashboard={() => setShowCoupleSpace(true)} />
      )}

      {/* Scroll to Top Button */}
      {showContent && <ScrollToTop />}

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{
            backgroundImage: `url(${couplePhoto})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center text-white px-3 xs:px-4">
          <h1
            className="font-serif text-3xl xs:text-4xl xs2:text-5xl sm:text-6xl md:text-7xl lg:text-9xl mb-3 xs:mb-4 xs2:mb-5 sm:mb-6 tracking-wider text-amber-100 animate-fade-in"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
          >
            Emma & Louis
          </h1>

          <p className="text-base xs:text-lg xs2:text-xl sm:text-xl md:text-2xl lg:text-3xl text-amber-200 font-light mb-3 xs2:mb-4 opacity-0 animate-fade-in-delayed">
            Une histoire d'amour
          </p>

          {/* Compte à rebours */}
          <div
            className="opacity-0 animate-fade-in-delayed"
            style={{ animationDelay: "0.8s" }}
          >
            <Countdown targetDate="2026-07-25T00:00:00" />
          </div>

          <div className="flex items-center justify-center gap-1.5 xs:gap-2 xs2:gap-3 sm:gap-4 mt-5 xs:mt-6 xs2:mt-7 sm:mt-8">
            <div className="h-px w-8 xs:w-10 xs2:w-16 sm:w-24 bg-gradient-to-r from-transparent to-amber-400" />

            <Heart className="w-5 h-5 xs:w-6 xs:h-6 xs2:w-7 xs2:h-7 sm:w-8 sm:h-8 text-amber-400 animate-pulse" />

            <div className="h-px w-8 xs:w-10 xs2:w-16 sm:w-24 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        {/* Scroll Indicator */}

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="text-sm text-amber-200 mb-2">
            Scrollez et Découvrez notre voyage
          </div>

          <div className="w-6 h-10 border-2 border-amber-400 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline-section"
        className="relative py-10 xs:py-12 xs2:py-14 sm:py-16 md:py-20 bg-gradient-to-b from-stone-100 via-amber-50 to-stone-100 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-3 xs:px-4 xs2:px-5 sm:px-6">
          <div
            className={`text-center mb-6 xs:mb-8 xs2:mb-10 sm:mb-12 md:mb-16 transition-all duration-2500 ease-out ${
              isTimelineVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-serif text-2xl xs:text-3xl xs2:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-800 mb-2 xs:mb-3 xs2:mb-3 sm:mb-4">
              Le Film de Notre Vie
            </h2>

            <p className="text-base xs:text-lg xs2:text-xl sm:text-xl md:text-2xl text-stone-700 mb-8 xs:mb-10 max-w-2xl mx-auto leading-relaxed">
              Découvrez notre histoire, de nos premiers pas individuels jusqu'à
              notre union éternelle
            </p>

            <div className="flex flex-col items-center gap-4 xs:gap-5 xs2:gap-6">
              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="group relative mx-auto cursor-pointer transition-all duration-300 hover:scale-105"
              >
                {/* Cadre photo élégant */}
                <div className="relative w-48 h-64 xs:w-56 xs:h-72 xs2:w-64 xs2:h-80 sm:w-72 sm:h-96 rounded-xl xs:rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-amber-500/50 border-4 border-amber-300/80 group-hover:border-amber-400 transition-all duration-300">
                  {/* Image de fond */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        "url(https://plus.unsplash.com/premium_photo-1762551748542-88bc49a8fea0?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                    }}
                  />

                  {/* Overlay gradient pour la lisibilité du texte */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 group-hover:from-black/30 group-hover:via-black/20 group-hover:to-black/50 transition-all duration-300" />

                  {/* Contenu avec bouton */}
                  <div className="relative h-full flex flex-col items-center justify-end p-4 xs:p-5 xs2:p-6 pb-6 xs:pb-7 xs2:pb-8">
                    {/* Bouton cliquable */}
                    <button className="w-full px-4 xs:px-5 xs2:px-6 sm:px-8 py-2.5 xs:py-3 xs2:py-3.5 sm:py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-white rounded-full font-serif font-bold text-sm xs:text-base xs2:text-lg sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group-hover:shadow-amber-500/50 animate-elegant-pulse">
                      <span className="flex items-center justify-center gap-2 xs:gap-3">
                        Découvrir Notre Histoire
                        <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 xs2:w-5 xs2:h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>

                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Bordure décorative intérieure */}
                  <div className="absolute inset-2 xs:inset-3 border-2 border-white/30 rounded-lg xs:rounded-xl pointer-events-none" />
                </div>
              </button>

              {/* Cards Galerie et Vidéo */}
              <div className="flex flex-col xs2:flex-row gap-4 xs:gap-5 xs2:gap-6 sm:gap-8 items-center w-full max-w-4xl mx-auto">
                {/* Card Galerie de photos */}
                <button
                  onClick={() => setIsPhotoGalleryOpen(true)}
                  className="group relative w-full xs2:w-1/2 overflow-hidden rounded-2xl aspect-[4/3] shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  {/* Image de fond */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop&auto=format)",
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/60 transition-all duration-500" />

                  {/* Contenu */}
                  <div className="relative h-full flex flex-col items-center justify-center p-6 xs:p-8 text-white">
                    <div className="p-3 xs:p-4 rounded-full bg-amber-400/20 backdrop-blur-sm group-hover:bg-amber-400/30 transition-all duration-300 mb-4">
                      <Camera className="w-8 h-8 xs:w-10 xs:h-10 xs2:w-12 xs2:h-12 text-amber-300 group-hover:text-amber-200 transition-colors" />
                    </div>
                    <h3 className="font-serif text-xl xs:text-2xl xs2:text-3xl text-center mb-2 drop-shadow-lg">
                      Galerie de photos
                    </h3>
                    <p className="text-sm xs:text-base text-white/90 text-center">
                      Découvrez nos souvenirs
                    </p>
                  </div>
                </button>

                {/* Card Vidéo */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group relative w-full xs2:w-1/2 overflow-hidden rounded-2xl aspect-[4/3] shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  {/* Image de fond */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop&auto=format)",
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/60 transition-all duration-500" />

                  {/* Contenu */}
                  <div className="relative h-full flex flex-col items-center justify-center p-6 xs:p-8 text-white">
                    <div className="p-3 xs:p-4 rounded-full bg-amber-400/20 backdrop-blur-sm group-hover:bg-amber-400/30 transition-all duration-300 mb-4">
                      <Video className="w-8 h-8 xs:w-10 xs:h-10 xs2:w-12 xs2:h-12 text-amber-300 group-hover:text-amber-200 transition-colors" />
                    </div>
                    <h3 className="font-serif text-xl xs:text-2xl xs2:text-3xl text-center mb-2 drop-shadow-lg">
                      Visionnez vos plus beaux moments
                    </h3>
                    <p className="text-sm xs:text-base text-white/90 text-center">
                      Revivez notre histoire
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invitations Section */}
      <div id="invitations-section">
        <InvitationsSection />
      </div>

      {/* Future Sections */}
      <section
        id="future-sections"
        className="py-10 xs:py-12 xs2:py-14 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="max-w-6xl mx-auto px-3 xs:px-4 xs2:px-5 sm:px-6">
          <h2 className="font-serif text-2xl xs:text-3xl xs2:text-3xl sm:text-4xl md:text-5xl text-center text-amber-100 mb-6 xs:mb-8 xs2:mb-10 sm:mb-12 md:mb-16">
            Nos Prochains Chapitres
          </h2>

          <div className="grid grid-cols-1 xs2:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-5 xs2:gap-6 sm:gap-8">
            {[
              {
                icon: Baby,
                title: "Naissances",
                color: "from-blue-400 to-cyan-500",
              },

              {
                icon: Sparkles,
                title: "Moments Forts",
                color: "from-purple-400 to-pink-500",
              },

              {
                icon: Heart,
                title: "Nouveaux Chapitres",
                color: "from-rose-400 to-amber-500",
              },
            ].map((section, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-20 blur-xl group-hover:opacity-40 transition-all duration-300 rounded-2xl`}
                  />

                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all shadow-xl hover:shadow-2xl">
                    <section.icon className="w-16 h-16 text-amber-400 mb-4 mx-auto" />

                    <h3 className="font-serif text-2xl text-center text-white mb-2">
                      {section.title}
                    </h3>

                    <p className="text-gray-400 text-center">À venir...</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-10 xs:py-12 xs2:py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-3 xs:px-4 xs2:px-5 sm:px-6 text-center">
          <div className="mb-6 sm:mb-8">
            <h3 className="font-serif text-xl xs:text-2xl xs2:text-2xl sm:text-3xl md:text-4xl text-amber-100 mb-2 xs:mb-3 xs2:mb-3 sm:mb-4">
              Vous aussi, immortalisez votre histoire
            </h3>

            <p className="text-sm xs:text-base xs2:text-lg sm:text-lg md:text-xl text-gray-300 mb-3 xs:mb-4 xs2:mb-5 sm:mb-6">
              Créez un site unique qui raconte votre amour
            </p>

            <button className="px-5 xs:px-6 xs2:px-7 sm:px-8 py-2.5 xs:py-3 xs2:py-3.5 sm:py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-gray-900 rounded-full font-semibold text-sm xs:text-base xs2:text-base sm:text-lg transition-all shadow-xl hover:shadow-amber-500/50 hover:scale-105">
              Créez votre histoire
            </button>
          </div>
        </div>
      </footer>

      {/* Pricing Section */}
      <PricingSection />

      {/* Bio Section */}
      <BioSection />

      {/* Copyright Footer */}
      <footer className="bg-gray-900 text-white py-6 xs:py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-3 xs:px-4 xs2:px-5 sm:px-6 text-center">
          <p className="text-gray-400 text-sm xs:text-base">
            © 2025 - Créé avec ❤️ pour immortaliser les plus beaux moments
          </p>
        </div>
      </footer>

      {/* Mention Site de Démo */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 flex justify-end">
          <div className="bg-amber-500/90 backdrop-blur-sm text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-tl-lg rounded-tr-lg text-xs xs:text-sm font-medium shadow-lg pointer-events-auto">
            Site de démo
          </div>
        </div>
      </div>

      {/* Story Modal */}
      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />

      {/* Photo Gallery */}
      <PhotoGallery
        isOpen={isPhotoGalleryOpen}
        onClose={() => setIsPhotoGalleryOpen(false)}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
};

export default WeddingSite;
