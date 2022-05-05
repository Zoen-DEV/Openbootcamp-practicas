import React from "react";
import Contacto from "./Contacto";
import "../styles/lista.scss";

const Lista = () => {

    

  return (
    <div className="lista table">
      <table className="table table-info">
        <thead>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Estado</th>
            <th>Mostrar/Crear/Eliminar</th>
        </thead>
        <tbody>
          <Contacto />
        </tbody>
      </table>
    </div>
  );
};

export default Lista;
