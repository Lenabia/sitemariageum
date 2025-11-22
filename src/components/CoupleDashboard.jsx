import React, { useState } from "react";
import { X, Users, CheckCircle, Clock, XCircle, Mail, Plus, Search, Filter, Edit, Trash2, Send, BarChart3 } from "lucide-react";

const CoupleDashboard = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Données de démo
  const [guests, setGuests] = useState([
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean.dupont@email.com",
      guests: 2,
      status: "confirmed",
      responseDate: "2024-01-15",
      message: "Avec plaisir !",
      category: "adulte",
      allergies: "",
      invitationSent: true,
    },
    {
      id: 2,
      name: "Marie Martin",
      email: "marie.martin@email.com",
      guests: 1,
      status: "pending",
      responseDate: null,
      message: "",
      category: "adulte",
      allergies: "",
      invitationSent: true,
    },
    {
      id: 3,
      name: "Pierre Durand",
      email: "pierre.durand@email.com",
      guests: 0,
      status: "declined",
      responseDate: "2024-01-20",
      message: "Désolé, nous ne pourrons pas être présents.",
      category: "adulte",
      allergies: "",
      invitationSent: true,
    },
    {
      id: 4,
      name: "Sophie Bernard",
      email: "sophie.bernard@email.com",
      guests: 2,
      status: "confirmed",
      responseDate: "2024-01-18",
      message: "Merci pour l'invitation !",
      category: "adulte",
      allergies: "Gluten",
      invitationSent: true,
    },
    {
      id: 5,
      name: "Thomas Petit",
      email: "thomas.petit@email.com",
      guests: 1,
      status: "pending",
      responseDate: null,
      message: "",
      category: "adulte",
      allergies: "",
      invitationSent: false,
    },
  ]);

  const [newGuest, setNewGuest] = useState({
    name: "",
    email: "",
    guests: 1,
    category: "adulte",
    allergies: "",
    message: "",
  });

  // Calcul des statistiques
  const stats = {
    total: guests.length,
    confirmed: guests.filter((g) => g.status === "confirmed").length,
    pending: guests.filter((g) => g.status === "pending").length,
    declined: guests.filter((g) => g.status === "declined").length,
    totalGuests: guests.reduce((sum, g) => sum + (g.status === "confirmed" ? g.guests : 0), 0),
    responseRate: guests.filter((g) => g.status !== "pending").length,
  };

  // Filtrage des invités
  const filteredGuests = guests.filter((guest) => {
    const matchesSearch =
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || guest.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleAddGuest = () => {
    if (newGuest.name && newGuest.email) {
      const guest = {
        id: guests.length + 1,
        ...newGuest,
        status: "pending",
        responseDate: null,
        invitationSent: false,
      };
      setGuests([...guests, guest]);
      setNewGuest({
        name: "",
        email: "",
        guests: 1,
        category: "adulte",
        allergies: "",
        message: "",
      });
    }
  };

  const handleSendInvitations = (guestIds) => {
    setGuests(
      guests.map((g) =>
        guestIds.includes(g.id) ? { ...g, invitationSent: true } : g
      )
    );
    alert("Invitations envoyées avec succès !");
  };

  const handleDeleteGuest = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet invité ?")) {
      setGuests(guests.filter((g) => g.id !== id));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl xs:rounded-3xl w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-6 xs:p-8 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl xs:text-3xl xs2:text-4xl text-white font-bold">
              Espace Marié
            </h2>
            <p className="text-white/90 text-sm xs:text-base mt-1">
              Gestion des invitations et réponses
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="flex overflow-x-auto">
            {[
              { id: "dashboard", label: "Dashboard", icon: BarChart3 },
              { id: "guests", label: "Liste des Invités", icon: Users },
              { id: "create", label: "Créer Invitation", icon: Plus },
              { id: "rsvp", label: "Réponses RSVP", icon: Mail },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 xs:px-6 py-4 font-medium text-sm xs:text-base transition-colors border-b-2 ${
                    activeTab === tab.id
                      ? "border-amber-500 text-amber-600 bg-white"
                      : "border-transparent text-gray-600 hover:text-amber-600"
                  }`}
                >
                  <Icon className="w-4 h-4 xs:w-5 xs:h-5" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 xs:p-6 xs2:p-8">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <h3 className="font-serif text-2xl xs:text-3xl text-gray-900 mb-6">
                Vue d'ensemble
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 xs:p-6 border border-amber-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 xs:w-6 xs:h-6 text-amber-600" />
                    <span className="text-xs xs:text-sm text-gray-600">Total</span>
                  </div>
                  <p className="text-2xl xs:text-3xl font-bold text-gray-900">
                    {stats.total}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 xs:p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 xs:w-6 xs:h-6 text-green-600" />
                    <span className="text-xs xs:text-sm text-gray-600">Confirmés</span>
                  </div>
                  <p className="text-2xl xs:text-3xl font-bold text-gray-900">
                    {stats.confirmed}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {stats.totalGuests} personne{stats.totalGuests > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 xs:p-6 border border-yellow-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 xs:w-6 xs:h-6 text-yellow-600" />
                    <span className="text-xs xs:text-sm text-gray-600">En attente</span>
                  </div>
                  <p className="text-2xl xs:text-3xl font-bold text-gray-900">
                    {stats.pending}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 xs:p-6 border border-red-200">
                  <div className="flex items-center gap-3 mb-2">
                    <XCircle className="w-5 h-5 xs:w-6 xs:h-6 text-red-600" />
                    <span className="text-xs xs:text-sm text-gray-600">Refusés</span>
                  </div>
                  <p className="text-2xl xs:text-3xl font-bold text-gray-900">
                    {stats.declined}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 xs:p-8 border border-gray-200">
                <h4 className="font-semibold text-lg xs:text-xl text-gray-900 mb-4">
                  Taux de réponse
                </h4>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gray-200 rounded-full h-4 xs:h-6">
                    <div
                      className="bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full transition-all"
                      style={{
                        width: `${(stats.responseRate / stats.total) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm xs:text-base font-semibold text-gray-700">
                    {Math.round((stats.responseRate / stats.total) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Guests List Tab */}
          {activeTab === "guests" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <h3 className="font-serif text-2xl xs:text-3xl text-gray-900">
                  Liste des Invités
                </h3>
                <div className="flex flex-col xs:flex-row gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 xs:flex-initial">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm xs:text-base w-full xs:w-64"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm xs:text-base"
                  >
                    <option value="all">Tous les statuts</option>
                    <option value="confirmed">Confirmés</option>
                    <option value="pending">En attente</option>
                    <option value="declined">Refusés</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left p-3 xs:p-4 text-xs xs:text-sm font-semibold text-gray-700">
                        Nom
                      </th>
                      <th className="text-left p-3 xs:p-4 text-xs xs:text-sm font-semibold text-gray-700">
                        Email
                      </th>
                      <th className="text-center p-3 xs:p-4 text-xs xs:text-sm font-semibold text-gray-700">
                        Invités
                      </th>
                      <th className="text-center p-3 xs:p-4 text-xs xs:text-sm font-semibold text-gray-700">
                        Statut
                      </th>
                      <th className="text-center p-3 xs:p-4 text-xs xs:text-sm font-semibold text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredGuests.map((guest) => (
                      <tr
                        key={guest.id}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="p-3 xs:p-4 text-sm xs:text-base text-gray-900">
                          {guest.name}
                        </td>
                        <td className="p-3 xs:p-4 text-sm xs:text-base text-gray-600">
                          {guest.email}
                        </td>
                        <td className="p-3 xs:p-4 text-center text-sm xs:text-base text-gray-900">
                          {guest.guests}
                        </td>
                        <td className="p-3 xs:p-4 text-center">
                          <span
                            className={`inline-block px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-medium ${
                              guest.status === "confirmed"
                                ? "bg-green-100 text-green-700"
                                : guest.status === "pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {guest.status === "confirmed"
                              ? "Confirmé"
                              : guest.status === "pending"
                              ? "En attente"
                              : "Refusé"}
                          </span>
                        </td>
                        <td className="p-3 xs:p-4">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleDeleteGuest(guest.id)}
                              className="p-1.5 xs:p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                              title="Supprimer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            {!guest.invitationSent && (
                              <button
                                onClick={() => handleSendInvitations([guest.id])}
                                className="p-1.5 xs:p-2 text-amber-600 hover:bg-amber-50 rounded transition-colors"
                                title="Envoyer invitation"
                              >
                                <Send className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Create Invitation Tab */}
          {activeTab === "create" && (
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="font-serif text-2xl xs:text-3xl text-gray-900">
                Créer une Invitation
              </h3>
              <div className="bg-white rounded-xl p-6 xs:p-8 border border-gray-200 space-y-4 xs:space-y-6">
                <div>
                  <label className="block text-sm xs:text-base font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={newGuest.name}
                    onChange={(e) =>
                      setNewGuest({ ...newGuest, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm xs:text-base"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm xs:text-base font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={newGuest.email}
                    onChange={(e) =>
                      setNewGuest({ ...newGuest, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm xs:text-base"
                    placeholder="jean.dupont@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm xs:text-base font-semibold text-gray-700 mb-2">
                    Nombre d'invités
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newGuest.guests}
                    onChange={(e) =>
                      setNewGuest({
                        ...newGuest,
                        guests: parseInt(e.target.value) || 1,
                      })
                    }
                    className="w-full px-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm xs:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm xs:text-base font-semibold text-gray-700 mb-2">
                    Catégorie
                  </label>
                  <select
                    value={newGuest.category}
                    onChange={(e) =>
                      setNewGuest({ ...newGuest, category: e.target.value })
                    }
                    className="w-full px-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm xs:text-base"
                  >
                    <option value="adulte">Adulte</option>
                    <option value="enfant">Enfant</option>
                    <option value="les-deux">Les deux</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm xs:text-base font-semibold text-gray-700 mb-2">
                    Allergies / Régimes alimentaires
                  </label>
                  <input
                    type="text"
                    value={newGuest.allergies}
                    onChange={(e) =>
                      setNewGuest({ ...newGuest, allergies: e.target.value })
                    }
                    className="w-full px-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm xs:text-base"
                    placeholder="Gluten, végétarien, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm xs:text-base font-semibold text-gray-700 mb-2">
                    Message personnalisé (optionnel)
                  </label>
                  <textarea
                    value={newGuest.message}
                    onChange={(e) =>
                      setNewGuest({ ...newGuest, message: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none text-sm xs:text-base"
                    placeholder="Un message personnalisé pour cet invité..."
                  />
                </div>
                <button
                  onClick={handleAddGuest}
                  className="w-full px-6 xs:px-8 py-3 xs:py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-white rounded-lg font-semibold text-sm xs:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" />
                    Ajouter l'invité
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* RSVP Tab */}
          {activeTab === "rsvp" && (
            <div className="space-y-6">
              <h3 className="font-serif text-2xl xs:text-3xl text-gray-900">
                Réponses Reçues
              </h3>
              <div className="space-y-4">
                {guests
                  .filter((g) => g.status !== "pending")
                  .map((guest) => (
                    <div
                      key={guest.id}
                      className="bg-white rounded-xl p-4 xs:p-6 border border-gray-200"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-base xs:text-lg text-gray-900 mb-1">
                            {guest.name}
                          </h4>
                          <p className="text-sm xs:text-base text-gray-600 mb-2">
                            {guest.email}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 text-xs xs:text-sm">
                            <span
                              className={`px-2 xs:px-3 py-1 rounded-full font-medium ${
                                guest.status === "confirmed"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {guest.status === "confirmed" ? "✓ Confirmé" : "✗ Refusé"}
                            </span>
                            <span className="text-gray-600">
                              {guest.guests} personne{guest.guests > 1 ? "s" : ""}
                            </span>
                            {guest.responseDate && (
                              <span className="text-gray-500">
                                Répondu le {new Date(guest.responseDate).toLocaleDateString("fr-FR")}
                              </span>
                            )}
                          </div>
                          {guest.message && (
                            <p className="text-sm xs:text-base text-gray-700 mt-3 italic border-l-4 border-amber-400 pl-3">
                              "{guest.message}"
                            </p>
                          )}
                          {guest.allergies && (
                            <p className="text-xs xs:text-sm text-amber-600 mt-2">
                              Allergies : {guest.allergies}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                {guests.filter((g) => g.status !== "pending").length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <Mail className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p>Aucune réponse reçue pour le moment</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoupleDashboard;

