import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from './Contacto.class';

function ComponentB({ contacto }) {
  return (
    <>
        <h2>{`Tu contacto ${contacto.name} ${contacto.lastName}`}</h2>
        <h3>{contacto.email}</h3>
        {contacto.online ? 'Contacto En Línea' : 'Contacto No Disponible'}
    </>
  );
};

ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};

export default ComponentB;
