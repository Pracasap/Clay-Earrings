import React, { useEffect, useState } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Products from './ProductComponent';
import Contact from './ContactCompoent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Earrings from './EarringsComponent';
import Oils from './OilsComponent';
import Salts from './SaltsComponent';
import Candles from './CandlesComponent';
import Cart from './CartComponent';
import { ProductTypes } from '../assets/products';
import { clayEarrings } from '../assets/products';
import { essentialOils } from '../assets/products';
import { bathSalts } from '../assets/products';
import { scentedCandles } from '../assets/products';


function Main() {
        const [ourProducts] = useState(ProductTypes);
        const [ourEarrings] = useState(clayEarrings);
        const [ourOils] = useState(essentialOils);
        const [ourSalts] = useState(bathSalts);
        const [ourCandles] = useState(scentedCandles);

        const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartItems") || "[]");
        const [cartItems, setCartItems] = useState(cartFromLocalStorage);

        useEffect(() => {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }, [cartItems]);

        const handleAddProduct = (product) => {
            const ProductExist = cartItems.find((item) => item.id === product.id);
            if (ProductExist) {
                setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1} : item));
            } else {
                setCartItems([...cartItems, { ...product, quantity: 1 }]);
            }
        }

        const handleRemoveProduct = (product) => {
            const ProductExist = cartItems.find((item) => item.id === product.id);
            if (ProductExist.quantity === 1) {
                setCartItems(cartItems.filter((item) => item.id !== product.id));
            } else {
                setCartItems(
                    cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1 } : item)
                );
            }
        }

        const handleCartClearance = () => {
            setCartItems([]);
        }

        const totalItems = cartItems.reduce((number, item) => number + item.quantity, 0)
        
        return (
            <React.Fragment>
                <Header cartItems={cartItems} totalItems={totalItems} />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/shop'  render={() => <Products ourProducts={ourProducts} />}/>
                    <Route exact path='/shop/ClayEarrings'  render={() => <Earrings earrings={ourEarrings} handleAddProduct ={handleAddProduct} handleRemoveProduct = {handleRemoveProduct} />} />
                    <Route exact path='/shop/EssentialOils'  render={() => <Oils oils={ourOils} />} />
                    <Route exact path='/shop/BathSalts'  render={() => <Salts salts={ourSalts} />} />
                    <Route exact path='/shop/ScentedCandles'  render={() => <Candles candles={ourCandles} />} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path = '/cart' render={() => <Cart cartItems = {cartItems} handleAddProduct = {handleAddProduct} handleRemoveProduct = {handleRemoveProduct} handleCartClearance={handleCartClearance} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }

    export default withRouter(Main);