import React from 'react';
import './ExploreContainer.css';
import { IonButton } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Con esta aplicación puede consultar en forma privada sus síntomas y evaluar si es posible que esté contagiado con coronavirus (covid-19) para obtener recomendaciones sobre qué hacer y cuando es necesario que acuda a un hospital.
      Todas las preguntas serán privadas, y no se compartirá información de ningún tipo con terceros sin su autorización.
      Esta aplicación de ninguna manera puede reemplazar a una consulta médica normal, pues para ello, se requiere de la interacción directa entre el médico y el paciente.
      Hay que recordar que el diagnóstico médico se basa en la revisión médica y el examen clínico así como de los resultados de los exámenes auxiliares que solicite el médico en los casos que considere necesarios.
      Este servicio virtual es solo informativo y no reemplaza una consulta real.
      </p>
    <IonButton href="/tab2">Ir al Test Guíado</IonButton>
    </div>
  );
};

export default ExploreContainer;
