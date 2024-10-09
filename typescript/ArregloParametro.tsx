import React from 'react';


interface ArregloParametroProps {
  numeros: number[];
}

function sumarElementos(arreglo: number[]): number {
  return arreglo.reduce((acc, curr) => acc + curr, 0);
}

const ArregloParametro: React.FC<ArregloParametroProps> = ({ numeros }) => {
  const suma = sumarElementos(numeros);

  return (
    <div>
      <h1>Arreglo Parametro</h1>
      <p>El arreglo es: {numeros.join(', ')}</p>
      <p>La suma de los elementos del arreglo es: {suma}</p>
    </div>
  );
};

export default ArregloParametro;