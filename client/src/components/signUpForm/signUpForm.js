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
            <Input change={this.handleInputChange} inputTitle="username" value={this.state.username} name="username"/>
            <Input change={this.handleInputChange} inputTitle="password" value={this.state.password} name="password"/>
            <Input change={this.handleInputChange} inputTitle="email" value={this.state.email} name="email"/>
            <Input change={this.handleInputChange} inputTitle="type" value={this.state.type} name="type"/>
            <ModalTrigger ID="submit" IDof="/userpage" buttonName="Submit"/>
        </form>

    )
    }
}
export default LoginForm