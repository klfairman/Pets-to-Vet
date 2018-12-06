import React from "react";
import Input from "../Input";
import ModalTrigger from "../ModalTrigger";
import API from "../../utils/api";

class MedicalNotesForm extends React.Component {

    state ={
        species: "",
        gender: "",
        age: "",
        behavior: "",
        previousMedicalHistory: "",
        time: "",
        veterinarian: "",
        weight: "",
        pulse: "",
        mmCRT: "",
        temp: "",
        resp: "",
        bcs: "",
        hydration: "",
        ga: "",
        integ: "",
        eent: "",
        cv: "",
        ms: "",
        pln: "",
        gu: ""
    };

    componentDidMount = () =>{
        // this.loadUser()
    }

    // Need a way to get current user ID
    // loadUser = event =>{
    //     API.getUser
    // }

    handleNewNotes = () =>{
        API.addNotes({
            species: this.state.species,
            gender: this.state.gender,
            age: this.state.age,
            behavior: this.state.behavior,
            previousMedicalHistory: this.state.previousMedicalHistory,
            date: this.state.date,
            time: this.state.time,
            veterinarian: this.state.veterinarian,
            weight: this.state.weight,
            pulse: this.state.pulse,
            mmCRT: this.state.mmCRT,
            temp: this.state.temp,
            resp: this.state.resp,
            bcs: this.state.bcs,
            hydration: this.state.hydration,
            ga: this.state.ga,
            integ: this.state.integ,
            eent: this.state.eent,
            cv: this.state.cv,
            ms: this.state.ms,
            pln: this.state.pln,
            gu: this.state.gu
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    }
    handleInputChange = event =>{
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
       console.log(this.state)
    }

    //for passport stuff??
    // handleSubmit = event =>{
        
    // }

    render() {
    
    return(
        <form>
            <div className="col m4">
                <Input change={this.handleInputChange} inputTitle="Species" value={this.state.species} name="species"/>
                <Input change={this.handleInputChange} inputTitle="Gender" value={this.state.gender} name="gender"/>
            </div>
            <div className="col m4">
                <Input change={this.handleInputChange} inputTitle="Age" value={this.state.age} name="age"/>
                <Input change={this.handleInputChange} inputTitle="Behavior" value={this.state.behavior} name="behavior"/>
            </div>
            <div className="col m4">
                <Input change={this.handleInputChange} inputTitle="Previous Medical History" value={this.state.previousMedicalHistory} name="previousMedicalHistory"/>
                <Input change={this.handleInputChange} inputTitle="Date: " value={this.state.date} name="date"/>
            </div>
            <div className="col m4">
                <Input change={this.handleInputChange} inputTitle="Time: " value={this.state.time} name="time"/>
                <Input change={this.handleInputChange} inputTitle="Veterinarian" value={this.state.veterinarian} name="veterinarian"/>
            </div>
            <div className="col m4">
                <Input change={this.handleInputChange} inputTitle="Weight: " value={this.state.weight} name="weight"/>
                <Input change={this.handleInputChange} inputTitle="Pulse: " value={this.state.pulse} name="pulse"/>
            </div>
            <div className="col m4">
                <Input change={this.handleInputChange} inputTitle="MM/CRT: " value={this.state.mmCRT} name="mmCRT"/>
                <Input change={this.handleInputChange} inputTitle="Temp: " value={this.state.temp} name="temp"/>
            </div>
            <div className="col m4">
                <Input change={this.handleInputChange} inputTitle="Resp: " value={this.state.resp} name="resp"/>
                <Input change={this.handleInputChange} inputTitle="BCS(1-10): " value={this.state.bcs} name="bcs"/>
            </div>
            <div className="col m4">
                <Input change={this.handleInputChange} inputTitle="Hydration" value={this.state.hydration} name="hydration"/>
                <Input change={this.handleInputChange} inputTitle="GA: " value={this.state.ga} name="ga"/>
            </div>
            <div className="col m4">
                <Input change={this.handleInputChange} inputTitle="Integ: " value={this.state.integ} name="integ"/>
                <Input change={this.handleInputChange} inputTitle="EENT: " value={this.state.eent} name="eent"/>
            </div>
            <div className="col m4">
                <Input change={this.handleInputChange} inputTitle="CV: " value={this.state.cv} name="cv"/>
                <Input change={this.handleInputChange} inputTitle="Resp: " value={this.state.resp} name="resp"/>
            </div>
            <div className="col m4">
                <Input change={this.handleInputChange} inputTitle="M/S: " value={this.state.ms} name="ms"/>
                <Input change={this.handleInputChange} inputTitle="PLN: " value={this.state.pln} name="pln"/>
            </div>
            <div className="col m4">
                <Input change={this.handleInputChange} inputTitle="GU: " value={this.state.gu} name="gu"/>
                <Input change={this.handleInputChange} inputTitle="PLN: " value={this.state.pln} name="pln"/>
            </div>

            <ModalTrigger click={this.handleNewPet} ID="submit" IDof="/userpage" buttonName="Submit"/>
        </form>

    )
    }
}
export default MedicalNotesForm