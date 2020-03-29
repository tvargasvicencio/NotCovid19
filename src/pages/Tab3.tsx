import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import PreguntasFrecuentes from '../components/PreguntasFrecuentes';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Preguntas Frecuentes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Preguntas Frecuentes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PreguntasFrecuentes />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
