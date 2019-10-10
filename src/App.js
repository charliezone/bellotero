import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchMenus } from "./actions/menuActions";
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

  componentDidMount(){
    this.props.dispatch(fetchMenus());
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { error, loading, menus } = this.props;

    if (error) {
      return <div>Error! {error}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

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
                      {menus.map(menu => {
                        return (
                          <NavItem>
                            <Link to={`/${menu.route}`} className="nav-link">{menu.text}</Link>
                          </NavItem>
                        );
                      })}
                      </Nav>
                    </Collapse>
                  </Navbar>
                </Col>
              </Row>
            </Container>
          </header>
          <main className="main">
            {(loading) ? <div>Loading...</div> : ""}
            <Route path="/" exact component={Home} />
            <Route path="/page-1" exact component={Home} />
            <Route path="/page-2" exact component={Solutions} />
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  menus: state.menuReducer.menus,
  loading: state.menuReducer.loading,
  error: state.menuReducer.error
});

export default connect(mapStateToProps)(App);
