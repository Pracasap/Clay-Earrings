import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';

function Header() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNav = () => setCollapsed(!collapsed);

    return (
        <React.Fragment>
            <Navbar dark sticky="top" expand="md" className="nav-bar">  
                <div className="container">
                    <NavbarBrand href="/" className="NavbarBrand font-weight-bold"><ion-icon name="leaf" /> 
                    Forever Creating!</NavbarBrand> 
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-5">
                            <NavItem>
                                <NavLink className="nav-link mr-4" to="/home" onClick={this.toggleNav}>
                                <ion-icon name="home" />  &nbsp;HOME
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link mr-4" to="/projects" onClick={this.toggleNav}>
                                <ion-icon name="documents" /> &nbsp;SHOP
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact" onClick={this.toggleNav}>
                                <ion-icon name="call" /> &nbsp;CONTACT
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse> 
                </div>  
            </Navbar>
        </React.Fragment>
    )
}

export default Header;