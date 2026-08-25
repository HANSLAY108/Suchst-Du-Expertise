export interface Expert {
  id: number;
  badge: string;
  badgeBg: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  duration: string;
}

export const EXPERTS_DATA: Expert[] = [
  {
    id: 1,
    badge: "Projektmanagement",
    badgeBg: "bg-cyan-700",
    title: "Als Projektmanagement wird das Initiieren, Planen, Steuern, ..",
    description: "Mehr anzeigen",
    imageUrl: "/images/card 1.jpg",
    tags: ["Klassisch", "Agil"],
    duration: "24.."
  },
  {
    id: 2,
    badge: "Frontend Development",
    badgeBg: "bg-purple-900",
    title: "Frontend Development bezeichnet eine Hybridfunktion aus ..",
    description: "Mehr anzeigen",
    imageUrl: "/images/card 2.jpg",
    tags: ["Javascript", "Bootstrap"],
    duration: "24.."
  },
  {
    id: 3,
    badge: "Grafik Design",
    badgeBg: "bg-purple-900",
    title: "Grafikdesign oder Kommunikationsdesign ist eine Tätigkeit, Sprache, ..",
    description: "Mehr anzeigen",
    imageUrl: "/images/card 3.jpg",
    tags: ["Photoshop", "Subcall"],
    duration: "24.."
  },
  {
    id: 4,
    badge: "Training",
    badgeBg: "bg-purple-950",
    title: "Training ist die planmäßige und systematische Realisation von ..",
    description: "Mehr anzeigen",
    imageUrl: "/images/card 4.jpg",
    tags: ["Personal", "Keynote"],
    duration: "24.."
  },
  {
    id: 5,
    badge: "Fremdsprache",
    badgeBg: "bg-blue-950",
    title: "Sprache, die ein Mensch zusätzlich zur Muttersprache, jedoch zu eine..",
    description: "Mehr anzeigen",
    imageUrl: "/images/card 5.jpg",
    tags: ["Englisch", "Spanisch"],
    duration: "24.."
  },
  {
    id: 6,
    badge: "Zeichnen",
    badgeBg: "bg-purple-900",
    title: "Der Begriff Design (engl. Zeichnung, Muster) umfasst extrem der ..",
    description: "Mehr anzeigen",
    imageUrl: "/images/card 6.jpg",
    tags: ["Flipchart", "Cartoon"],
    duration: "24.."
  },
  {
    id: 7,
    badge: "Führung",
    badgeBg: "bg-slate-900",
    title: "Führung verlangt im Wesentlichen, Menschen direkt und indirekt so zu ..",
    description: "Mehr anzeigen",
    imageUrl: "/images/card 7.jpg",
    tags: ["Holschuld", "Top Down"],
    duration: "24.."
  },
  {
    id: 8,
    badge: "Design Thinking",
    badgeBg: "bg-black",
    title: "Design Thinking ist ein Ansatz, der zum Lösen von Problemen und zur ..",
    description: "Mehr anzeigen",
    imageUrl: "/images/card 8.jpg",
    tags: ["Research", "Prototype"],
    duration: "24.."
  },
  {
    id: 9,
    badge: "Management",
    badgeBg: "bg-slate-900",
    title: "In seiner weitesten Form wird unter Management eine zielgerichtete ..",
    description: "Mehr anzeigen",
    imageUrl: "/images/Card 9.jpg",
    tags: ["OKR", "Lean"],
    duration: "24.."
  },
  {
    id: 10,
    badge: "Lean Startup",
    badgeBg: "bg-purple-900",
    title: "Lean Startup ist in der Betriebs-wirtschaftslehre der Anglizismus ..",
    description: "Mehr anzeigen",
    imageUrl: "/images/card 10.jpg",
    tags: ["Bauen", "Messen"],
    duration: "24.."
  },
  {
    id: 11,
    badge: "Blockchain",
    badgeBg: "bg-black",
    title: "Dezentrale, chronologisch aktualisierte Datenbank mit einem ..",
    description: "Mehr anzeigen",
    imageUrl: "/images/card 11.jpg",
    tags: ["STO", "Architektur"],
    duration: "24.."
  }
];
