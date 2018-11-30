import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import Modal from "../../components/Modal";
import ModalTrigger from "../../components/ModalTrigger";
import './Homepage.css'

class Homepage extends Component{

    state ={

    };

    render() {
    
    return(

        <Container fluid>
            <Row>
                <Modal title="Sign In" modalID="signup"/>
                <ModalTrigger IDof="#signup" buttonName="Sign In">
                <button>thisisabutton</button>
                </ModalTrigger>
            </Row>
        </Container>
    )
    }
}
export default Homepage