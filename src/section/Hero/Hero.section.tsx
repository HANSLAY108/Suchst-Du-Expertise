"use client";

import React from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import Button from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

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
        <div className="mb-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center">
          <Button variant="filterBtn">
            <span>Suche konfigurieren</span>
            <ChevronDown size={18} className="text-white ml-1" />
          </Button>
        </div>
      </div>

      {/* Curved SVG Divider Transition */}
      <div className="hero-curve-divider">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-16"
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
