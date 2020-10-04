import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {isNavOpen: false};
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="m-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span className="fa fa-home"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about"><span className="fa fa-info"></span> About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/resume"><span className="fa fa-user"></span> Resume</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/projects"><span className="fa fa-tasks"></span> Projects</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact"><span className="fa fa-address-card"></span> Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;
