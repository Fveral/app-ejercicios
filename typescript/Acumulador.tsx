import React, { useState } from 'react';

const Acumulador: React.FC = () => {
  const [acumulador, setAcumulador] = useState(5);

  const incrementar = () => setAcumulador(acumulador + 1);
  const disminuir = () => setAcumulador(acumulador - 1);

  return (
    <div>
      <p>Acumulador: {acumulador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};

export default Acumulador;