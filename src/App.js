import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchMenus } from "./actions/menuActions";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Home from './home';
import Solutions from './solutions';
import logo from './assets/img/bellotero.svg';
import './App.scss';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:500', 'sans-serif']
  }
});

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
        <div className="app-container App">
          <header className="main-header">
            <Navbar color="light" fixed="top" light expand="md">
              <Link to="/" className="navbar-bra"><img src={logo} alt=""/></Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  {menus.map(menu => {
                    return (
                      <NavItem>
                        <NavLink exact activeClassName={(menu.route !== "#") ? "navbar-link-active" : "navbar-link-inactive"} to={(menu.route !== "page-1") ? `/${menu.route}` : '/'} className="nav-link">{menu.text}</NavLink>
                      </NavItem>
                    );
                  })}
                </Nav>
              </Collapse>
            </Navbar>
          </header>
          <main className="main">
            {(loading) ? <div>Loading...</div> : ""}
            <Route path="/" exact component={Home} />
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
