import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import ModalTrigger from "../../components/ModalTrigger";
import API from "../../utils/API";



class Userpage extends Component{

    state ={
        Petinfo: []
    };

    componentDidMount(){
        this.loadPets();
    }

    loadPets = () =>{
        API.getPets()
        .then(res => this.setState({Petinfo: res.data}))
    }

    render() {
    
    return(

        <Container fluid>
            <Row>
                <ModalTrigger/>
            </Row>
        </Container>
    )
    }
}
export default Userpage;