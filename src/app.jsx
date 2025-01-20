import React, { useState } from "react";
import "./app.css"; // Importation du fichier CSS
import Header from "./header";
import Home from "./home";

const App = () => {
  return (
    <div className="global">
      <Header/>
      <Home/>
    </div>
    
  );
};

export default App;
