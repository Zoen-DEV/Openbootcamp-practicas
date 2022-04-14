import React from 'react';
import ComponentB from './ComponentB';
import { Contacto } from './Contacto.class';

const ComponenteA = () => {
    const contactoInfo = new Contacto(
        "Zoen",
        "Holgado",
        "enzoholgadodev@gmail.com",
        false
    );
  return (
    <>
        <ComponentB contacto={contactoInfo} />
    </>
  )
}

export default ComponenteA;