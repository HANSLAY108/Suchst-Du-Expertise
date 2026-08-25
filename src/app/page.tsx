"use client";

import React, { useState } from "react";
import Header from "@/section/Header/Header.section";
import Hero from "@/section/Hero/Hero.section";
import ExpertGrid from "@/section/ExpertGrid/ExpertGrid.section";
import { EXPERTS_DATA } from "@/data/experts";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredExperts = EXPERTS_DATA.filter((expert) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      expert.badge.toLowerCase().includes(q) ||
      expert.title.toLowerCase().includes(q) ||
      expert.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <main className="min-h-screen bg-[#6a11b0] flex flex-col">
      {/* Hero Banner Section with Integrated Top Header */}
      <div className="relative w-full">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header transparent={true} />
        </div>
        <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {/* Expert Cards Section Grid */}
      <ExpertGrid experts={filteredExperts} />
    </main>
  );
}
