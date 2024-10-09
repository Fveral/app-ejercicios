import React from 'react';

const datos = [7, 5, "sistemas", "hola", "adios", 2];


const textos: string[] = datos.filter(dato => typeof dato === 'string') as string[];
const textoMayor = textos.reduce((acc: string, curr: string) => acc.length > curr.length ? acc : curr, '');


const numeros: number[] = datos.filter(dato => typeof dato === 'number') as number[];
const suma = numeros.reduce((acc, curr) => acc + curr, 0);
const resta = numeros.reduce((acc, curr) => acc - curr);
const multiplicacion = numeros.reduce((acc, curr) => acc * curr, 1);
const division = numeros.reduce((acc, curr) => acc / curr);
const modulo = numeros.reduce((acc, curr) => acc % curr);

const ArregloOperaciones: React.FC = () => {
  return (
    <div>
      <h1>Resultados de Arreglo</h1>
      <p><strong>Texto mayor:</strong> {textoMayor}</p>
      <p><strong>Suma:</strong> {suma}</p>
      <p><strong>Resta:</strong> {resta}</p>
      <p><strong>Multiplicación:</strong> {multiplicacion}</p>
      <p><strong>División:</strong> {division}</p>
      <p><strong>Módulo:</strong> {modulo}</p>
    </div>
  );
};

export default ArregloOperaciones;