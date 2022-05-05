import React from "react";

const Contacto = ({ info, status, remove, arr }) => {
  console.log(arr)
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
                className="bi bi-lightbulb-fill estado"
              ></i>
            ) : (
              <i
                onClick={() => status(info)}
                style={{ color: "darkred" }}
                className="bi bi-lightbulb-fill estado"
              ></i>
            )}
          </td>
          <td className="mce">
            <i id="i2" className="bi bi-eye-fill"></i>
            <i onClick={() => remove(info)} id="i3" className="bi bi-trash"></i>
          </td>
        </tr>
    </>
  );
};

export default Contacto;
