import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import store from './reduxStore';
import NotFound from './components/NotFound';
import './styles/styles.scss';
import 'regenerator-runtime/runtime';
import { Signup } from './components/pages/Signup';
import { Login } from './components/pages/Login';
import landingPage from './components/pages/landingPage';


const Root = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={landingPage} />
                <Route exact path="/signin" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
        <ToastContainer />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
