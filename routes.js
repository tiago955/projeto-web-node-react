import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './logon';
import Register from './register';
import Profile from './profile' ;
import NewIncident from './newincidents';

export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/incidents/new " component={NewIncident} />
        </Switch>
        </BrowserRouter>
    );
}
