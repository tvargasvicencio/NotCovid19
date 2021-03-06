import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import TestGuiado from '../components/TestGuiado';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test Guíado</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Test Guíado</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TestGuiado />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
