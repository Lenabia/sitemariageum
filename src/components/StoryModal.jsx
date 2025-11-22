import React, { useState, useEffect, useRef } from "react";
import { X, ChevronRight, ChevronLeft, Heart } from "lucide-react";

const StoryModal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showClapboardAnimation, setShowClapboardAnimation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);
  const mouseStartRef = useRef(null);
  const mouseEndRef = useRef(null);
  const isDraggingRef = useRef(false);

  const storyPages = [
    {
      title: "Emma",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop",
      content: {
        age: "28 ans",
        personality: "Extravertie et rayonnante",
        passions: "Danse classique depuis l'enfance, elle trouve dans chaque mouvement une poésie silencieuse",
        traits: "Curieuse, généreuse, elle croit aux petites attentions qui illuminent les journées",
        quote: "La vie est une danse, et chaque pas compte."
      }
    },
    {
      title: "Louis",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
      content: {
        age: "30 ans",
        personality: "Timide mais passionné",
        passions: "Le football le dimanche matin, la littérature le soir, et les films qui racontent de belles histoires",
        traits: "Réfléchi, attentionné, il trouve les mots justes quand il faut",
        quote: "Les plus belles histoires se vivent, pas seulement se lisent."
      }
    },
    {
      title: "La Rencontre",
      image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=1200&h=800&fit=crop",
      content: {
        date: "15 Mars 2019",
        story: "Un café parisien, un samedi pluvieux. Emma cherchait un abri, Louis lisait près de la fenêtre. Leurs regards se sont croisés, et dans ce moment suspendu, quelque chose d'inattendu s'est éveillé. Une conversation qui n'en finissait pas, des rires partagés, et cette certitude que cette rencontre n'était pas le fruit du hasard."
      }
    },
    {
      title: "Premier Voyage",
      image: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?w=1200&h=800&fit=crop",
      content: {
        date: "20 Juillet 2019",
        story: "La Toscane. Leurs premiers pas ensemble sur une terre étrangère. Des couchers de soleil qui peignaient le ciel en or, des rires qui résonnaient dans les ruelles de Florence, et cette découverte mutuelle que seul le voyage permet. C'est là qu'ils ont compris qu'ils voulaient continuer à explorer le monde, main dans la main."
      }
    },
    {
      title: "La Demande",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
      content: {
        date: "14 Février 2022",
        story: "Au sommet de la Tour Eiffel, sous un ciel étoilé. Louis s'est mis à genoux, le cœur battant. Emma, les yeux brillants de larmes de joie, a dit oui sans hésiter. Dans ce moment suspendu entre ciel et terre, ils ont scellé leur promesse d'éternité."
      }
    },
    {
      title: "Le Grand Jour",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop",
      content: {
        date: "25 Juillet 2026",
        story: "Entourés de leurs proches, ils ont uni leurs vies. Un jour magique, rempli d'amour, de larmes de joie et de promesses éternelles. Sous le regard bienveillant de ceux qu'ils aiment, Emma et Louis sont devenus une seule âme, deux cœurs battant à l'unisson pour toujours."
      }
    },
    {
      title: "Et Ensuite ?",
      image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=1200&h=800&fit=crop",
      content: {
        story: "Découvrez les moments magiques qui retracent le bonheur d'Emma et Louis. Chaque instant capturé raconte une histoire, chaque sourire témoigne de leur amour grandissant. Leur aventure continue, écrite jour après jour avec tendresse et complicité."
      }
    }
  ];

  useEffect(() => {
    if (isOpen) {
      setCurrentPage(0);
      setShowClapboardAnimation(true);
      setShowModal(false);
      document.body.style.overflow = "hidden";
      
      // Après l'animation du clapboard, afficher la modale
      setTimeout(() => {
        setShowClapboardAnimation(false);
        setShowModal(true);
      }, 1200);
    } else {
      setShowClapboardAnimation(false);
      setShowModal(false);
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const nextPage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage((prev) => {
          // Boucle : si on est au dernier, revenir au premier
          return prev < storyPages.length - 1 ? prev + 1 : 0;
        });
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage((prev) => {
          // Boucle : si on est au premier, aller au dernier
          return prev > 0 ? prev - 1 : storyPages.length - 1;
        });
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") nextPage();
    if (e.key === "ArrowLeft") prevPage();
    if (e.key === "Escape") onClose();
  };

  // Gestion du swipe tactile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchEndRef.current = null;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    
    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && !isTransitioning) {
      nextPage();
    }
    if (isRightSwipe && !isTransitioning) {
      prevPage();
    }
    
    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  // Gestion du swipe avec la souris (drag)
  const onMouseDown = (e) => {
    isDraggingRef.current = true;
    mouseEndRef.current = null;
    mouseStartRef.current = e.clientX;
  };

  const onMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    mouseEndRef.current = e.clientX;
  };

  const onMouseUp = () => {
    if (!isDraggingRef.current) return;
    
    if (mouseStartRef.current && mouseEndRef.current) {
      const distance = mouseStartRef.current - mouseEndRef.current;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe && !isTransitioning) {
        nextPage();
      }
      if (isRightSwipe && !isTransitioning) {
        prevPage();
      }
    }
    
    isDraggingRef.current = false;
    mouseStartRef.current = null;
    mouseEndRef.current = null;
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, currentPage, isTransitioning]);

  if (!isOpen) return null;

  const currentStory = storyPages[currentPage];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Clapboard Animation */}
      {showClapboardAnimation && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black">
          <div className="relative" style={{ perspective: '1000px' }}>
            <div className="animate-clapboard-open" style={{ transformStyle: 'preserve-3d' }}>
              {/* Clapboard noir et blanc style cinéma */}
              <div className="relative w-72 xs:w-80 xs2:w-96 sm:w-[28rem] md:w-[32rem] h-36 xs:h-40 xs2:h-48 sm:h-56 bg-white border-4 border-black rounded-t-lg shadow-2xl">
                {/* Lignes horizontales noires caractéristiques du clapboard */}
                <div className="absolute inset-0 flex flex-col justify-between p-3 xs:p-4">
                  <div className="h-1 xs:h-1.5 bg-black"></div>
                  <div className="h-1 xs:h-1.5 bg-black"></div>
                  <div className="h-1 xs:h-1.5 bg-black"></div>
                  <div className="h-1 xs:h-1.5 bg-black"></div>
                  <div className="h-1 xs:h-1.5 bg-black"></div>
                </div>
                {/* Texte ACTION en noir */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-5xl xs:text-6xl xs2:text-7xl sm:text-8xl md:text-9xl font-black text-black tracking-widest">
                    ACTION
                  </span>
                </div>
                {/* Poignée noire en bas */}
                <div className="absolute -bottom-4 xs:-bottom-5 xs2:-bottom-6 left-1/2 transform -translate-x-1/2 w-20 xs:w-24 h-4 xs:h-5 xs2:h-6 bg-black rounded-b-lg shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
          showModal ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className={`relative h-full w-full flex items-center justify-center p-2 xs:p-3 xs2:p-4 sm:p-6 lg:p-8 ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        <div
          className={`relative w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl max-h-[95vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl xs:rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 animate-modal-appear flex flex-col ${
            isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 xs:top-3 xs2:top-4 right-2 xs:right-3 xs2:right-4 z-20 p-1.5 xs:p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all text-white"
          >
            <X className="w-4 h-4 xs:w-5 xs:h-5 xs2:w-6 xs2:h-6" />
          </button>

          {/* Content - Image en arrière-plan avec texte par-dessus */}
          <div 
            className="relative min-h-[70vh] xs:min-h-[75vh] xs2:min-h-[80vh] sm:min-h-[85vh] max-h-[85vh] lg:max-h-[90vh] flex flex-col overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {/* Image en arrière-plan */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
                style={{
                  backgroundImage: `url(${currentStory.image})`,
                  transform: isTransitioning ? "scale(1.1)" : "scale(1)",
                  objectFit: "cover",
                }}
              />
              {/* Overlay pour lisibilité du texte */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            </div>

            {/* Text Content par-dessus l'image */}
            <div className="relative flex-1 flex flex-col justify-between p-4 xs:p-5 xs2:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 text-white overflow-y-auto z-10">
              {/* Contenu principal centré */}
              <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full px-2 xs:px-3 sm:px-4">
                <div
                  className={`transition-all duration-700 ${
                    isTransitioning
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <h2 className="font-serif text-3xl xs:text-4xl xs2:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl 2xl:text-8xl mb-4 xs:mb-5 xs2:mb-6 sm:mb-8 text-white drop-shadow-2xl text-center">
                    {currentStory.title}
                  </h2>

                  {currentStory.content.date && (
                    <p className="text-amber-300 text-lg xs:text-xl xs2:text-2xl sm:text-3xl mb-6 xs:mb-8 font-light text-center drop-shadow-lg">
                      {currentStory.content.date}
                    </p>
                  )}

                  {currentStory.content.story ? (
                    <div className="space-y-4 xs:space-y-5 max-w-4xl mx-auto px-2 xs:px-3 sm:px-4">
                      <p className="text-base xs:text-lg xs2:text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl leading-relaxed text-white font-light drop-shadow-lg text-center">
                        {currentStory.content.story}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-5 xs:space-y-6 xs2:space-y-8 max-w-3xl mx-auto px-2 xs:px-3 sm:px-4">
                      <div className="flex items-center gap-3 xs:gap-4 mb-6 xs:mb-8">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-300" />
                        <Heart className="w-6 h-6 xs:w-8 xs:h-8 text-amber-300 fill-amber-300 drop-shadow-lg" />
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-300" />
                      </div>
                      
                      <div className="space-y-4 xs:space-y-5 text-base xs:text-lg xs2:text-xl sm:text-2xl text-white">
                        <p className="text-center">
                          <span className="text-amber-200 font-semibold drop-shadow-lg">{currentStory.content.age}</span>
                          {" • "}
                          <span className="italic drop-shadow-lg">{currentStory.content.personality}</span>
                        </p>
                        
                        <p className="leading-relaxed font-light text-center drop-shadow-lg">
                          {currentStory.content.passions}
                        </p>
                        
                        <p className="leading-relaxed font-light text-center drop-shadow-lg">
                          {currentStory.content.traits}
                        </p>
                        
                        <div className="pt-6 xs:pt-8 border-t border-white/20">
                          <p className="text-amber-100 italic text-center text-lg xs:text-xl sm:text-2xl font-light drop-shadow-lg">
                            "{currentStory.content.quote}"
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Page Indicator en bas */}
              <div className="flex justify-center gap-1.5 xs:gap-2 mt-4 xs:mt-6">
                {storyPages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 xs:h-2 rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? "w-8 xs:w-10 bg-amber-300"
                        : "w-1.5 xs:w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div 
              className="relative z-20 flex items-center justify-between p-3 xs:p-4 xs2:p-5 sm:p-6 xs2:p-8 border-t border-white/20 bg-black/20 backdrop-blur-sm"
              onTouchStart={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <button
                onClick={prevPage}
                className="flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 xs2:px-5 sm:px-6 py-2 xs:py-2.5 xs2:py-3 rounded-full transition-all text-sm xs:text-base bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5" />
                <span className="hidden xs2:inline">Précédent</span>
              </button>

              <div className="text-xs xs:text-sm text-gray-400">
                {currentPage + 1} / {storyPages.length}
              </div>

              <button
                onClick={nextPage}
                className="flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 xs2:px-5 sm:px-6 py-2 xs:py-2.5 xs2:py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-gray-900 rounded-full font-semibold text-sm xs:text-base transition-all shadow-lg hover:shadow-amber-500/50"
              >
                <span>Suivant</span>
                <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;

