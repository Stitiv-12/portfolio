import React, { useState } from "react";
import "./header.css"; // Importation du fichier CSS
import Flag from "react-world-flags";
import { FiChevronDown } from "react-icons/fi"; // Feather Icons

const Header = () => {
  const [language, setLanguage] = useState("fr"); // Langue sélectionnée
  const [dropdownVisible, setDropdownVisible] = useState(false); // Contrôle la visibilité du menu

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // Change la langue sélectionnée
    setDropdownVisible(false); // Cache le menu déroulant après sélection
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="link">Accueil</a>
        <a href="#about" className="link">À propos</a>
        <a href="#contact" className="link">Contact</a>
      </nav>
      <div className="language-selector" style={{ position: "relative" }}>
        <button className="language-button" style={{ display: "flex", alignItems: "center", gap: "10px" }} onClick={() => setDropdownVisible(!dropdownVisible)}>
          <Flag code={language === "fr" ? "FR" : "GB"} style={{ width: "20px" }} />
          <FiChevronDown title="Dropdown Icon" />
          {dropdownVisible && (
            <div className="dropdown" style={{position: "absolute", top: "100%", width:"100%", height:'100%', alignItems:"center",}} >
              {language !== "fr" && (
                <div className="dropdown-item" style={{ cursor: "pointer", display: "flex", alignItems: "center",width: "100%" }} onClick={() => handleLanguageChange("fr")}>
                  <Flag code="FR" style={{ width: "20px" }} />
                </div>
              )}
              {language !== "en" && (
                <div className="dropdown-item" style={{  cursor: "pointer", display: "flex", alignItems: "center",width: "100%" }} onClick={() => handleLanguageChange("en")}>
                  <Flag code="GB" style={{ width: "20px" }} /> 
                </div>
              )}
            </div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
