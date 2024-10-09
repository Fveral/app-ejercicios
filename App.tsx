import React from 'react';
import AreaCuadrado from './typescript/AreaCuadrado';
import ArregloParametro from './typescript/ArregloParametro';
import ArregloDivididos from './typescript/ArreglosDivididos';
import ArregloParImpar from './typescript/ArregloParImpar';
import ArregloOperaciones from './typescript/ArregloOperaciones';
import ArregloAlumno from './typescript/ArregloAlumno';
import Acumulador from './typescript/Acumulador';



function App() {
  return (
    <div>
      <h1>Deber</h1>
      <AreaCuadrado />
      <ArregloParametro numeros={[1, 2, 3, 4, 5]} />
      <ArregloDivididos/>
      <ArregloParImpar/>
      <ArregloOperaciones/>
      <ArregloAlumno/>
      <Acumulador/>
      
      

    </div>
    
  );
}

export default App;
