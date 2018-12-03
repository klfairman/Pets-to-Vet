import React, { Component } from "react";
import '../../pages/Homepage/Homepage.css';
import Input from "../Input";
import ModalTrigger from "../ModalTrigger";
import API from "../../utils/API";

class NewPetForm extends Component{

    state ={
        currentUser: [],
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

    componentDidMount = () =>{
        // this.loadUser()
    }

    // Need a way to get current user ID
    // loadUser = event =>{
    //     API.getUser
    // }

    handleNewPet = () =>{
        API.addPet({
            name: this.state.name,
            dob: this.state.dob,
            age: this.state.age,
            type: this.state.type,
            breed: this.state.breed
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
            <div className="col m6">
                <Input change={this.handleInputChange} inputTitle="Name" value={this.state.name} name="name"/>
                <Input change={this.handleInputChange} inputTitle="Date Of Birth" value={this.state.dob} name="dob"/>
            </div>
            <div className="col m6">
                <Input change={this.handleInputChange} inputTitle="Age" value={this.state.age} name="age"/>
                <Input change={this.handleInputChange} inputTitle="Breed" value={this.state.breed} name="breed"/>
            </div>
            <div className="col m6">
                <Input change={this.handleInputChange} inputTitle="Food" value={this.state.food} name="food"/>
                <Input change={this.handleInputChange} inputTitle="Gender" value={this.state.gender} name="gender"/>
            </div>
            <div className="col m6">
                <Input change={this.handleInputChange} inputTitle="Vaccines" value={this.state.vaccines} name="vaccines"/>
                <Input change={this.handleInputChange} inputTitle="Type" value={this.state.type} name="type"/>
            </div>
            <ModalTrigger click={this.handleNewPet} ID="submit" IDof="/userpage" buttonName="Submit"/>
        </form>

    )
    }
}
export default NewPetForm