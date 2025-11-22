import React, { useState } from "react";
import {
  Users,
  CheckCircle,
  Clock,
  XCircle,
  Mail,
  Plus,
  Search,
  Edit,
  Trash2,
  Send,
  BarChart3,
  Home,
  ArrowLeft,
  Settings,
  Bell,
  Calendar,
  FileText,
} from "lucide-react";

const CoupleSpace = ({ onBackToSite }) => {
  const [activePage, setActivePage] = useState("home");
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
      alert("Invitée ajouté avec succès !");
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

  const navigationItems = [
    { id: "home", label: "Accueil", icon: Home },
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "guests", label: "Invités", icon: Users },
    { id: "create", label: "Créer Invitation", icon: Plus },
    { id: "rsvp", label: "Réponses RSVP", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 overflow-x-hidden w-full max-w-full">
      {/* Header Professionnel */}
      <header className="bg-white border-b border-amber-200/50 shadow-sm sticky top-0 z-40 w-full max-w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16 xs:h-20 min-w-0">
            {/* Logo et Titre */}
            <div className="flex items-center gap-2 xs:gap-3 min-w-0 flex-1">
              <button
                onClick={onBackToSite}
                className="p-2 rounded-lg hover:bg-amber-50 text-gray-600 hover:text-amber-600 transition-colors flex-shrink-0"
                title="Retour au site"
              >
                <ArrowLeft className="w-5 h-5 xs:w-6 xs:h-6" />
              </button>
              <div className="h-8 xs:h-10 w-px bg-gray-300 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h1 className="font-serif text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-amber-800 truncate">
                  Espace Marié
                </h1>
                <p className="text-xs xs:text-sm text-gray-600 hidden sm:block truncate">
                  Gestion de votre mariage
                </p>
              </div>
            </div>

            {/* Actions Header */}
            <div className="flex items-center gap-2 xs:gap-3 flex-shrink-0">
              <button className="p-2 rounded-lg hover:bg-amber-50 text-gray-600 hover:text-amber-600 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-amber-50 text-gray-600 hover:text-amber-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-6 xs:py-8 w-full overflow-x-hidden">
        <div className="flex flex-col lg:flex-row gap-6 xs:gap-8 w-full min-w-0">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0 w-full lg:w-64">
            <nav className="bg-white rounded-xl shadow-sm border border-amber-200/50 p-2 xs:p-3 sticky top-24 w-full">
              <ul className="space-y-1 w-full">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <li key={item.id} className="w-full">
                      <button
                        onClick={() => setActivePage(item.id)}
                        className={`w-full flex items-center gap-2 xs:gap-3 px-3 xs:px-4 py-2.5 xs:py-3 rounded-lg text-sm xs:text-base font-medium transition-all min-w-0 ${
                          isActive
                            ? "bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-md"
                            : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                        }`}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 w-full overflow-x-hidden">
            {/* Page d'Accueil */}
            {activePage === "home" && (
              <div className="space-y-6 xs:space-y-8">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl p-6 xs:p-8 sm:p-10 text-white shadow-xl">
                  <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4">
                    Bienvenue dans votre espace
                  </h2>
                  <p className="text-base xs:text-lg sm:text-xl text-amber-50 mb-6 xs:mb-8">
                    Gérez vos invitations, suivez les réponses et organisez votre mariage en toute simplicité.
                  </p>
                  <div className="flex flex-wrap gap-3 xs:gap-4 w-full">
                    <button
                      onClick={() => setActivePage("create")}
                      className="px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 bg-white text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition-colors shadow-lg text-sm xs:text-base whitespace-nowrap"
                    >
                      <span className="flex items-center gap-2">
                        <Plus className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0" />
                        <span className="truncate">Nouvelle invitation</span>
                      </span>
                    </button>
                    <button
                      onClick={() => setActivePage("guests")}
                      className="px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30 text-sm xs:text-base whitespace-nowrap"
                    >
                      Voir tous les invités
                    </button>
                  </div>
                </div>

                {/* Statistiques Rapides */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6">
                  <div className="bg-white rounded-xl p-4 xs:p-6 border border-amber-200/50 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <Users className="w-5 h-5 text-amber-600" />
                      </div>
                      <span className="text-xs xs:text-sm text-gray-600">Total</span>
                    </div>
                    <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900">
                      {stats.total}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 xs:p-6 border border-green-200/50 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-xs xs:text-sm text-gray-600">Confirmés</span>
                    </div>
                    <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900">
                      {stats.confirmed}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {stats.totalGuests} personne{stats.totalGuests > 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 xs:p-6 border border-yellow-200/50 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <Clock className="w-5 h-5 text-yellow-600" />
                      </div>
                      <span className="text-xs xs:text-sm text-gray-600">En attente</span>
                    </div>
                    <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900">
                      {stats.pending}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 xs:p-6 border border-red-200/50 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <XCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <span className="text-xs xs:text-sm text-gray-600">Refusés</span>
                    </div>
                    <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900">
                      {stats.declined}
                    </p>
                  </div>
                </div>

                {/* Actions Rapides */}
                <div className="grid md:grid-cols-2 gap-4 xs:gap-6">
                  <div className="bg-white rounded-xl p-6 xs:p-8 border border-amber-200/50 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-amber-100 rounded-xl">
                        <Calendar className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base xs:text-lg text-gray-900">Prochaines actions</h3>
                        <p className="text-xs xs:text-sm text-gray-600">Invitations en attente d'envoi</p>
                      </div>
                    </div>
                    <p className="text-xl xs:text-2xl font-bold text-amber-600 mb-2">
                      {guests.filter((g) => !g.invitationSent).length}
                    </p>
                    <button
                      onClick={() => setActivePage("guests")}
                      className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                    >
                      Voir les détails →
                    </button>
                  </div>

                  <div className="bg-white rounded-xl p-6 xs:p-8 border border-amber-200/50 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base xs:text-lg text-gray-900">Taux de réponse</h3>
                        <p className="text-xs xs:text-sm text-gray-600">Réponses reçues</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full transition-all"
                          style={{
                            width: `${stats.total > 0 ? (stats.responseRate / stats.total) * 100 : 0}%`,
                          }}
                        />
                      </div>
                      <span className="text-lg xs:text-xl font-bold text-gray-700">
                        {stats.total > 0 ? Math.round((stats.responseRate / stats.total) * 100) : 0}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Dashboard Tab */}
            {activePage === "dashboard" && (
              <div className="space-y-6 xs:space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-xl xs:text-2xl sm:text-3xl md:text-4xl text-gray-900">
                    Dashboard
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6">
                  <div className="bg-white rounded-xl p-4 xs:p-6 border border-amber-200/50 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 xs:w-6 xs:h-6 text-amber-600" />
                      <span className="text-xs xs:text-sm text-gray-600">Total</span>
                    </div>
                    <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900">
                      {stats.total}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 xs:p-6 border border-green-200/50 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 xs:w-6 xs:h-6 text-green-600" />
                      <span className="text-xs xs:text-sm text-gray-600">Confirmés</span>
                    </div>
                    <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900">
                      {stats.confirmed}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {stats.totalGuests} personne{stats.totalGuests > 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 xs:p-6 border border-yellow-200/50 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 xs:w-6 xs:h-6 text-yellow-600" />
                      <span className="text-xs xs:text-sm text-gray-600">En attente</span>
                    </div>
                    <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900">
                      {stats.pending}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 xs:p-6 border border-red-200/50 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <XCircle className="w-5 h-5 xs:w-6 xs:h-6 text-red-600" />
                      <span className="text-xs xs:text-sm text-gray-600">Refusés</span>
                    </div>
                    <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900">
                      {stats.declined}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 xs:p-8 border border-amber-200/50 shadow-sm">
                  <h4 className="font-semibold text-lg xs:text-xl text-gray-900 mb-4">
                    Taux de réponse
                  </h4>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-4 xs:h-6">
                      <div
                        className="bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full transition-all"
                        style={{
                          width: `${stats.total > 0 ? (stats.responseRate / stats.total) * 100 : 0}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm xs:text-base font-semibold text-gray-700">
                      {stats.total > 0 ? Math.round((stats.responseRate / stats.total) * 100) : 0}%
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Guests List Tab */}
            {activePage === "guests" && (
              <div className="space-y-6 xs:space-y-8">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <h2 className="font-serif text-xl xs:text-2xl sm:text-3xl md:text-4xl text-gray-900">
                    Liste des Invités
                  </h2>
                  <div className="flex flex-col xs:flex-row gap-3 w-full sm:w-auto min-w-0">
                    <div className="relative flex-1 xs:flex-initial min-w-0">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Rechercher..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm xs:text-base w-full xs:w-64 max-w-full focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm xs:text-base focus:ring-2 focus:ring-amber-500 focus:border-transparent w-full xs:w-auto min-w-[150px]"
                    >
                      <option value="all">Tous les statuts</option>
                      <option value="confirmed">Confirmés</option>
                      <option value="pending">En attente</option>
                      <option value="declined">Refusés</option>
                    </select>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-amber-200/50 shadow-sm overflow-hidden w-full">
                  <div className="overflow-x-auto w-full">
                    <table className="w-full border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-amber-50 border-b border-amber-200">
                          <th className="text-left p-3 xs:p-4 text-xs xs:text-sm font-semibold text-gray-700 min-w-[120px]">
                            Nom
                          </th>
                          <th className="text-left p-3 xs:p-4 text-xs xs:text-sm font-semibold text-gray-700 min-w-[180px]">
                            Email
                          </th>
                          <th className="text-center p-3 xs:p-4 text-xs xs:text-sm font-semibold text-gray-700 min-w-[80px]">
                            Invités
                          </th>
                          <th className="text-center p-3 xs:p-4 text-xs xs:text-sm font-semibold text-gray-700 min-w-[100px]">
                            Statut
                          </th>
                          <th className="text-center p-3 xs:p-4 text-xs xs:text-sm font-semibold text-gray-700 min-w-[100px]">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredGuests.map((guest) => (
                          <tr
                            key={guest.id}
                            className="border-b border-gray-100 hover:bg-amber-50/50 transition-colors"
                          >
                            <td className="p-3 xs:p-4 text-sm xs:text-base text-gray-900 break-words max-w-[150px]">
                              {guest.name}
                            </td>
                            <td className="p-3 xs:p-4 text-sm xs:text-base text-gray-600 break-words max-w-[200px]">
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
              </div>
            )}

            {/* Create Invitation Tab */}
            {activePage === "create" && (
              <div className="max-w-3xl mx-auto space-y-6 xs:space-y-8">
                <h2 className="font-serif text-xl xs:text-2xl sm:text-3xl md:text-4xl text-gray-900">
                  Créer une Invitation
                </h2>
                <div className="bg-white rounded-xl p-6 xs:p-8 border border-amber-200/50 shadow-sm space-y-4 xs:space-y-6">
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
            {activePage === "rsvp" && (
              <div className="space-y-6 xs:space-y-8">
                <h2 className="font-serif text-xl xs:text-2xl sm:text-3xl md:text-4xl text-gray-900">
                  Réponses Reçues
                </h2>
                <div className="space-y-4">
                  {guests
                    .filter((g) => g.status !== "pending")
                    .map((guest) => (
                      <div
                        key={guest.id}
                        className="bg-white rounded-xl p-4 xs:p-6 border border-amber-200/50 shadow-sm"
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
                    <div className="text-center py-12 text-gray-500 bg-white rounded-xl border border-amber-200/50">
                      <Mail className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p>Aucune réponse reçue pour le moment</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default CoupleSpace;

