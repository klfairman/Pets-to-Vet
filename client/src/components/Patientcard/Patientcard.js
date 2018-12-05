import React from "react";

import './Patientcard.css'


const Patientcard = (props) => (                                
                  
    <div className="petimage">
    
    <img src={this.props.imgsrc}/>

    </div>


    <div className="petinfo">
    
    Name:<p className="petname">{this.props.name}</p>
    Gender:<p className="petgender">{this.props.gender}</p>
    Species:<p className="petspecies">{this.props.species}</p>
    Breed:<p className="petbreed">{this.props.breed}</p>
    Date of Birth:<p className="dob">{this.props.dob}</p>
    Age:<p className ="petage">{this.props.petage}</p>
    Food:<p className="petfood">{this.props.petfood}</p>
    Medication(s):<p className="petmeds">{this.props.petmeds}</p>

<div className="vaccines">
   
   <h4>Rabies:{props.rabies}</h4>
   <h4>DAPP:{props.dapp}</h4>
   <h4>Bordetella:{props.bordetella}</h4>
   <h4>Lepto:{props.lepto}</h4>
   <h4>Lyme:{props.lyme}</h4>
   </div>

   </div>
                                )
export default Patientcard;
