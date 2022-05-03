import React, { useState, useEffect } from "react";

const ComponenteFuncional = () => {
  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [user, setUser] = useState(initialState);

  const tick = () => {
    setUser((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }

  useEffect(() => {
    user.timerID = setInterval(() => tick(), 1000);
    return () => {clearInterval(user.timerID)}
  }, [])

  return (
    <>
      <div className="clock">
        <h2>Hora Actual: {user.fecha.toLocaleTimeString()}</h2>
        <h3>{user.nombre} {user.apellidos}</h3>
        <h1>Edad: {user.edad}</h1>
      </div>
    </>
  );
};

export default ComponenteFuncional;
