import styles from "./header.module.css";
import React, { useState } from "react";
import { Search, User, Menu, X, ChevronRight } from "lucide-react";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={transparent ? styles.headerWrapperTransparent : styles.headerWrapper}>
      <div className={styles.headerContainer}>
        {/* Left Side: Branding and Desktop Navigation */}
        <div className={styles.leftSection}>
          <div className={transparent ? styles.logoTransparent : styles.logo}>Skillflash</div>
          <nav className={styles.desktopNav}>
            <a href="#" className={transparent ? styles.navLinkActiveTransparent : styles.navLinkActive}>Skillflash</a>
            <a href="#" className={transparent ? styles.navLinkTransparent : styles.navLink}>Expert:innen werden</a>
            <a href="#" className={transparent ? styles.navLinkTransparent : styles.navLink}>Enterprise</a>
          </nav>
        </div>

        {/* Right Side: Quick Search & Profile Controls */}
        <div className={styles.rightSection}>
          <div className={transparent ? styles.miniSearchTransparent : styles.miniSearch}>
            <input 
              type="text" 
              placeholder="Skills finden..." 
              className={transparent ? styles.miniSearchInputTransparent : styles.miniSearchInput}
            />
            <button className={styles.miniSearchBtn} aria-label="Suche">
              <ChevronRight size={14} className="text-white" />
            </button>
          </div>

          <div className={styles.userMenuWrapper}>
            <button 
              className={transparent ? styles.menuToggleBtnTransparent : styles.menuToggleBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü öffnen"
            >
              <Menu size={18} className={transparent ? "text-white" : "text-gray-700"} />
              <div className={styles.avatarIcon}>
                <User size={16} className="text-red-500" />
              </div>
            </button>

            {/* Dropdown Menu */}
            {mobileMenuOpen && (
              <div className={styles.dropdownMenu}>
                <a href="#" className={styles.dropdownItemHighlight}>Registrieren</a>
                <a href="#" className={styles.dropdownItem}>Anmelden</a>
                <hr className={styles.dropdownDivider} />
                <a href="#" className={styles.dropdownItem}>Expert:innen werden</a>
                <a href="#" className={styles.dropdownItem}>Enterprise</a>
                <a href="#" className={styles.dropdownItem}>Hilfe?</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
