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

        const ProductName = ({match}) => {
            return (
                <Earrings
                    earrings={ourEarrings.filter(earring => earring.id === +match.params.productId)[0]}
                />
            )
        }

        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/shop'  render={() => <Products ourProducts={ourProducts} />}/>
                    <Route exact path='/shop/:productId'  component={ProductName} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }

    export default withRouter(Main);