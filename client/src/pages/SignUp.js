import React, { Component } from "react";
//import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import {SignUp} from "../components/Form"

class Main extends Component{

  state = {
    theState: 0
  }


  render(){
    return (
    <Container fluid>
      <Row>
        <Col size="md-12">
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <SignUp>
            
          </SignUp>
        </Col>
      </Row>
    </Container>

    )
  }



}

export default Main;