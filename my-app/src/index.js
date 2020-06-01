import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
//Components
import App from './App';
import store from "./store/store";
import ErrorBoundry from "./componets/Error-boundry/Error-boundry";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>

                <App/>

        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);

