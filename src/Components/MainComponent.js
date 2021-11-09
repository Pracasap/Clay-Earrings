import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    
                </Switch>
            </React.Fragment>
        )
    }
}

export default withRouter(Main);