import React from 'react';

type Alumno = {
  nombre: string;
  edad: number;
  calificacion: number;
};

const alumnos: Alumno[] = [
  { nombre: 'Viviana', edad: 19, calificacion: 10 },
  { nombre: 'Wendy', edad: 20, calificacion: 8 },
  { nombre: 'Gerson', edad: 18, calificacion: 9 },
];

function calcularPromedio(alumnos: Alumno[]): number {
  const sumaCalificaciones = alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
  return sumaCalificaciones / alumnos.length;
}

const ArregloAlumno: React.FC = () => {
  const promedioCalificaciones = calcularPromedio(alumnos);

  return (
    <div>
      <h1>Promedio de Calificaciones</h1>
      <p><strong>Nombre</strong> - <strong>Edad</strong> - <strong>Calificación</strong></p>
      {alumnos.map((alumno, index) => (
        <p key={index}>
          {alumno.nombre} - {alumno.edad} años - {alumno.calificacion}
        </p>
      ))}
      <p><strong>Promedio de Calificaciones:</strong> {promedioCalificaciones}</p>
    </div>
  );
};

export default ArregloAlumno;