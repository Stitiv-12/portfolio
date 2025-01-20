import React, { useEffect, useRef } from "react";
import "./home.css"; // Importation du fichier CSS

const Home = () => {
  return (
    <div className="Home">
      <div className="info-global">
        <h1>Steven Vaidie</h1>
        <div className="info-detail">
            <div className="entreprise">
            <h1>Entreprise</h1>
            <p>Cimpa</p>
            </div>
            <div>
                <h1>Ecole</h1>
                <p>IUT Nantes</p>
            </div>
            <div>
                <h1>Formation</h1>
                <p>BUT INFORMATIQUE</p>
            </div>
        </div> 
      </div>
      <div className="Categories">
        <a href="#home" className="Categorie" >
          Mon Parcour
        </a>
        <a href="#home" className="Categorie" >
          Mes Projets
        </a>
        <a href="#home" className="Categorie" >
          Mes Objectifs
        </a>
        <a href="#home" className="Categorie" >
          Mes Compétences
        </a>
        <a href="#home" className="Categorie" >
          Mes à Coté
        </a>
      </div>
    </div>
  );
};

export default Home;
