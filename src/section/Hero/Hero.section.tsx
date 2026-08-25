import styles from "./hero.module.css";
import React from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import { SlidersHorizontal } from "lucide-react";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Main Heading */}
        <h1 className={styles.mainTitle}>
          Expert:innen, Events und diverse Skills
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          Wir vermitteln fundierte Skills für Dich und Dein Team durch diverse Formate und professionelle Expert:innen.
        </p>

        {/* Search Bar */}
        <div className="mt-8 mb-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Filter / Config Button */}
        <div className="flex justify-center">
          <button className={styles.filterBtn}>
            <span>Suche konfigurieren</span>
            <SlidersHorizontal size={14} className="text-white opacity-90" />
          </button>
        </div>
      </div>

      {/* Decorative Wavy/Curved White Transition to White Content Card */}
      <div className={styles.curveWrapper}>
        <svg 
          viewBox="0 0 1440 120" 
          className={styles.curveSvg} 
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,58.7C1120,43,1280,21,1360,10.7L1440,0L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
