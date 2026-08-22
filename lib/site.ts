export const site = {
  name: "Susanne Rohlinger",
  tagline: "Steuerberatung nach Maß",
  legal: "Steuerberater Susanne Rohlinger",
  address: {
    street: "Provinzialstraße 119",
    zip: "66787",
    city: "Wadgassen",
    country: "Deutschland",
  },
  phone: "+49 6834 40 05 30",
  fax: "+49 6834 40 05 320",
  email: "kontakt@stb-rohlinger.de",
  hours: [
    { day: "Montag bis Donnerstag", time: "8.00 bis 16.00 Uhr" },
    { day: "Freitag", time: "8.00 bis 14.00 Uhr" },
  ],
  memberships: [
    "Steuerberaterkammer Saarland",
    "Deutscher Steuerberaterverband e.V.",
    "Saarland Offensive für Gründer (SOG)",
    "BMWi-Initiative FRAUEN unternehmen",
  ],
} as const;

export const nav = [
  { label: "Kanzlei", href: "/ueber-uns" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Ressourcen", href: "/linksammlung" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/beratung" },
] as const;

/* Curated Unsplash — corporate office, architecture, business.
   Photographers credited on /impressum. */
export const images = {
  heroOffice: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85",
  building: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85",
  buildingLookUp: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=2400&q=85",
  meeting: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2400&q=85",
  boardroom: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=85",
  handshake: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2400&q=85",
  desk: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2400&q=85",
  laptop: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=85",
  city: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2400&q=85",
  cityGlass: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=2400&q=85",
  window: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=85",
  documents: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=85",
  advisor: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2400&q=85",
  workingLate: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=2400&q=85",
  strategy: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2400&q=85",
  handWriting: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=85",
  columns: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=2400&q=85",
  team: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=85",
} as const;
