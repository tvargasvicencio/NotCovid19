import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonItemDivider } from '@ionic/react';

import Collapsible from 'react-collapsible';
import ReactHtmlParser from 'react-html-parser';

import { helpCircleOutline, list } from 'ionicons/icons';
import Modal from '../components/Modal';
import jsonSintomas from '../json/jsonSintomas.json';
import textosFAQs from '../json/preguntas.json';

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
        Object.entries(textosFAQs).forEach(([key, value]) => {
            let pregunta = (
                <Collapsible trigger={
                    <IonItem>
                        <IonLabel>{value.pregunta}</IonLabel>
                    </IonItem>
                    }>
                        <IonItem><p>
                            { value.respuesta.map((linea, i) => {
                                return ReactHtmlParser(linea+"<br/><br/>")
                            })}
                            </p></IonItem>
                </Collapsible>
            )
            itemsFaqs.push(pregunta);
        });
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
    }

    render(){
        return(
            <IonContent>
            {/*-- List of Text Items --*/}
            <IonList>
            {this.crearFAQs()}
            </IonList>
        </IonContent>
        );
    }

}

export default PreguntasFrecuentes;