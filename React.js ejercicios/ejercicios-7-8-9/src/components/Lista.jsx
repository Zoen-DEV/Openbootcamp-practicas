import React, { useRef, useEffect, useState } from "react";
import { Contactos } from "./class/Contacto.class";
import Contacto from "./Contacto";
import "../styles/lista.scss";
import AddContacto from "./AddContacto";

const Lista = () => {
  const tempRef = new useRef();
  const [contacto, setContacto] = useState(["i"]);

  useEffect(() => {
    return () => {};
  }, [contacto]);

  const conected = (item) => {
    const index = contacto.indexOf(item);
    const tempArr = [...contacto];
    tempArr[index].completed = !tempArr[index].completed;
    setContacto(tempArr);
  };

  const add = (item) => {
    const tempArr = [...contacto];
    tempArr.push(item);
    setContacto(tempArr);
  };

  const remove = (item) => {
    const index = contacto.indexOf(item);
    const tempArr = [...contacto];
    tempArr.splice(index, 1);
    setContacto(tempArr);
    console.log(contacto.length)
    if(contacto.length === 2){
      tempRef.current.classList.remove('no-cont');
    }
  };

  return (
    <div className="lista table">
      <table className="table table-info">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Estado</th>
            <th>Mostrar/Crear/Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {contacto.map((item, index) => {
            if (index !== 0) {
              tempRef.current.classList.add('no-cont');
              return (
                <Contacto
                  status={conected}
                  key={index}
                  info={item}
                  add={add}
                  remove={remove}
                  arr={contacto}
                ></Contacto>
              );
            } else{
              return (
                <tr ref={tempRef} key={index} className="table-active" style={{ color: "#aaa" }}>
                  <td>No tienes</td>
                  <td>ningun contacto</td>
                  <td>si deseas</td>
                  <td>puedes agregar unx</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <AddContacto add={add} />
    </div>
  );
};

export default Lista;
