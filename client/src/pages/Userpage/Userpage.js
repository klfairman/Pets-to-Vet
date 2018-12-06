import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
// import ModalTrigger from "../../components/ModalTrigger";
import API from "../../utils/api";
import NewPetForm from "../../components/newPetForm";
// import Modal from "../../components/Modal";
import {Modal, Button} from 'react-materialize';
import "./Userpage.css";

// import Nav from "../../components/Nav";

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
      <a href="#" class="brand-logo">Pets-To-Vets</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">Patient Card</a></li>
        <li><a href="collapsible.html">User Page</a></li>
      </ul>
    </div>
  </nav>


                {
                    this.state.Petinfo.concat('Add a Pet').map(pet =>(
                    typeof pet == 'string' ? <div id="petModal"><Modal trigger={<Button>{pet}</Button>}>
                    <NewPetForm></NewPetForm>
                    </Modal></div>:
                    
                    
                    <div id="petModal">
                            {/* <ModalTrigger buttonName={pets.name} ID="aPet" IDof={"#"+pets._id}/> */}
                            {/* <Modal title={pets.name} trigger={<Button>{pet.name}</Button>} modalID={pets._id}> */}
                 
                 
                            <Modal trigger={<Button>{pet.name}</Button>} >
                                
                                <code>{JSON.stringify(pet)}</code>
                                <ul>
                                    {['age', 'dob', 'type', 'breed', 'gender','food', 'vaccines']
                                    .filter(key => pet[key] && pet[key].length > 0)
                                    .map(key => key === 'dob' ? 'DOB' : key.slice(0, 1).toUpperCase() + key.slice(1))
                                    .map(key => <Row><li>{key + ': ' + pet[key.toLowerCase()]}</li>   </Row>)}
                                    {/*<li>{"Age: "+pet.age}</li>
                                    <li>{"DOB: "+pet.dob}</li>
                                    <li>{"Type: "+pet.type}</li>
                                    <li>{"Breed: "+pet.breed}</li>
                                    <li>{"Gender: "+pet.gender}</li>
                                    <li>{"Food: "+pet.food}</li>
                    <li>{"Vaccines: "+pet.vaccines}</li>*/}
                                </ul>
                             
                            </Modal>
                         
                        </div>
                    ))
                }
                {/* <ModalTrigger ID="newPet" IDof="#newPetForm" buttonName="Add a Pet"/> */}

        

            <Row>
                {/* <Modal title="Add a pet" modalID="newPetForm"> */}
             
            </Row>





 <div class="row card">
    <div class="col s12 m6">
      <div class="card #f9a825 yellow darken-3">
        <div class="card-content white-text">
          <span class="card-title">Links to Learn about your Pets!</span>

        <div class="row">
                  <a class="grey-text text-lighten-3 col s4" href="http://www.animalclinicsofthewoodlands.com/new-pet-owner-tips.html">New Pet Owner</a>
                  <a class="grey-text text-lighten-3 col s4" href="https://animalfoundation.com/the-basic-necessities-of-proper-pet-care/">Basic Care</a>
                  <a class="grey-text text-lighten-3 col s4" href="http://www.mypet.com/pet-care-tips.aspx">Seasonal Tips</a>
                 
        </div>
                  <div class="row">
                  <a class="grey-text text-lighten-3 col s4" href="https://www.animalhumanesociety.org/lost-and-found/preventing-lost-pets">Preventing Lost Pets</a>
                  <a class="grey-text text-lighten-3 col s4" href="https://www.akc.org/expert-advice/health/flea-and-tick-prevention-tips/">Flea and ticks</a>
                  <a class="grey-text text-lighten-3 col s4" href="https://www.heartwormsociety.org/pet-owner-resources/heartworm-basics">Heartworm and other parasites</a>
                  
      </div>
                 
    <div class="row">
                <a class="grey-text text-lighten-3 col s4" href="https://www.animalhumanesociety.org/lost-and-found/preventing-lost-pets">Preventing Lost Pets</a>
                  <a class="grey-text text-lighten-3 col s4" href="https://www.diamondbackdrugs.com/how-to-identify-common-infections-in-pets/">Other Infections</a>
                  <a class="grey-text text-lighten-3 col s4" href="https://petnutritionalliance.org/">Nutrition</a>
    </div>


     </div>
      </div>
    </div>
  </div>








               <footer class="page-footer #1a237e indigo darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                
                
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text"></h5>
                <ul>
             
        
                  
                </ul>
              </div>
            </div>
          </div>
        
        
        </footer>
        </Container>
    )
    }
}
export default Userpage;