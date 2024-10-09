import React from 'react';

const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const divididoPorCinco = arreglo.map(num => num / 5);

export const ArregloDivididos: React.FC = () => {
  return (
    <div>
      <h1>Arreglo Divididos</h1>
      <ul>
        {divididoPorCinco.map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArregloDivididos;