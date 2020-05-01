import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import {LogIn} from "../components/Form"

class Main extends Component{

  state = {
    theState: 0
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.getLogins()
      .then(res =>
      console.log(res.data)  
      ).catch(err => console.log(err))
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
          <div className="container">
            <div className="d-flex justify-content-center h-100">
              <div className="card">
                <div className="card-header">
                  <h3>Log In</h3>
                  <div className="d-flex justify-content-end social_icon">
                    <span><i className="fab fa-facebook-square"></i></span>
                    <span><i className="fab fa-google-plus-square"></i></span>
                    <span><i className="fab fa-twitter-square"></i></span>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                      </div>
                      <input type="text" name="username" className="form-control" onChange={this.handleInputChange} value={this.state.username} placeholder="username"/>
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                      </div>
                      <input type="password" name="password" className="form-control" onChange={this.handleInputChange} value={this.state.password} placeholder="password"/>
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Login" onClick={this.handleFormSubmit} className="btn float-right login_btn"/>
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?<a href="/login">Log In</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

    )
  }



}

export default Main;