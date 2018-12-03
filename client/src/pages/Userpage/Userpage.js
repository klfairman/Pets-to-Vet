import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import ModalTrigger from "../../components/ModalTrigger";
import API from "../../utils/API";
import NewPetForm from "../../components/newPetForm";
import Modal from "../../components/Modal";



class Userpage extends Component{

    state ={
        userInfo: [],
        Petinfo: []
    };

    componentDidMount(){
        this.loadPets();
    }

    // Need a way to get current user ID
    // loadUser = event =>{
    //     API.getUser
    // }

    loadPets = () =>{
        API.getPets()
        .then(res => this.setState({Petinfo: res.data}))
    }

    render() {
    
    return(

        <Container fluid>
            <Row>
                <ModalTrigger ID="newPet" IDof="#newPetForm" buttonName="Add a Pet"/>
            </Row>
            <Row>
                <Modal title="Add a pet" modalID="newPetForm">
                    <NewPetForm/>
                </Modal>
            </Row>
        </Container>
    )
    }
}
export default Userpage;