import React from "react";
import {
  Check,
  Sparkles,
  Heart,
  Star,
  Gift,
  Users,
  Camera,
  Mail,
  Baby,
  MessageCircle,
  MapPin,
  Video,
  Infinity,
  MessageSquare,
} from "lucide-react";

const PricingSection = () => {
  const offers = [
    {
      name: "Pack Souvenir",
      emoji: "🕊️",
      subtitle: "L'offre 'site mariage élégant + émotions'",
      price: "249",
      priceNote: "Paiement en 3x sans frais",
      icon: Camera,
      color: "from-amber-400 to-amber-500",
      borderColor: "border-amber-300",
      positioning:
        "Pour les couples qui veulent un site beau, simple, élégant, qui raconte leur histoire.",
      features: [
        "Site web personnalisé (design premium)",
        "Page 'Notre histoire' + timeline",
        "Galerie photos",
        "Page 'Notre union' (infos essentielles)",
        "Film de mariage (si fourni par les mariés, intégré élégamment)",
        "Page 'Save the Date'",
        "Page 'Messages des invités' (modèle incl.)",
        "Support pendant 30 jours après livraison",
      ],
      popular: false,
    },
    {
      name: "Pack Héritage",
      emoji: "✨",
      subtitle: "Le site comme mémoire + fonctionnalités avancées",
      price: "449",
      priceNote: "Paiement en 3x sans frais",
      icon: Heart,
      color: "from-rose-400 to-rose-500",
      borderColor: "border-rose-300",
      positioning:
        "Pour les couples qui souhaitent créer une mémoire digitale évolutive de leur histoire.",
      features: [
        "Tout le Pack Souvenir",
        "Espace 'Héritage' : évolution du couple (naissances, déménagements, moments forts)",
        "Gestion des invitations (RSVP)",
        "Page FAQ invités",
        "Suivi des réponses invités",
        "Section fichiers (contrats / PDF — en version simple)",
        "Espace 'capsule souvenir' (mini vidéo)",
        "Support 60 jours",
        "2 mises à jour offertes après livraison",
      ],
      popular: true,
    },
    {
      name: "Pack Maison du Mariage",
      emoji: "💎",
      subtitle: "Votre site – Votre organisation – Votre sérénité",
      price: "680",
      priceNote: "Paiement en 3x sans frais",
      icon: Star,
      color: "from-purple-400 to-purple-500",
      borderColor: "border-purple-300",
      positioning:
        "L'accompagnement complet : votre univers digital + coaching + coordination pour une sérénité totale.",
      features: [
        "Développement complet du site 'Héritage'",
        "Identité visuelle mariage (palette + typographies + style)",
        "Accès à votre espace organisation (checklists, templates, budget…)",
        "2 sessions de coaching mariage (1h chacune)",
        "Accès prioritaire DM pendant 30 jours",
        "Coordination jour J → en option / sur devis",
        "Personnalisation avancée : Section invités, FAQ, Timeline du jour J",
        "Moodboard + Playlist mariage",
        "Intégration du film + photos + Galerie premium",
        "Section souvenirs post-mariage",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-16 xs:py-20 xs2:py-24 sm:py-28 md:py-32 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-100 overflow-x-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 xs2:px-5 sm:px-6 w-full">
        {/* Header */}
        <div className="text-center mb-12 xs:mb-16 xs2:mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-4 xs:mb-5">
            <Sparkles className="w-5 h-5 xs:w-6 xs:h-6 text-amber-500" />
            <span className="text-sm xs:text-base font-semibold text-amber-600 uppercase tracking-wider">
              Nos Offres
            </span>
          </div>
          <h2 className="font-serif text-3xl xs:text-4xl xs2:text-5xl sm:text-6xl md:text-7xl text-gray-900 mb-4 xs:mb-5">
            Choisissez Votre Formule
          </h2>
          <p className="text-base xs:text-lg xs2:text-xl sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions adaptées à vos besoins pour immortaliser votre
            histoire d'amour
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 xs2:gap-10 sm:gap-12 max-w-7xl mx-auto">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl xs:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
                  offer.popular
                    ? `${offer.borderColor} scale-105 md:scale-110`
                    : "border-gray-200 hover:border-amber-300"
                }`}
              >
                {/* Popular Badge */}
                {offer.popular && (
                  <div className="absolute top-2 xs:top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-4 xs:px-5 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-semibold shadow-lg">
                      ⭐ Plus Populaire
                    </div>
                  </div>
                )}

                {/* Gradient Header */}
                <div
                  className={`bg-gradient-to-r ${offer.color} p-6 xs:p-8 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 xs:gap-4 mb-3 xs:mb-4">
                      <div className="p-2 xs:p-3 bg-white/20 rounded-xl backdrop-blur-sm flex-shrink-0">
                        <Icon className="w-6 h-6 xs:w-8 xs:h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <span className="text-2xl xs:text-3xl xs2:text-4xl">
                            {offer.emoji}
                          </span>
                          <h3 className="font-serif text-xl xs:text-2xl xs2:text-3xl sm:text-4xl font-bold break-words">
                            {offer.name}
                          </h3>
                        </div>
                        <p className="text-xs xs:text-sm xs2:text-base text-white/90 leading-relaxed italic">
                          {offer.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="p-6 xs:p-8 border-b border-gray-100">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-3xl xs:text-4xl xs2:text-5xl sm:text-6xl font-serif font-bold text-gray-900">
                      {offer.price}€
                    </span>
                    <span className="text-gray-500 text-xs xs:text-sm xs2:text-base">
                      TTC
                    </span>
                  </div>
                  <p className="text-xs xs:text-sm xs2:text-base text-amber-600 font-medium mt-2">
                    {offer.priceNote}
                  </p>
                </div>

                {/* Positioning */}
                {offer.positioning && (
                  <div className="px-6 xs:px-8 pt-4 xs:pt-5 pb-2">
                    <p className="text-xs xs:text-sm text-gray-600 italic leading-relaxed">
                      → {offer.positioning}
                    </p>
                  </div>
                )}

                {/* Features */}
                <div className="p-6 xs:p-8">
                  <div className="mb-4 xs:mb-5">
                    <span className="text-xs xs:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Ce qu'elle inclut :
                    </span>
                  </div>
                  <ul className="space-y-2.5 xs:space-y-3 xs2:space-y-4">
                    {offer.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 xs:gap-3"
                      >
                        <div className="flex-shrink-0 mt-0.5 xs:mt-1">
                          <Check className="w-4 h-4 xs:w-5 xs:h-5 text-amber-500" />
                        </div>
                        <span className="text-xs xs:text-sm xs2:text-base text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-12 xs:mt-16 text-center space-y-6 xs:space-y-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-base xs:text-lg xs2:text-xl sm:text-2xl text-gray-700 leading-relaxed mb-6 xs:mb-8">
              Tous nos projets commencent par un échange humain.
              <br className="hidden xs:block" />
              <span className="block xs:inline"> </span>
              Prenez rendez-vous ou laissez-nous votre vision : nous découvrons
              votre histoire avant de commencer la création.
            </p>
            <a
              href="https://www.universmaries.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 xs:px-8 xs2:px-10 sm:px-12 py-3 xs:py-3.5 xs2:py-4 sm:py-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-white rounded-full font-semibold text-sm xs:text-base xs2:text-lg sm:text-xl transition-all shadow-xl hover:shadow-amber-500/50 hover:scale-105"
            >
              Je réserve mon RDV
            </a>
          </div>

          {/* Payment Info */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 xs:px-6 xs2:px-8 py-3 xs:py-4 max-w-2xl mx-auto">
            <Gift className="w-4 h-4 xs:w-5 xs:h-5 xs2:w-6 xs2:h-6 text-amber-600 flex-shrink-0" />
            <span className="text-xs xs:text-sm xs2:text-base text-gray-700 text-center">
              <span className="font-semibold text-amber-700">
                Paiement sécurisé
              </span>{" "}
              - 3x sans frais disponible pour toutes les offres
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
