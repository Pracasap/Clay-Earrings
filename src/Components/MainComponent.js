import React, { useState } from 'react';
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

        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/shop'  render={() => <Products ourProducts={ourProducts} />}/>
                    <Route exact path='/shop/ClayEarrings'  render={() => <Earrings earrings={ourEarrings} />} />
                    <Route exact path='/shop/EssentialOils'  render={() => <Oils oils={ourOils} />} />
                    <Route exact path='/shop/BathSalts'  render={() => <Salts salts={ourSalts} />} />
                    <Route exact path='/shop/ScentedCandles'  render={() => <Candles candles={ourCandles} />} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }

    export default withRouter(Main);