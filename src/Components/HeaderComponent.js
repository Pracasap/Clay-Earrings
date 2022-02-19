import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';;

function Header({totalItems}) {
    const [collapsed, setCollapsed] = useState(false);
    const toggleNav = () => setCollapsed(!collapsed);

    return (
        <React.Fragment>
            <Navbar light sticky="top" expand="lg" className="nav-bar">  
                <div className="container">
                    <NavbarBrand href="/" className="NavbarBrand">
                        Forever Avenue
                    </NavbarBrand> 
                    <NavbarToggler onClick={toggleNav} className="navbar-dark" />
                    <Collapse isOpen={collapsed} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home" onClick={toggleNav}>
                                <ion-icon name="home-sharp" /> &nbsp;HOME
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/shop" onClick={toggleNav}>
                                <ion-icon name="diamond-sharp" />&nbsp;SHOP
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact" onClick={toggleNav}>
                                <ion-icon name="call-sharp" />&nbsp;CONTACT
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link cart-icon" to="/cart" onClick={toggleNav}>
                                <ion-icon name="cart-sharp" />&nbsp; 
                                <span className='cart-length'>{totalItems === 0 ? "CART" : totalItems === 1 ? `1 ITEM` : `${totalItems} ITEMS`}</span>
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