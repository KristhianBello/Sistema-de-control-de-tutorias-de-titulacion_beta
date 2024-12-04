import React from "react";
import styles from "./Header.module.css";

export const Header = ({ onLogout }) => {
    return (
        <header className={styles.header}>
            <h1>Bienvenido</h1>
            <button className={styles.button} onClick={onLogout}>
                Cerrar sesión
            </button>
        </header>
    );
};
