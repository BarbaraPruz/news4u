import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 

import './index.css';
import App from './App';
import userReducer from './reducers/user_reducer.js';

import * as serviceWorker from './serviceWorker';

const store = createStore(userReducer);

ReactDOM.render(
    <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={App} />             
      </React.Fragment>   
    </Router>
    </Provider>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
