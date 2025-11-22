import React, { useState, useEffect } from "react";
import { X, Heart, Camera } from "lucide-react";

const PhotoGallery = ({ isOpen, onClose }) => {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const gallerySections = {
    preshooting: {
      title: "Pre-shooting",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop&auto=format",
          size: "large", // horizontal
        },
        {
          url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop&auto=format",
          size: "tall", // vertical
        },
        {
          url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&auto=format",
          size: "medium", // horizontal
        },
        {
          url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=900&fit=crop&auto=format",
          size: "tall", // vertical
        },
        {
          url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&auto=format",
          size: "large", // horizontal
        },
        {
          url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=800&fit=crop&auto=format",
          size: "tall", // vertical
        },
        {
          url: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?w=800&h=600&fit=crop&auto=format",
          size: "medium", // horizontal
        },
        {
          url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=800&fit=crop&auto=format",
          size: "tall", // vertical
        },
        {
          url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop&auto=format",
          size: "large", // horizontal
        },
      ],
    },
    mariage: {
      title: "Notre Jour J",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop&auto=format",
          size: "large", // horizontal
        },
        {
          url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop&auto=format",
          size: "tall", // vertical
        },
        {
          url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop&auto=format",
          size: "medium", // horizontal
        },
        {
          url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=900&fit=crop&auto=format",
          size: "tall", // vertical
        },
        {
          url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&auto=format",
          size: "large", // horizontal
        },
        {
          url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=800&fit=crop&auto=format",
          size: "tall", // vertical
        },
        {
          url: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?w=800&h=600&fit=crop&auto=format",
          size: "medium", // horizontal
        },
        {
          url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=800&fit=crop&auto=format",
          size: "tall", // vertical
        },
        {
          url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop&auto=format",
          size: "large", // horizontal
        },
        {
          url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=800&fit=crop&auto=format",
          size: "tall", // vertical
        },
      ],
    },
  };

  useEffect(() => {
    if (isOpen) {
      setDoorsOpen(false);
      setShowContent(false);
      setSelectedImage(null);
      setTimeout(() => setDoorsOpen(true), 100);
    } else {
      setDoorsOpen(false);
      setShowContent(false);
      setSelectedImage(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (doorsOpen) {
      setTimeout(() => setShowContent(true), 2500);
    }
  }, [doorsOpen]);

  const handleOpenDoors = () => {
    setDoorsOpen(true);
  };

  if (!isOpen) return null;

  // Animation de tourbillon de particules dorées
  if (!showContent) {
    // Générer 20 particules pour le tourbillon
    const particles = Array.from({ length: 20 }, (_, i) => i);

    return (
      <div className="fixed inset-0 z-50 overflow-hidden bg-black">
        {/* Background Image */}
        <div
          className={`absolute inset-0 transition-all duration-[2500ms] ${
            doorsOpen ? "scale-110 blur-sm" : "scale-100"
          }`}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dark Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-[2500ms] ${
            doorsOpen ? "opacity-0" : "opacity-30"
          }`}
        />

        {/* Tourbillon de particules dorées */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {particles.map((particle, index) => {
            const angle = (index * 360) / particles.length;
            const delay = index * 0.03;
            return (
              <div
                key={index}
                className={`absolute w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-2xl ${
                  doorsOpen ? "animate-spiral-out" : ""
                }`}
                style={{
                  animationDelay: `${delay}s`,
                  transform: `rotate(${angle}deg) translateX(0)`,
                  opacity: doorsOpen ? 0 : 0.9,
                  filter: "blur(0.5px)",
                }}
              />
            );
          })}
        </div>

        {/* Content */}
        {!doorsOpen && (
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
            <h1
              className="font-serif text-3xl xs:text-4xl xs2:text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 tracking-wider text-amber-100 text-center"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
            >
              Notre Galerie
            </h1>

            <div className="flex items-center gap-2 xs:gap-3 xs2:gap-4 mb-6 xs:mb-8">
              <div className="h-px w-6 xs:w-8 xs2:w-12 sm:w-16 bg-gradient-to-r from-transparent to-amber-400" />

              <Heart className="w-4 h-4 xs:w-5 xs:h-5 xs2:w-6 xs2:h-6 sm:w-6 sm:h-6 text-amber-400" />

              <div className="h-px w-6 xs:w-8 xs2:w-12 sm:w-16 bg-gradient-to-l from-transparent to-amber-400" />
            </div>

            <p className="text-base xs:text-lg xs2:text-xl sm:text-xl md:text-2xl mb-6 xs2:mb-8 sm:mb-12 text-amber-100 font-light tracking-wide text-center px-4">
              Découvrez nos plus beaux souvenirs
            </p>

            <button
              onClick={handleOpenDoors}
              className="group px-5 xs:px-6 xs2:px-8 sm:px-10 py-2.5 xs:py-3 xs2:py-3.5 sm:py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 rounded-full font-semibold text-sm xs:text-base xs2:text-base sm:text-lg hover:from-amber-300 hover:to-amber-400 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:scale-105"
            >
              <span className="flex items-center gap-2 sm:gap-3">
                <span className="hidden xs2:inline">
                  Entrer dans la galerie
                </span>
                <span className="xs2:hidden">Entrer</span>
                <Camera className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // Vue de la galerie
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-stone-200/90 backdrop-blur-sm border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 xs2:px-6 sm:px-8 py-4 xs:py-5 flex items-center justify-between">
          <h1 className="font-serif text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl text-amber-800">
            Notre Galerie
          </h1>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-300/80 hover:bg-stone-400/80 transition-all text-stone-800"
          >
            <X className="w-5 h-5 xs:w-6 xs:h-6" />
          </button>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 xs2:px-5 sm:px-6 lg:px-8 xl:px-10 py-8 xs:py-10 xs2:py-12 sm:py-16">
        {Object.entries(gallerySections).map(([key, section], sectionIndex) => (
          <div key={key} className="mb-16 xs:mb-20 xs2:mb-24 sm:mb-32">
            {/* Section Title */}
            <div className="text-center mb-8 xs:mb-10 xs2:mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl xs:text-4xl xs2:text-5xl sm:text-6xl md:text-7xl text-amber-800 mb-3 xs:mb-4">
                {section.title}
              </h2>
              <div className="flex items-center justify-center gap-3 xs:gap-4 mb-4">
                <div className="h-px w-12 xs:w-16 xs2:w-24 bg-gradient-to-r from-transparent to-amber-400" />
                <Heart className="w-5 h-5 xs:w-6 xs:h-6 text-amber-400" />
                <div className="h-px w-12 xs:w-16 xs2:w-24 bg-gradient-to-l from-transparent to-amber-400" />
              </div>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 xs:columns-2 md:columns-3 lg:columns-4 xl:columns-4 2xl:columns-5 gap-3 xs:gap-4 xs2:gap-5 sm:gap-6 max-w-7xl mx-auto">
              {section.photos.map((photo, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-3 xs:mb-4 xs2:mb-5 sm:mb-6 group cursor-pointer"
                  onClick={() => setSelectedImage(photo.url)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                    <img
                      src={photo.url}
                      alt={`${section.title} - Photo ${index + 1}`}
                      className={`w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 ${
                        photo.size === "tall"
                          ? "aspect-[3/4]"
                          : photo.size === "large"
                          ? "aspect-[4/3]"
                          : "aspect-[4/3]"
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 xs:p-6 lg:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 xs:top-6 right-4 xs:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-6xl xl:max-w-7xl 2xl:max-w-7xl w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Photo en grand"
              className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
