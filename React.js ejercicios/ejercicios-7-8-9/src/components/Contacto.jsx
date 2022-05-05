import React from "react";

const Contacto = () => {
  return (
    <>
      <tr className="table-active">
        <td>Jose</td>
        <td>Hernandes</td>
        <td>
          {1 < 2 ? (
            <i class="bi bi-lightbulb-fill estado"></i>
          ) : (
            <i class="bi bi-lightbulb estado"></i>
          )}
        </td>
        <td className="mce">
          <i id="i1" class="bi bi-search"></i>
          <i id="i2" class="bi bi-pencil-square"></i>
          <i id="i3" class="bi bi-trash"></i>
        </td>
      </tr>
    </>
  );
};

export default Contacto;
