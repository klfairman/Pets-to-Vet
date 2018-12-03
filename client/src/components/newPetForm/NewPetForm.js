import React, { Component } from "react";
import '../../pages/Homepage/Homepage.css';
import Input from "../Input";
import ModalTrigger from "../ModalTrigger";

class NewPetForm extends Component{

    state ={
        Owner: "",
        name: "",
        dob: "",
        age: "",
        type: "",
        breed: "",
        gender: "",
        food: "",
        otherAnimals: [],
        vaccines: []
    };

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
            <div className="col m6">
                <Input change={this.handleInputChange} inputTitle="Name" value={this.state.name} name="name"/>
                <Input change={this.handleInputChange} inputTitle="Date Of Birth" value={this.state.dob} name="dob"/>
            </div>
            <div className="col m6">
                <Input change={this.handleInputChange} inputTitle="age" value={this.state.age} name="age"/>
                <Input change={this.handleInputChange} inputTitle="breed" value={this.state.breed} name="breed"/>
            </div>
            <div className="col m6">
                <Input change={this.handleInputChange} inputTitle="food" value={this.state.food} name="food"/>
                <Input change={this.handleInputChange} inputTitle="gender" value={this.state.gender} name="gender"/>
            </div>
            <div className="col m6">
                <Input change={this.handleInputChange} inputTitle="vaccines" value={this.state.vaccines} name="vaccines"/>
                <Input change={this.handleInputChange} inputTitle="type" value={this.state.type} name="type"/>
            </div>
            <ModalTrigger ID="submit" IDof="/userpage" buttonName="Submit"/>
        </form>

    )
    }
}
export default NewPetForm