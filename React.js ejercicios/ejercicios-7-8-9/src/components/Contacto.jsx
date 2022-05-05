import React, { useRef } from "react";

const Contacto = ({ info, status, remove, perfil }) => {
  const cardRef = new useRef();

  const closeModal = () => {
    cardRef.current.classList.add("show-form");
  };

  return (
    <>
      <tr className="table-active">
        <td>{info.name}</td>
        <td>{info.lastName}</td>
        <td>
          {info.completed ? (
            <i
              onClick={() => status(info)}
              style={{ color: "green" }}
              className="bi bi-people-fill estado"
            ></i>
          ) : (
            <i
              onClick={() => status(info)}
              style={{ color: "darkred" }}
              className="bi bi-people-fill estado"
            ></i>
          )}
        </td>
        <td className="mce">
          <i
            onClick={() => perfil(cardRef)}
            id="i2"
            className="bi bi-eye-fill"
          ></i>
          <i onClick={() => remove(info)} id="i3" className="bi bi-trash"></i>
        </td>
      </tr>
      <tr>
        <td>
          <div ref={cardRef} className="card show-form perfil">
            <div className="imgbtn-container">
              <img
                className="img-perfil"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="perfil"
              />
              <button
                type="button"
                onClick={closeModal}
                className="close-modal"
              >
                <i className="bi bi-x-circle-fill"></i>
              </button>
            </div>
            <div>
              <h3 className="nombre-contacto">
                {info.name} {info.lastName}{" "}
                {info.completed ? (
                  <i
                    onClick={() => status(info)}
                    style={{ color: "green" }}
                    className="bi bi-people-fill estado"
                  ></i>
                ) : (
                  <i
                    onClick={() => status(info)}
                    style={{ color: "darkred" }}
                    className="bi bi-people-fill estado"
                  ></i>
                )}
              </h3>
              <h6 className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                cum quam enim accusantium necessitatibus molestiae deserunt
                magnam culpa hic tempore mollitia commodi numquam dicta
                doloribus qui blanditiis, voluptates laudantium modi!
              </h6>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Contacto;
