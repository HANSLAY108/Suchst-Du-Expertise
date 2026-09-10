"use client";

import React, { useState } from "react";
import { Search, User, Menu, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-wrapper">
      <div className="header-container">
        {/* Left Side: Logo & Desktop Navigation */}
        <div className="header-brand-nav">
          <a href="#" className="header-logo">
            Skillflash
          </a>
          <nav className="header-nav hidden md:flex">
            <a href="#" className="header-nav-link">
              Expert:innen werden
            </a>
            <a href="#" className="header-nav-link">
              Enterprise
            </a>
          </nav>
        </div>

        {/* Right Side: Quick Search & Profile Menu Toggle */}
        <div className="header-right">
          {/* Mini Search Bar Pill */}
          <div className="header-mini-search">
            <input
              type="text"
              placeholder="Skills finden..."
              className="header-mini-search-input"
            />
            <button className="header-mini-search-btn" aria-label="Suche">
              <ChevronRight size={14} />
            </button>
          </div>

          {/* User Profile / Menu Pill Toggle */}
          <div className="header-user-menu">
            <button
              className="header-menu-pill"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menü öffnen"
            >
              <Menu size={16} className="text-white" />
              <div className="header-menu-avatar">
                <User size={14} className="text-[#ff334b]" />
              </div>
            </button>

            {/* Popover Dropdown Menu */}
            {menuOpen && (
              <div className="header-popover-dropdown">
                <a href="#" className="dropdown-item dropdown-item-highlight">
                  Registrieren
                </a>
                <a href="#" className="dropdown-item">
                  Anmelden
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  Expert:innen werden
                </a>
                <a href="#" className="dropdown-item">
                  Enterprise
                </a>
                <a href="#" className="dropdown-item">
                  Hilfe?
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
