import React, { Component } from "react";
//import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import {ContactText} from "../components/TextBox"

class Main extends Component{

  state = {
    theState: 0
  }


  render(){
    return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <img src="http://cdainterview.com/resources/contact-us.png" alt="" style={{width: "100%", height: "auto"}}></img>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <ContactText>
            
          </ContactText>
        </Col>
      </Row>
    </Container>

    )
  }



}

export default Main;