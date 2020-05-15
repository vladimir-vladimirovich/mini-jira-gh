import React from 'react';
import ReactDOM from 'react-dom';
import BoardContainer from './components/Board/index';
import combineReducers from './store/reducer';
import LoginFormContainer from './components/Login/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';

const store = createStore(
    combineReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/mini-jira-gh/" exact component={LoginFormContainer} />
                <Route path="/mini-jira-gh/login" exact component={LoginFormContainer} />
                <Route path="/mini-jira-gh/board" exact component={BoardContainer} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);