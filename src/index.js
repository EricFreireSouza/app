import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import App from './containers/App';
import UserInterfaces from './containers/UserInterfaces';

import Home from './views/Home';
import Releases from './views/Releases';
import Backlog from './views/Backlog';
import Sprints from './views/Sprints';
import Dashboard from './views/Dashboard';
import Pipelines from './views/UserInterfaces/Pipelines';
import Components from './views/UserInterfaces/Components';
import Classes from './views/UserInterfaces/Classes';
import Packages from './views/UserInterfaces/Packages';

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
        <Route component={UserInterfaces}>
            <Redirect from="/UserInterfaces" to="/Pipelines" />
            <Route path='/Pipelines' component={Pipelines}/>
            <Route path='/Components' component={Components} />
            <Route path='/Classes' component={Classes} />
            <Route path='/Packages' component={Packages} />
        </Route>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
