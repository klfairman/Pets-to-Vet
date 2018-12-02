import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";


class Userpage extends Component{

    state ={
        Petinfo: []
    };

    render() {
    
    return(

        <Container fluid>
            <Row>
                <p>this is the userpage</p>
            </Row>
        </Container>
    )
    }
}
export default Userpage;