import React from "react";
import styles from "./Table.module.css";
import "./DocentePanel.css";


export const DocentePanel = ({ tutorias, onActualizarEstado }) => {
    const aceptarTutoria = (index) => {
        onActualizarEstado(index, "Aceptada");
    };

    const cancelarTutoria = (index) => {
        onActualizarEstado(index, "Cancelada");
    };

    return (
        <div className={styles.container}>
            <h2>Solicitudes de Tutorías Pendientes</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>Fecha Solicitada</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tutorias.map((tutoria, index) => (
                        <tr key={index}>
                            <td>{tutoria.estudiante}</td>
                            <td>{tutoria.fecha}</td>
                            <td>{tutoria.estado}</td>
                            <td>
                                {tutoria.estado === "Pendiente" && (
                                    <>
                                        <button
                                            className={styles["aceptar-button"]}
                                            onClick={() => aceptarTutoria(index)}
                                        >
                                            Aceptar
                                        </button>
                                        <button
                                            className={styles["rechazar-button"]}
                                            onClick={() => cancelarTutoria(index)}
                                        >
                                            Cancelar
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

