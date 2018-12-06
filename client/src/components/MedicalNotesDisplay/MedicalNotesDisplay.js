import React from "react";
import ModalTrigger from "../ModalTrigger";
import api from "../../utils/api";

class MedicalNotesDisplay extends React.Component {

    componentWillMount = () =>{
        this.loadNote()
    }

    loadNote = () => {
        api.getNotes(this.props.id)
        .then(
            note => {
                this.setState(note)    
            } 
        )
    }

    render() {
    
        return(
            <form>
                <div className="col m4">
                    {/* <Input change={this.handleInputChange} inputTitle="Species" value={this.state.species} name="species"/>
                    <Input change={this.handleInputChange} inputTitle="Gender" value={this.state.gender} name="gender"/> */}
                </div>
                <div className="col m4">
                    {/* <Input change={this.handleInputChange} inputTitle="Age" value={this.state.age} name="age"/>
                    <Input change={this.handleInputChange} inputTitle="Behavior" value={this.state.behavior} name="behavior"/> */}
                </div>
                <div className="col m4">
                    {/* <Input change={this.handleInputChange} inputTitle="Previous Medical History" value={this.state.previousMedicalHistory} name="previousMedicalHistory"/>
                    <Input change={this.handleInputChange} inputTitle="Date: " value={this.state.date} name="date"/> */}
                </div>
                <div className="col m4">
                    {/* <Input change={this.handleInputChange} inputTitle="Time: " value={this.state.time} name="time"/> */}
                    {/* <Input change={this.handleInputChange} inputTitle="Veterinarian" value={this.state.veterinarian} name="veterinarian"/> */}
                </div>
                <div className="col m4">
                    {/* <Input change={this.handleInputChange} inputTitle="Weight: " value={this.state.weight} name="weight"/>
                    <Input change={this.handleInputChange} inputTitle="Pulse: " value={this.state.pulse} name="pulse"/> */}
                </div>
                <div className="col m4">
                    {/* <Input change={this.handleInputChange} inputTitle="MM/CRT: " value={this.state.mmCRT} name="mmCRT"/>
                    <Input change={this.handleInputChange} inputTitle="Temp: " value={this.state.temp} name="temp"/> */}
                </div>
                <div className="col m4">
                    {/* <Input change={this.handleInputChange} inputTitle="Resp: " value={this.state.resp} name="resp"/>
                    <Input change={this.handleInputChange} inputTitle="BCS(1-10): " value={this.state.bcs} name="bcs"/> */}
                </div>
                <div className="col m4">
                    {/* <Input change={this.handleInputChange} inputTitle="Hydration" value={this.state.hydration} name="hydration"/>
                    <Input change={this.handleInputChange} inputTitle="GA: " value={this.state.ga} name="ga"/> */}
                </div>
                <div className="col m4">
                    {/* <Input change={this.handleInputChange} inputTitle="Integ: " value={this.state.integ} name="integ"/>
                    <Input change={this.handleInputChange} inputTitle="EENT: " value={this.state.eent} name="eent"/> */}
                </div>
                <div className="col m4">
                    {/* <Input change={this.handleInputChange} inputTitle="CV: " value={this.state.cv} name="cv"/>
                    <Input change={this.handleInputChange} inputTitle="Resp: " value={this.state.resp} name="resp"/> */}
                </div>
                <div className="col m4">
                    {/* <Input change={this.handleInputChange} inputTitle="M/S: " value={this.state.ms} name="ms"/>
                    <Input change={this.handleInputChange} inputTitle="PLN: " value={this.state.pln} name="pln"/> */}
                </div>
                <div className="col m4">
                    {/* <Input change={this.handleInputChange} inputTitle="GU: " value={this.state.gu} name="gu"/>
                    <Input change={this.handleInputChange} inputTitle="PLN: " value={this.state.pln} name="pln"/> */}
                </div>
    
                <ModalTrigger click={this.handleNewPet} ID="submit" IDof="/userpage" buttonName="Submit"/>
            </form>
    
        )
        }
}

export default MedicalNotesDisplay