import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  Clock,
  Car,
  Sparkles,
} from "lucide-react";

/**
 * Section Invitations - Exemple de composant extensible
 *
 * Ce composant peut être facilement intégré dans WeddingSite.jsx
 * pour ajouter une section d'invitations avec formulaire RSVP
 */
const InvitationsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: 1,
    attendance: "yes",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer les données
    // à un backend ou un service d'email
    console.log("RSVP soumis:", formData);
    setSubmitted(true);

    // Réinitialiser le formulaire après 8 secondes
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        guests: 1,
        attendance: "yes",
        message: "",
      });
    }, 8000); // 8 secondes au lieu de 3
  };

  // Détection du scroll pour l'animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const eventInfo = [
    {
      icon: Calendar,
      title: "Date",
      content: "25 Juillet 2026",
      color: "from-amber-400 to-amber-500",
      iconColor: "text-amber-500",
      image:
        "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?w=800&h=600&fit=crop&auto=format",
    },
    {
      icon: Clock,
      title: "Cérémonie Laïque",
      content:
        "15h00\nJardin des Roses\n45 Avenue des Mariés\n78000 Versailles",
      color: "from-rose-400 to-rose-500",
      iconColor: "text-rose-500",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&auto=format",
    },
    {
      icon: Sparkles,
      title: "Cocktail",
      content: "16h30",
      color: "from-purple-400 to-purple-500",
      iconColor: "text-purple-500",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop&auto=format",
    },
    {
      icon: MapPin,
      title: "Lieu",
      content: "Château de la Vallée\n123 Avenue des Roses\n78000 Versailles",
      color: "from-blue-400 to-blue-500",
      iconColor: "text-blue-500",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop&auto=format",
    },
    {
      icon: Users,
      title: "Tenue",
      content: "Tenue de soirée élégante\nCocktail ou cérémonie",
      color: "from-pink-400 to-pink-500",
      iconColor: "text-pink-500",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop&auto=format",
    },
    {
      icon: Car,
      title: "Parking",
      content: "Parking gratuit disponible\nSur place (100 places)",
      color: "from-emerald-400 to-emerald-500",
      iconColor: "text-emerald-500",
      image:
        "https://plus.unsplash.com/premium_photo-1750362133464-689fe20aa8c4?q=80&w=1493&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="py-12 xs:py-16 xs2:py-20 sm:py-24 md:py-28 bg-gradient-to-b from-stone-100 via-amber-50 to-stone-100"
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 xs2:px-5 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-10 xs:mb-12 xs2:mb-14 sm:mb-16 transition-all duration-1500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-3xl xs:text-4xl xs2:text-5xl sm:text-5xl md:text-6xl text-gray-900 mb-3 xs:mb-4">
            Vous êtes Invités
          </h2>
          <p className="text-base xs:text-lg xs2:text-xl sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Nous serions ravis de partager ce moment spécial avec vous
          </p>
        </div>

        {/* Cards d'informations */}
        <div className="grid grid-cols-1 xs2:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-5 xs2:gap-6 sm:gap-8 mb-10 xs:mb-12 xs2:mb-14 sm:mb-16">
          {eventInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 xs:p-6 xs2:p-7 sm:p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Image miniature si disponible */}
                  {info.image && (
                    <div className="mb-3 xs:mb-4 rounded-xl overflow-hidden shadow-md">
                      <img
                        src={info.image}
                        alt={info.title}
                        className="w-full h-32 xs:h-36 xs2:h-40 sm:h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-3 xs:gap-4 mb-3 xs:mb-4">
                    {!info.image && (
                      <div
                        className={`p-2 xs:p-2.5 xs2:p-3 rounded-xl bg-gradient-to-r ${info.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}
                      >
                        <Icon
                          className={`w-5 h-5 xs:w-6 xs:h-6 xs2:w-7 xs2:h-7 ${info.iconColor}`}
                        />
                      </div>
                    )}
                    <h3 className="font-serif text-lg xs:text-xl xs2:text-xl sm:text-2xl text-gray-900">
                      {info.title}
                    </h3>
                  </div>
                  <p className="text-sm xs:text-base xs2:text-base sm:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            {/* Formulaire RSVP */}
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 xs:p-7 xs2:p-8 sm:p-10 shadow-xl border border-gray-200 transition-all duration-1500 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <h3 className="font-serif text-2xl xs:text-2xl xs2:text-3xl sm:text-3xl text-gray-900 mb-5 xs:mb-6">
                Confirmez votre Présence
              </h3>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <p className="text-xl text-gray-900 font-semibold">
                    Merci pour votre confirmation !
                  </p>
                  <p className="text-gray-600 mt-2">
                    Nous avons bien reçu votre réponse.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="jean.dupont@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre d'invités *
                    </label>
                    <input
                      type="number"
                      min="1"
                      required
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          guests: parseInt(e.target.value),
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Serez-vous présent(e) ? *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="attendance"
                          value="yes"
                          checked={formData.attendance === "yes"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              attendance: e.target.value,
                            })
                          }
                          className="w-4 h-4 text-amber-500"
                        />
                        <span className="text-gray-700">
                          Oui, avec plaisir !
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="attendance"
                          value="no"
                          checked={formData.attendance === "no"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              attendance: e.target.value,
                            })
                          }
                          className="w-4 h-4 text-amber-500"
                        />
                        <span className="text-gray-700">Non, désolé(e)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                      placeholder="Un petit mot pour les mariés..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 xs:px-8 py-3 xs:py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-gray-900 rounded-full font-semibold text-sm xs:text-base xs2:text-lg transition-all shadow-xl hover:shadow-amber-500/50 hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4 xs:w-5 xs:h-5" />
                      Confirmer ma présence
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationsSection;
