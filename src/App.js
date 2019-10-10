import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Home from './home';
import Solutions from './solutions';
import logo from './logo.svg';
import './App.scss';

class App extends Component{
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <header>
            <Container>
              <Row>
                <Col>
                  <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <Link to="/" className="nav-link">home</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/solutions" className="nav-link">Solutions</Link>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </Navbar>
                </Col>
              </Row>
            </Container>
          </header>
          <main className="main">
            <Route path="/" exact component={Home} />
            <Route path="/solutions" exact component={Solutions} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
