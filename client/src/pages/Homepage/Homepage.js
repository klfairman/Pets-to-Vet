import React, { Component } from "react";
import { Row, Container, Col } from "../../components/Grid";
import Modal from "../../components/Modal";
import ModalTrigger from "../../components/ModalTrigger";
import './Homepage.css'
import doggo from "../../Images/bubbles_doggo.jpg";
import SignUpForm from "../../components/signUpForm";
import LoginForm from "../../components/loginForm";

class Homepage extends Component{

    state ={
        username: "",
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

    render() {
    
    return(

        <Container fluid>
            <Row>
            <div className="parallax-container">
                <h1 id="header">Pets-To-Vets</h1>
                <div className="parallax"><img alt="doggo" src={doggo}></img></div>
            </div>
                <Modal title="Sign In" modalID="signinModal">
                    <LoginForm />
                    <p>don't have an account?</p><ModalTrigger ID="signup" IDof="#signupModal" buttonName="click here"/>
                </Modal>
                <ModalTrigger ID="signin" IDof="#signinModal" buttonName="Get Started"/>
            </Row>
            <Row>
                <Modal title="Sign Up" modalID="signupModal">
                    <Col size="m6">
                        <SignUpForm/>
                    </Col>
                </Modal>
            </Row>
        </Container>
    )
    }
}
export default Homepage