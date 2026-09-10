"use client";

import React from "react";
import { Expert } from "@/data/experts";

interface ExpertCardProps {
  expert: Expert;
}

export default function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <div className="expert-card">
      {/* Banner Image with Overlay Badge */}
      <div className="expert-card-image-wrap">
        <img
          src={expert.imageUrl}
          alt={expert.badge}
          className="expert-card-img"
        />
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
