import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink} from 'reactstrap';
import Image from 'react-bootstrap/Image';

function Header() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleNav = () => setCollapsed(!collapsed);

    return (
        <React.Fragment>
            <Navbar light sticky="top" expand="md" className="nav-bar navbar-inverse bg-inverse">  
                <div className="container">
                    <NavbarBrand href="/" className="NavbarBrand font-weight-bold">
                        <Image src="/images/foreverCreatingLogo.png" height={40} />
                    </NavbarBrand> 
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link active" to="/home" onClick={toggleNav}>
                                <ion-icon name="home" /> &nbsp;HOME
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/projects" onClick={toggleNav}>
                                <ion-icon name="diamond" />&nbsp;SHOP
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact" onClick={toggleNav}>
                                <ion-icon name="call" />&nbsp;CONTACT
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