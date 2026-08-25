import styles from "./searchbar.module.css";
import React from "react";
import { Search, ChevronRight } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.inputBox}>
        <Search className={styles.searchIcon} size={20} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Skills für den Erfolg finden.."
          className={styles.inputField}
        />
        <button className={styles.actionBtn} aria-label="Suchen">
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}
