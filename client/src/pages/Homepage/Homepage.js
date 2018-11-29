import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
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
                <Modal modalID="signup"/>
                <ModalTrigger IDof="#signup" buttonName="Sign In"/>
                <Col size="md6">
                    <p>this works</p>
                </Col>
            </Row>
        </Container>
    )

    }
}
export default Homepage