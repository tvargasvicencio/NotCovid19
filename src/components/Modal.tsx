
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IonModal, IonButton, IonContent } from '@ionic/react';

class Modal extends React.Component<{texto:String},  {showModal:boolean}> {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    static propTypes = { // Se definen propiedades al objeto Diferente
        texto: PropTypes.string.isRequired
    }
    
    constructor(props: any){
        super(props);
        this.state = {
            showModal: false
        }
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    setShowModal(show:boolean){
        this.setState({
            showModal: show
        });
    }

    render(){
    let texto = this.props.texto;
    return (
        <IonContent>
          <IonModal isOpen={this.state.showModal}>
            <p>{texto}</p>
            <IonButton onClick={() => this.setShowModal(false)}>Close Modal</IonButton>
          </IonModal>
          <IonButton onClick={() => this.setShowModal(true)}>Show Modal</IonButton>
        </IonContent>
      );
    }

}

export default Modal;