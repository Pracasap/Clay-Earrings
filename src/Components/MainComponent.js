import React, { useState } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Products from './ProductComponent';
import Contact from './ContactCompoent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ProductTypes } from '../assets/products';
import Earrings from './EarringsComponent';
import { clayEarrings } from '../assets/clayEarrings';

function Main(props) {
        const [ourProducts] = useState(ProductTypes);
        const [ourEarrings] = useState(clayEarrings);

        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/shop'  render={() => <Products ourProducts={ourProducts} />}/>
                    <Route exact path='/shop/ClayEarrings'  render={() => <Earrings earrings={ourEarrings} />} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }

    export default withRouter(Main);