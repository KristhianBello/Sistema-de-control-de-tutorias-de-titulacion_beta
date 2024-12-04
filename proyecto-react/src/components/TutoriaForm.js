import React, { useState } from "react";

export const TutoriaForm = ({ onSolicitar }) => {
  const [fecha, setFecha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSolicitar({ estudiante: "Estudiante Actual", fecha, estado: "Pendiente" });
    setFecha("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Solicitar Tutoría</h2>
      <label htmlFor="fecha">Fecha:</label>
      <input
        type="datetime-local"
        id="fecha"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
      />
      <button type="submit">Solicitar</button>
    </form>
  );
};
