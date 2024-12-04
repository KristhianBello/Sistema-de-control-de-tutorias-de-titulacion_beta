import React from "react";

export const TutoriasList = ({ tutorias }) => {
  return (
    <div className="container">
      <h2>Tus Tutorías</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {tutorias.map((tutoria, index) => (
            <tr key={index}>
              <td>{tutoria.fecha}</td>
              <td>{tutoria.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
