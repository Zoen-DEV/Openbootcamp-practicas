import React, { useRef } from "react";
import { Contactos } from "./class/Contacto.class";

const AddContacto = ({ add }) => {
  const nameRef = new useRef();
  const lastNameRef = new useRef();
  const cardRef = new useRef();

  const closeForm = (e) => {
    cardRef.current.classList.add("show-form");
  };
  const openForm = (e) => {
    cardRef.current.classList.remove("show-form");
  };

  const sendData = (e) => {
    e.preventDefault();
    const newContacto = new Contactos(
      nameRef.current.value,
      lastNameRef.current.value,
      Math.floor(Math.random() * 2) === 1 ? true : false
    );
    add(newContacto);
    nameRef.current.value = '';
    lastNameRef.current.value = '';
    cardRef.current.classList.add("show-form");
  };

  return (
    <>
      <button
        onClick={openForm}
        type="button"
        className="btn btn-outline-success"
      >
        <i className="bi bi-person-plus-fill"></i>
      </button>
      <form onSubmit={sendData} className="card show-form" ref={cardRef}>
        <button type="button" onClick={closeForm} className="close-card">
          <i className="bi bi-x-circle-fill"></i>
        </button>
        <span>Nombre:</span>
        <input
          autoFocus
          ref={nameRef}
          type="text"
          className="form-control"
          placeholder="Ingresa el nombre del usuarix"
          required
        />
        <span>Apellido:</span>
        <input
          ref={lastNameRef}
          type="text"
          className="form-control"
          placeholder="Ingresa el apellido del usuarix"
          required
        />
        <button type="submit" className="btn btn-success">
          <i className="bi bi-plus-square"></i>
        </button>
      </form>
    </>
  );
};

export default AddContacto;
