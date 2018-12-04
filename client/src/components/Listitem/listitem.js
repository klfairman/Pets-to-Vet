import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import './listitem.css'

class listitem extends Component{
    state ={
    };

    render() {
    
    return(
      <body className="back"> 
        <Container fluid>
            <Row>
        <a class="waves-effect waves-light btn-large"><i class="material-icons right">add</i>ADD Pet</a>
        <h1>Pet History</h1>
  {/* pet modals */}
  <a class="waves-effect waves-light btn modal-trigger" href="#modal1"><h5>Pet 1</h5></a>
  <div id="modal1" class="modal">
    <div class="modal-content">
    <h3 style={{textAlign: "center", }}>Pet Information</h3>           
      <h5>Pet Name:</h5>
      <input></input>
      <h5>Owner Name:</h5>
      <input></input>
      <h5>Pet Gender:</h5>
      <input></input>
      <h5>Species:</h5>
      <input></input>
      <h5>Pet Age:</h5>
      <input></input>
      <h5>Birthday:</h5>
      <input></input>
      <h5>Food:</h5>
      <input></input>
    </div>
    <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
    <a href="#modal2" class="waves-effect waves-light btn modal-trigger">Vaccines</a>
    </div>
    <div id="modal2" class="modal">
    <div class="modal-content">
        <h4>Vaccine Information</h4>
        <h5>Medication</h5>
        <input></input>
        <h5>Shots</h5>
        <input></input>
        <h5>Vaccine</h5>
        <input></input>
        <h5>Injuries</h5>
        <input></input>
        <h5>Diseases</h5>
        <input></input>
        <h5>Viruses</h5>
        <input></input>
    </div>
    </div>
  </div>

   <a class="waves-effect waves-light btn modal-trigger" href="#modal1"><h5>Pet 2</h5></a>
  <div id="modal1" class="modal">
    <div class="modal-content">
    <h3 style={{textAlign: "center", }}>Pet Information</h3>           
      <h5>Pet Name:</h5>
      <input></input>
      <h5>Owner Name:</h5>
      <input></input>
      <h5>Pet Gender:</h5>
      <input></input>
      <h5>Species:</h5>
      <input></input>
      <h5>Pet Age:</h5>
      <input></input>
      <h5>Birthday:</h5>
      <input></input>
      <h5>Food:</h5>
      <input></input>  
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      <a href="#modal2" class="waves-effect waves-light btn modal-trigger">Vaccines</a>
    </div>
    <div id="modal2" class="modal">
    <div class="modal-content">
        <h4>Vaccine Information</h4>
        <h5>Medication</h5>
        <input></input>
        <h5>Shots</h5>
        <input></input>
        <h5>Vaccine</h5>
        <input></input>
        <h5>Injuries</h5>
        <input></input>
        <h5>Diseases</h5>
        <input></input>
        <h5>Viruses</h5>
        <input></input>
    </div>
    </div>
  </div>
  
    <a class="waves-effect waves-light btn modal-trigger" href="#modal1"><h5>Pet 3</h5></a>
  <div id="modal1" class="modal">
    <div class="modal-content">
    <h3 style={{textAlign: "center", }}>Pet Information</h3>           
      <h5>Pet Name:</h5>
      <input></input>
      <h5>Owner Name:</h5>
      <input></input>
      <h5>Pet Gender:</h5>
      <input></input>
      <h5>Species:</h5>
      <input></input>
      <h5>Pet Age:</h5>
      <input></input>
      <h5>Birthday:</h5>
      <input></input>
      <h5>Food:</h5>
      <input></input>  
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      <a href="#modal2" class="waves-effect waves-light btn modal-trigger">Vaccines</a>
    </div>
    <div id="modal2" class="modal">
    <div class="modal-content">
        <h4>Vaccine Information</h4>
        <h5>Medication</h5>
        <input></input>
        <h5>Shots</h5>
        <input></input>
        <h5>Vaccine</h5>
        <input></input>
        <h5>Injuries</h5>
        <input></input>
        <h5>Diseases</h5>
        <input></input>
        <h5>Viruses</h5>
        <input></input>
    </div>
    </div>
  </div>
     </Row>
     
        </Container> 
        </body>     
    )
    }
}
export default listitem