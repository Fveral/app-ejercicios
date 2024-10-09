import React from 'react';

const numeros = [1, 2, 3, 4];
const parOImpar = numeros.map(num => (num % 2 === 0 ? 'par' : 'impar'));

export const ArregloParImpar: React.FC = () => {
  return (
    <div>
      <h1>Números Par o Impar</h1>
      <ul>
        {parOImpar.map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArregloParImpar;