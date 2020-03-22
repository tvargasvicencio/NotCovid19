import React, {Component} from 'react';
import { IonSlides, IonSlide, IonContent, IonCol, IonButton } from '@ionic/react';
import jsonSintomas from '../json/jsonSintomas.json';
import textosTestGuiado from '../json/es.json';

class TestGuiado extends Component {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    private slidesRef = React.createRef<any>();
    constructor(props: any){
        super(props);
        this.state = {
            sintoma1: false,
            sintoma2: false,
            sintoma3: false,
          }
        this.ionSlidesDidLoad = this.ionSlidesDidLoad.bind(this);
    }

    componentDidUpdate(){
        console.log(this.state);
    }


    ionSlidesDidLoad(event:Event){
        this.allowSlide(false);
    }

    generaSlides(){
        let slides: JSX.Element[] = [];
        Object.entries(jsonSintomas).forEach(([key, value]) => {
            console.log(`${key} ${value}`);
            var slide= (
                <IonSlide /*key={parseInt(slide)}*/>
                    <IonCol>
                        {/*<h1>{textosTestGuiado[{slide.pregunta}]}</h1>*/}
                        <h1>{value.pregunta}</h1>
                        <IonButton onClick={(e) => this.asignaSintoma(key,true)} >Si</IonButton>
                        <IonButton onClick={(e) => this.asignaSintoma(key,false)}>No</IonButton>
                    </IonCol>
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

    asignaSintoma(sintoma:any,valor:Boolean){
        this.allowSlide(true);
        this.slidesRef.current.swiper.slideNext();
        this.allowSlide(false);
        this.setState({
            [sintoma]: valor
        })
    }

    slideOpts = {
        initialSlide: 0,
        speed: 400,
    };

    render(){
        return(
            <IonContent>
                <IonSlides ref={this.slidesRef} pager={true} options={this.slideOpts} onIonSlidesDidLoad={this.ionSlidesDidLoad} >
                    {this.generaSlides()}
                </IonSlides>
            </IonContent>
        );
    }

}

export default TestGuiado;