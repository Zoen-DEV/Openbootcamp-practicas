import React, { useRef } from "react";

const MostrarContacto = () => {
  const cardRef = new useRef();

  const closeModal = () => {
      cardRef.current.classList.add('show-form')
  };

  return (
    <>
      <div ref={cardRef} className="card">
        <div className="imgbtn-container">
          <img
            className="img-perfil"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="perfil"
          />
          <button type="button" onClick={closeModal} className="close-modal">
            <i className="bi bi-x-circle-fill"></i>
          </button>
        </div>
        <div>
          <h3 className="nombre-contacto">nombre</h3>
          <h6 className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam cum
            quam enim accusantium necessitatibus molestiae deserunt magnam culpa
            hic tempore mollitia commodi numquam dicta doloribus qui blanditiis,
            voluptates laudantium modi!
          </h6>
        </div>
      </div>
    </>
  );
};

export default MostrarContacto;
