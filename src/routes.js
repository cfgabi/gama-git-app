import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Repositories from './pages/Repositories';
import Home from './pages/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;