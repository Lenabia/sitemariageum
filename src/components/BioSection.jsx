import React from "react";
import { Heart, Instagram, ExternalLink } from "lucide-react";

const BioSection = () => {
  return (
    <section className="py-12 xs:py-16 xs2:py-20 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden w-full max-w-full">
      <div className="max-w-4xl mx-auto px-3 xs:px-4 xs2:px-5 sm:px-6 lg:px-8 xl:px-10 w-full">
        <div className="text-center mb-8 xs:mb-10 xs2:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 xs:mb-5">
            <div className="h-px w-12 xs:w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <Heart className="w-5 h-5 xs:w-6 xs:h-6 text-amber-400" />
            <div className="h-px w-12 xs:w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <h2 className="font-serif text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl text-amber-100 mb-4 xs:mb-5">
            À Propos de Moi
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl xs:rounded-3xl p-6 xs:p-8 xs2:p-10 border border-white/10">
          {/* Bio Content */}
          <div className="text-gray-300 text-base xs:text-lg xs2:text-xl leading-relaxed mb-8 xs:mb-10 space-y-4 xs:space-y-5">
            <p className="font-semibold text-amber-300 text-lg xs:text-xl xs2:text-2xl">
              Je suis Léna.
            </p>

            <p>
              Project manager, développeuse web… et passionnée par l'univers du
              mariage.
            </p>

            <p>
              C'est pour cela que je crée des outils, des sites et des espaces
              pensés pour vous :
            </p>

            <ul className="list-none space-y-2 xs:space-y-3 ml-4 xs:ml-6">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">✨</span>
                <span>simples</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">✨</span>
                <span>élégants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">✨</span>
                <span>rassurants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">✨</span>
                <span>et profondément humains.</span>
              </li>
            </ul>

            <p className="font-semibold text-amber-300 mt-6 xs:mt-8">
              Mon objectif ?
            </p>

            <p>
              Vous aider à vivre des préparatifs plus fluides et un mariage
              serein.
            </p>

            <p>
              en vous offrant un espace qui raconte votre histoire avec beauté
              et clarté.
            </p>

            <p>
              Un site vivant et évolutif, que vous pourrez enrichir au fil du
              temps.
            </p>

            <p className="font-semibold text-amber-300 text-lg xs:text-xl mt-6 xs:mt-8">
              C'est plus qu'un site de mariage.
            </p>

            <p className="font-semibold text-amber-300 text-lg xs:text-xl">
              C'est votre mémoire.
            </p>

            <p className="font-semibold text-amber-300 text-lg xs:text-xl">
              Votre héritage digital.
            </p>

            <p className="font-semibold text-amber-300 text-lg xs:text-xl">
              Votre histoire, pour toujours.
            </p>
          </div>

          {/* Réseaux sociaux et contact */}
          <div className="pt-6 xs:pt-8 border-t border-white/10">
            <p className="text-center text-gray-400 text-sm xs:text-base mb-4 xs:mb-6">
              Suivez-moi sur mes réseaux :
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 xs:gap-6 w-full flex-wrap">
              <a
                href="https://www.tiktok.com/@universdesmaries?_r=1&_t=ZN-91bpbDcqgEN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 bg-white/10 hover:bg-white/20 rounded-lg text-amber-300 hover:text-amber-200 transition-all group whitespace-nowrap"
              >
                <span className="text-lg flex-shrink-0">🎵</span>
                <span className="font-medium">TikTok</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>

              <a
                href="https://www.instagram.com/universmariages?igsh=bTB4eGFlN25qbHVh&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 bg-white/10 hover:bg-white/20 rounded-lg text-amber-300 hover:text-amber-200 transition-all group whitespace-nowrap"
              >
                <Instagram className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Instagram</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>

              <a
                href="https://www.universmaries.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-gray-900 rounded-lg font-semibold transition-all shadow-lg hover:shadow-amber-500/50 group whitespace-nowrap"
              >
                <span className="font-medium">Prendre RDV</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
