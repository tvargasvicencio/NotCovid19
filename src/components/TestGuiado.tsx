import React, {Component} from 'react';
import { IonSlides, IonSlide, IonContent, IonCol, IonButton, IonIcon, IonChip, IonRow, IonGrid } from '@ionic/react';
import { helpCircleOutline } from 'ionicons/icons';
import Modal from '../components/Modal';
import jsonSintomas from '../json/jsonSintomas.json';
import textosTestGuiado from '../json/es.json';

interface SintomasInterface {
    sintoma1: boolean,
    sintoma2: boolean,
    sintoma3: boolean,
    sintoma4: boolean,
    sintoma5: boolean,
    sintoma6: boolean,
    sintoma7: boolean,
    sintoma8: boolean,
    sintoma9: boolean,
    sintoma10: boolean,
    sintoma11: boolean,
    sintoma12: boolean,
    covid19: number,
    gripe: number,
    resfriado: number,
  }

class TestGuiado extends React.Component<{},  SintomasInterface> {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    private slidesRef = React.createRef<any>();
    refers = new Array();
    constructor(props: any){
        super(props);
        this.state = {
            sintoma1: false,
            sintoma2: false,
            sintoma3: false,
            sintoma4: false,
            sintoma5: false,
            sintoma6: false,
            sintoma7: false,
            sintoma8: false,
            sintoma9: false,
            sintoma10: false,
            sintoma11: false,
            sintoma12: false,
            covid19: 0,
            gripe: 0,
            resfriado: 0,
          }
        this.ionSlidesDidLoad = this.ionSlidesDidLoad.bind(this);
        this.calculaResultado = this.calculaResultado.bind(this);
        
    }

    componentDidUpdate(){
        console.log(this.state);
        if (this.slidesRef.current.swiper && this.slidesRef.current.swiper.isEnd === true) {
            console.log("LLEGAMOS AL FINAL, HACER EL CÁLCULO");
        }
    }

    ionSlidesDidLoad(event:Event){
        this.allowSlide(false);
    }

    generaSlides(){
        let slides: JSX.Element[] = [];
        let cont = 0;
        Object.entries(jsonSintomas).forEach(([key, value]) => {
            console.log(`${key} ${value}`);
            let refAux = React.createRef<any>();
            this.refers.push(refAux);
            var slide= (
                <IonSlide /*key={parseInt(slide)}*/>
                    <IonGrid>
                        {/*<h1>{textosTestGuiado[{slide.pregunta}]}</h1>*/}
                    <Modal ref={refAux} texto={value.ayuda} />
                        <IonCol>
                        <h2>
                            {value.pregunta} <br></br>
                            <IonButton size="small" onClick={(e) => refAux.current.setShowModal(true)}>
                                <IonIcon icon={helpCircleOutline} />Ayuda
                            </IonButton>
                        </h2>
                        
                        </IonCol>
                        <IonCol>
                        <IonButton size="large" onClick={(e) => this.asignaSintoma(key,true,value.id)} >Si</IonButton>
                        <IonButton size="large" onClick={(e) => this.asignaSintoma(key,false,value.id)}>No</IonButton>
                        </IonCol>
                    </IonGrid>
                </IonSlide>
            )
            slides.push(slide);
        });
        return slides;
    }

    allowSlide(allow:Boolean){
        this.slidesRef.current.swiper.allowSlideNext = allow;
        //this.slidesRef.current.swiper.allowSlidePrev = allow;
    }

    asignaSintoma(sintoma:string,valor:boolean,id:number){
        this.allowSlide(true);
        this.slidesRef.current.swiper.slideNext();
        this.allowSlide(false);
        let covid19 : number = 0;
        let resfriado : number = 0;
        let gripe: number = 0;
        if (valor===true) {
            if (id in [1,2,3,4,9]) {
                covid19 = 1;
            }
            if (id in [1,7,8]) {
                resfriado = 1;
            }
            if (id in [1,2,5,6,7,10,11,12]) {
                gripe = 1;
            }
        }
        this.setState({
            ...this.state,
            [sintoma]: valor,
            covid19: this.state.covid19 + covid19,
            resfriado: this.state.resfriado + resfriado,
            gripe: this.state.gripe + gripe
        })
    }

    reiniciarTest(){
        this.slidesRef.current.swiper.slideTo(0);
        this.setState({
            ...this.state,
            covid19: 0,
            resfriado: 0,
            gripe: 0
        })
    }

    calculaResultado(){
        // sintoma3 es el más importante, dificultad para respirar
        if (this.state.sintoma3 === true) {
            if (this.state.covid19>=4) {
                return (<h1>Tienes {this.state.covid19} de 5 síntomas de Coronavirus, incluyendo dificultad respiratoria. Es probable que tengas Coronavirus, acude al médico.</h1>)
            }
            else{
                return (
                    <h1>Tienes {this.state.covid19} de 5 síntomas de Coronavirus, incluyendo dificultad respiratoria. Llama para preguntar.</h1>
                )
            }
        }
        else{
            if (this.state.sintoma1 === true && this.state.sintoma2 === true) {
                if (this.state.covid19 >= this.state.gripe) {
                    return (
                        <h1>Tienes {this.state.covid19} de 5 síntomas de Coronavirus, pero tienes fiebre y tos. Llama para preguntar.</h1>
                    )
                }
                else{
                    return (
                        <h1>Tienes tos y fiebre, pero tus síntomas se parecen más a los de la gripe. Llama para preguntar.</h1>
                    )
                }
            }
            if (this.state.gripe > this.state.covid19 && this.state.gripe > this.state.resfriado) {
                return (<h1>Tienes {this.state.gripe} síntomas de gripe, quédate en casa tranquilo. </h1>)
            }
            if (this.state.resfriado > this.state.covid19 && this.state.resfriado > this.state.gripe) {
                return (<h1>Tienes {this.state.resfriado} síntomas de resfriado, quédate en casa tranquilo. </h1>)
            }
            if (this.state.covid19 === this.state.gripe && this.state.gripe === this.state.resfriado) {
                return (<h1>Estás bien, quédate en casa tranquilo. </h1>)
            }
        }
    }

    slideOpts = {
        initialSlide: 0,
        speed: 400,
    };

    render(){
        return(
            <IonContent>
                <IonSlides ref={this.slidesRef} pager={false} options={this.slideOpts} onIonSlidesDidLoad={this.ionSlidesDidLoad} >
                    {this.generaSlides()}
                    <IonSlide /*key={parseInt(slide)}*/>
                        <IonRow>
                            <IonCol>
                                {this.calculaResultado()}
                            </IonCol>
                        </IonRow>
                        <br></br>
                        <IonRow>
                            <IonCol>
                                <IonButton onClick={(e) => this.reiniciarTest()}>Reiniciar</IonButton>
                            </IonCol>
                        </IonRow>
                        
                    </IonSlide>
                </IonSlides>
            </IonContent>
        );
    }

}

export default TestGuiado;