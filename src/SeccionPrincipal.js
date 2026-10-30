import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  // Usamos el estado para controlar si mostramos un mensaje secreto o descuento
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal">
      {/* Adapta este título e imagen a tu temática */}
      <h1>Bienvenidos a Gameclub</h1>
      <p>Ofrecemos la mejor informacion gamer.</p>

      <img
        src="https://static.wikia.nocookie.net/eswikia/images/1/1b/Jugador.jpg/revision/latest/scale-to-width-down/732?cb=20160904003233"
        alt="Imagen representativa de tu temática"
        className="imagen-destacada"
      />

      <br />
      <button
        className="boton-accion"
        onClick={() => setMostrarMensaje(!mostrarMensaje)}
      >
        {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}
      </button>

      {/* El mensaje solo aparece si el estado es verdadero */}
      {mostrarMensaje && (
        <p className="mensaje-sorpresa">
          ¡Felicidades! Tienes un 20% de descuento en wikis premium.
        </p>
      )}
    </main>
  );
}

export default SeccionPrincipal;