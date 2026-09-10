"use client";

import React from "react";
import { Expert } from "@/data/experts";
import { PlusCircle, Share2, BookmarkPlus } from "lucide-react";

interface ExpertCardProps {
  expert: Expert;
}

export default function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <div className="expert-card group">
      {/* Banner Image with Fading Overlay, Badge & Hover Action Icons */}
      <div className="expert-card-image-wrap">
        <img
          src={expert.imageUrl}
          alt={expert.badge}
          className="expert-card-img"
        />
        {/* Fading White Overlay Gradient */}
        <div className="expert-card-white-overlay" />

        {/* Top Right Hover Action Icons (Plus, Share, Bookmark) */}
        <div className="expert-card-hover-actions">
          <button className="expert-action-btn" aria-label="Hinzufügen">
            <PlusCircle size={18} className="text-[#8b5cf6]" />
          </button>
          <button className="expert-action-btn" aria-label="Teilen">
            <Share2 size={16} className="text-[#8b5cf6]" />
          </button>
          <button className="expert-action-btn" aria-label="Merken">
            <BookmarkPlus size={16} className="text-[#ff334b]" />
          </button>
        </div>

        {/* Dark Badge Overlay */}
        <div className="expert-card-badge">
          {expert.badge}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="expert-card-body">
        <h3 className="expert-card-title">{expert.title}</h3>

        <a href="#" className="expert-card-link">
          {expert.description}
        </a>

        {/* Card Footer: Tag Pills & Metadata */}
        <div className="expert-card-footer">
          <div className="expert-tags-container">
            {expert.tags.map((tag, idx) => (
              <span key={idx} className="expert-tag-pill">
                {tag}
              </span>
            ))}
          </div>
          <span className="expert-duration-tag">{expert.duration}</span>
        </div>
      </div>
    </div>
  );
}
