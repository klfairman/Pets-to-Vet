import React, { Component } from "react";
import '../../pages/Homepage/Homepage.css';
import Input from "../Input";
import ModalTrigger from "../ModalTrigger";

class LoginForm extends Component{

    state ={
        username: [],
        password: "",
        email: "",
        type: ""
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

        <form id="login">
        <div className="col m6">
            <Input change={this.handleInputChange} inputTitle="Username" value={this.state.username} name="username"/>
            <Input change={this.handleInputChange} inputTitle="Password" value={this.state.password} name="password"/>
        </div>
        <div className="col m6">
            <Input change={this.handleInputChange} inputTitle="Email" value={this.state.email} name="email"/>
            <Input change={this.handleInputChange} inputTitle="Type: Vet or Owner" value={this.state.type} name="type"/>
        </div>
            <ModalTrigger ID="submit" IDof="/userpage" buttonName="Submit"/>
        </form>

    )
    }
}
export default LoginForm