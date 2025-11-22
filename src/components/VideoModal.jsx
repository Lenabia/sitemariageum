import React, { useState, useEffect } from "react";
import { X, Play, Pause } from "lucide-react";

const VideoModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative h-full w-full flex items-center justify-center p-4 xs:p-6 lg:p-8">
        <div className="relative w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl max-h-[95vh] bg-black rounded-2xl xs:rounded-3xl shadow-2xl overflow-hidden flex flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all text-white"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video Container */}
          <div className="relative w-full aspect-video bg-black">
            {/* Video Player */}
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              controls
              onEnded={handleVideoEnd}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              {/* Placeholder - Remplacez cette URL par votre vidéo */}
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>

            {/* Play/Pause Overlay Button (optionnel, pour un contrôle personnalisé) */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10"
                onClick={handlePlayPause}
              >
                <div className="p-6 xs:p-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
                  <Play className="w-12 h-12 xs:w-16 xs:h-16 text-white ml-1" fill="white" />
                </div>
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="p-6 xs:p-8 text-white bg-gradient-to-b from-black/80 to-black">
            <h2 className="font-serif text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl text-amber-300 mb-3 xs:mb-4 text-center">
              Nos Plus Beaux Moments
            </h2>
            <p className="text-base xs:text-lg text-gray-300 text-center max-w-2xl mx-auto">
              Revivez les moments magiques de notre mariage, de la cérémonie à la soirée, 
              capturés dans cette vidéo qui retrace notre journée inoubliable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

