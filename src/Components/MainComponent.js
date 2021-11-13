import React, { Profiler } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Products from './ProductComponent';
import Contact from './ContactCompoent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function Main() {
    
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/shop' component={Products} />
                    <Route exact path='/contact'  component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }

    export default withRouter(Main);