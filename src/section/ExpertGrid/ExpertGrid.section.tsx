"use client";

import React from "react";
import ExpertCard from "@/components/ExpertCard/ExpertCard";
import { Expert } from "@/data/experts";

interface ExpertGridProps {
  experts: Expert[];
}

export default function ExpertGrid({ experts }: ExpertGridProps) {
  return (
    <section className="expert-grid-section">
      {experts.length > 0 ? (
        <div className="expert-grid">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg font-medium">Keine Ergebnisse für deine Suche gefunden.</p>
          <p className="text-sm mt-1">Versuche es mit einem anderen Suchbegriff.</p>
        </div>
      )}
    </section>
  );
}
