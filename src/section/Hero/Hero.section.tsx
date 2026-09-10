"use client";

import React from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import Button from "@/components/ui/Button";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  return (
    <section className="hero-wrapper">
      <div className="hero-content">
        {/* Title */}
        <h1 className="hero-title">
          Expert:innen, Events und diverse Skills
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Wir vermitteln fundierte Skills für Dich und Dein Team durch diverse Formate und professionelle Expert:innen.
        </p>

        {/* Search Bar */}
        <div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center mt-[10px]">
          <Button variant="filterBtn">
            <span>Suche konfigurieren</span>
            <span className="text-white text-xs ml-1">∇</span>
          </Button>
        </div>
      </div>

      {/* Hero Downward Arc Curve Transition */}
      <div className="hero-curve-divider">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            fill="#ffffff"
            d="M0,0 C480,95 960,95 1440,0 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
}
