import React from "react";
import "./App.css";

function Menu() {
  return (
    <nav className="menu-navegacion">
      {/* Cambia "Mi Marca" por el nombre de tu proyecto */}
      <h2 className="logo">Gameclub</h2>
      <ul>
        <li>Inicio</li>
        <li>Sobre Nosotros</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Menu;