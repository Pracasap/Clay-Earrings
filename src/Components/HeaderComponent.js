import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';;

function Header({cartItems}) {
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
                                <span className='cart-length'>{cartItems.length === 0 ? "CART" : cartItems.length}</span>
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

// Cart
//                             <div className='cart'>
//                                 <h3 className='cart-title'>Your Cart</h3>
//                                 <div className='cart-content'>
//                                     <div className='cart-box'>
//                                         <img src="/images/Earring1.png" alt="" className='cart-img' />
//                                         <div className='detail-box'>
//                                             <div className='cart-product-title'>Black Floral Moon</div>
//                                             <div className='cart-price'>$25</div>
//                                             <input type="number" value="1" className='cart-quantity' />
//                                         </div>
//                                         <div className='cart-remove'>
//                                             <ion-icon name="trash-sharp" className="cart-remove" /></div>
//                                     </div>
//                                 </div>
//                                 {/* Total */}
//                                 <div className='total'>
//                                     <div className='total-title'>Total</div>
//                                     <div className='total-price'>$0</div>

//                                 </div>
//                                 {/* Buy Button */}
//                                 <Button className="btn btn-buy">Buy Now</Button>
//                                 {/* Cart Close */}
//                                 <div className='close-cart'>
//                                     <ion-icon name="close-sharp" />
//                                 </div>
//                             </div>