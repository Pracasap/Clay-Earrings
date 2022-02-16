import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleNav = () => setCollapsed(!collapsed);

    return (
        <React.Fragment>
            <Navbar light sticky="top" expand="md" className="nav-bar">  
                <div className="container">
                    <NavbarBrand href="/" className="NavbarBrand">
                        Forever Avenue
                    </NavbarBrand> 
                    <NavbarToggler onClick={toggleNav} className="navbar-dark" />
                    <Collapse isOpen={collapsed} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home" onClick={toggleNav}>
                                <ion-icon name="home" /> &nbsp;HOME
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/shop" onClick={toggleNav}>
                                <ion-icon name="diamond" />&nbsp;SHOP
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact" onClick={toggleNav}>
                                <ion-icon name="call" />&nbsp;CONTACT
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="" onClick={toggleNav}>
                                <ion-icon name="cart-outline" />&nbsp;CART
                                </NavLink>
                            </NavItem>
                            
                            <div className='cart'>
                                <h3 className='cart-title'>Your Cart</h3>
                            </div>
                        </Nav>
                    </Collapse> 
                </div>  
            </Navbar>
        </React.Fragment>
    )
}

export default Header;