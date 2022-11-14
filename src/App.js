import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./components/Users";
import AddUserForm from "./components/AddUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Prince",
          email: "damn@gmail.com",
          gen: 12,
        },
        {
          name: "Mick",
          email: "ohh@gmail.com",
          gen: 9,
        },
        {
          name: "Evans",
          email: "youtookraaa@gmail.com",
          gen: 6,
        },
      ],
    };
  }
  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users,user]
    });
  };
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <AddUserForm addUser={this.addNewUser}/>
            </Col>
            <Col>
              <Users usersData={this.state.users} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
