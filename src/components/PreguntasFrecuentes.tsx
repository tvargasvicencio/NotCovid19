import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonItemDivider } from '@ionic/react';

import Collapsible from 'react-collapsible';

import { helpCircleOutline, list } from 'ionicons/icons';
import Modal from '../components/Modal';
import jsonSintomas from '../json/jsonSintomas.json';
import textosTestGuiado from '../json/es.json';

interface SintomasInterface {
    sintoma1: boolean
  }

class PreguntasFrecuentes extends React.Component<{},  SintomasInterface> {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    private slidesRef = React.createRef<any>();
    public refFaqs = new Array();
    refers = new Array();
    constructor(props: any){
        super(props);
        this.state = {
            sintoma1: false
        }
        
    }

    crearFAQs(){
        var itemsFaqs: JSX.Element[] = [];
        var refAux = React.createRef<any>();
        this.refFaqs.push(refAux);
        /*itemsFaqs.push(
            <IonItem onClick={() => this.mostrarFAQ(refAux)}>
                <IonLabel>
                    Pokémon Yellow
                    <p ref={refAux} className="expand-wrapper">
                        Hello people
                    </p>    
                </IonLabel>
            </IonItem>
        )*/
        itemsFaqs.push(
            <Collapsible trigger={
                <IonItem>
                    <IonLabel>Pregunta 1</IonLabel>
                </IonItem>
                }>
                    <IonItem><p>la re ctm</p></IonItem>
            </Collapsible>
        )
        var refAux2 = React.createRef<any>();
        this.refFaqs.push(refAux2);
        itemsFaqs.push(
            <Collapsible trigger={
                <IonItem>
                    <IonLabel>Pregunta 2</IonLabel>
                </IonItem>
                }>
                    <IonItem><p>la re ctm</p></IonItem>
            </Collapsible>
        )
        return itemsFaqs;
    }

    mostrarFAQ(ref:any){
        this.refFaqs.forEach(refFaq => {
            if (refFaq.current!==null) {
                
            console.log(refFaq);
            ref.current.className="expand-wrapper";
            }
        });
        ref.current.className="collapsed";
        console.log("FAQQQQQ: ", ref.current);
    }

    render(){
        return(
            <IonContent>
            {/*-- List of Text Items --*/}
            <IonList>
            {this.crearFAQs()}
            <IonItem>
                <IonLabel>Mega Man X</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>The Legend of Zelda</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Pac-Man</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Super Mario World</IonLabel>
            </IonItem>
            </IonList>
        </IonContent>
        );
    }

}

export default PreguntasFrecuentes;