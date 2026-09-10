"use client";

import React from "react";
import { Search, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="hero-search-container">
      <div className="hero-search-box">
        <Search size={22} className="text-[#ff334b] mr-3 shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Skills für den Erfolg finden.."
          className="hero-search-input"
        />
        <Button variant="searchAction" aria-label="Suchen">
          <ChevronRight size={22} strokeWidth={2.5} />
        </Button>
      </div>
    </div>
  );
}
