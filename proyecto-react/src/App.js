import React, { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { Header } from "./components/Header";
import { TutoriaForm } from "./components/TutoriaForm";
import { TutoriasList } from "./components/TutoriasList";
import { DocentePanel } from "./components/DocentePanel";

const App = () => {
  const [user, setUser] = useState(null); // Estado del usuario autenticado
  const [isRegister, setIsRegister] = useState(false); // Alternar entre login y registro
  const [tutorias, setTutorias] = useState([]); // Lista de tutorías solicitadas

  // Usuarios registrados simulados
  const usuariosRegistrados = {
    estudiante: {
      email: "e1312105503@live.uleam.edu.ec",
      password: "098765",
    },
    docente: {
      email: "p1301732150@live.uleam.edu.ec",
      password: "098765",
    },
  };

  // Manejar inicio de sesión
  const handleLogin = (email, password) => {
    if (
      email === usuariosRegistrados.estudiante.email &&
      password === usuariosRegistrados.estudiante.password
    ) {
      setUser("estudiante");
    } else if (
      email === usuariosRegistrados.docente.email &&
      password === usuariosRegistrados.docente.password
    ) {
      setUser("docente");
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  };

  // Cerrar sesión
  const handleLogout = () => {
    setUser(null);
  };

  // Solicitar tutoría (por estudiante)
  const handleSolicitarTutoria = (nuevaTutoria) => {
    setTutorias([...tutorias, { ...nuevaTutoria, estado: "Pendiente" }]);
  };

  // Actualizar estado de tutoría (por docente)
  const handleActualizarEstado = (id, nuevoEstado) => {
    setTutorias((prevTutorias) =>
      prevTutorias.map((tutoria, index) =>
        index === id ? { ...tutoria, estado: nuevoEstado } : tutoria
      )
    );
  };

  // Si no hay usuario autenticado, mostrar login o registro
  if (!user) {
    return (
      <div className="container">
        {isRegister ? (
          <RegisterForm
            onSwitchToLogin={() => setIsRegister(false)}
            onRegister={(name, email, password) => {
              console.log("Usuario registrado:", { name, email, password });
              setIsRegister(false);
            }}
          />
        ) : (
          <LoginForm
            onSwitchToRegister={() => setIsRegister(true)}
            onLogin={handleLogin}
          />
        )}
      </div>
    );
  }

  // Interfaz principal (estudiante o docente)
  return (
    <div>
      <Header onLogout={handleLogout} />
      {user === "estudiante" ? (
        <main>
          {/* Estudiante: Solicitar tutorías y ver lista */}
          <TutoriaForm onSolicitar={handleSolicitarTutoria} />
          <TutoriasList tutorias={tutorias} />
        </main>
      ) : (
        <main>
          {/* Docente: Panel de tutorías pendientes */}
          <DocentePanel
            tutorias={tutorias}
            onActualizarEstado={handleActualizarEstado}
          />
        </main>
      )}
    </div>
  );
};

export default App;

