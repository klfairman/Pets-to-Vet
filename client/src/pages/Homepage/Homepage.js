import React, { Component } from "react";
import { Row, Container, Col } from "../../components/Grid";
import Modal from "../../components/Modal";
import ModalTrigger from "../../components/ModalTrigger";
import './Homepage.css'
import doggo from "../../Images/bubbles_doggo.jpg";
import Form from "../../components/Form";
import Input from "../../components/Input";

class Homepage extends Component{

    state ={
        username: null,
        password: null,
        email: null
    };

    render() {
    
    return(

        <Container fluid>
            <Row>
            <div className="parallax-container">
                <h1 id="header">Pets-To-Vets</h1>
                <div className="parallax"><img alt="doggo" src={doggo}></img></div>
            </div>
                <Modal title="Sign In" modalID="signinModal">
                    <Form>
                        <Input inputTitle="username" value={this.state.username} name="Username"/>
                        <Input inputTitle="password" value={this.state.password} name="Password"/><ModalTrigger ID="submit" IDof="/userpage" buttonName="Submit"/>
                    </Form>
                    <p>don't have an account?</p><ModalTrigger ID="signup" IDof="#signupModal" buttonName="click here"/>
                </Modal>
                <ModalTrigger ID="signin" IDof="#signinModal" buttonName="Sign In"/>
            </Row>
            <Row>
                <Modal title="Sign Up" modalID="signupModal">
                    <Col size="m6">
                        <Input inputTitle="username" value={this.state.username} name="Username"/>
                        <Input inputTitle="Email" value={this.state.email} name="email"/>
                        <Input inputTitle="password" value={this.state.password} name="Password"/>
                        <ModalTrigger ID="submit" IDof="/userpage" buttonName="Submit"/>
                    </Col>
                </Modal>
            </Row>
        </Container>
    )
    }
}
export default Homepage