import React, { useState } from 'react';


function calcularAreaCuadrado(lado: number): number {
  return lado * lado;
}


export const AreaCuadrado: React.FC = () => {
  const [lado, setLado] = useState<number>(0);
  const [area, setArea] = useState<number | null>(null);

 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLado(Number(event.target.value));
  };

  
  const handleClick = () => {
    setArea(calcularAreaCuadrado(lado));
  };

  return (
    <div>
      <h1>Área del Cuadrado</h1>
      <input type="number" value={lado} onChange={handleChange} placeholder="Ingrese el lado del cuadrado" />
      <button onClick={handleClick}>Calcular Área</button>
      {area !== null && <p>El área del cuadrado es: {area}</p>}
    </div>
  );
};

export default AreaCuadrado;
