import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import ModalTrigger from "../../components/ModalTrigger";
import API from "../../utils/API";
import NewPetForm from "../../components/newPetForm";
import Modal from "../../components/Modal";
import Nav from "../../components/Nav";

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

  <nav>
    <div class="nav-wrapper #1a237e indigo darken-4">
      <a href="#" class="brand-logo">Pets-to-Vets</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="collapsible.html">Patient Card</a></li>
        <li><a href="collapsible.html">User Page</a></li>
      </ul>
    </div>
  </nav>
        





            <Row>
                {
                    this.state.Petinfo.map(pets =>(
                        <div id="petModal">
                            <ModalTrigger buttonName={pets.name} ID="aPet" IDof={"#"+pets._id}/>
                            <Modal title={pets.name} modalID={pets._id}>
                                <ul>
                                    <li>{"age: "+pets.age}</li>
                                    <li>{"DOB: "+pets.dob}</li>
                                    <li>{"Type: "+pets.type}</li>
                                    <li>{"Breed: "+pets.breed}</li>
                                    <li>{"Gender: "+pets.gender}</li>
                                    <li>{"Food: "+pets.food}</li>
                                    <li>{"Vaccines: "+pets.vaccines}</li>
                                </ul>
                            </Modal>
                        </div>
                    ))
                }
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