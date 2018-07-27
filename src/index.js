import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import Home from './views/Home';
import Releases from './views/Releases';
import Backlog from './views/Backlog';
import Sprints from './views/Sprints';
import Dashboard from './views/Dashboard';
import UserInterfaces from './views/UserInterfaces';

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='/releases' component={Releases} />
            <Route path='/backlog' component={Backlog} />
            <Route path='/sprints' component={Sprints} />                       
        </Route>
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/UserInterfaces' component={UserInterfaces} />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
