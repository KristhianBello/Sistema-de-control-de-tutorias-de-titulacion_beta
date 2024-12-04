import React from "react";

export const ConfirmadasList = ({ tutorias }) => {
  return (
    <section id="tutorias-confirmadas">
      <h2>Tutorías Confirmadas</h2>
      <ul>
        {tutorias.length === 0 ? (
          <p>No hay tutorías confirmadas.</p>
        ) : (
          tutorias.map((tutoria, index) => (
            <li key={index}>
              Tema: {tutoria.tema}, Fecha: {tutoria.fecha}
            </li>
          ))
        )}
      </ul>
    </section>
  );
};
