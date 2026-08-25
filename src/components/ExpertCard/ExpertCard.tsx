import styles from "./expertcard.module.css";
import React from "react";
import { Expert } from "@/data/experts";

interface ExpertCardProps {
  expert: Expert;
}

export default function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <div className={styles.cardContainer}>
      {/* Top Banner Image with Overlay Badge */}
      <div className={styles.imageWrapper}>
        <img
          src={expert.imageUrl}
          alt={expert.badge}
          className={styles.cardImage}
        />
        <div className={styles.imageOverlay} />
        <div className={styles.badgeTag}>
          {expert.badge}
        </div>
      </div>

      {/* Card Content Body */}
      <div className={styles.cardBody}>
        <p className={styles.cardTitle}>{expert.title}</p>
        
        <a href="#" className={styles.linkMore}>
          {expert.description}
        </a>

        {/* Footer Pills & Metadata */}
        <div className={styles.cardFooter}>
          <div className={styles.tagPills}>
            {expert.tags.map((tag, idx) => (
              <span key={idx} className={styles.pill}>
                {tag}
              </span>
            ))}
          </div>
          <span className={styles.durationText}>{expert.duration}</span>
        </div>
      </div>
    </div>
  );
}
