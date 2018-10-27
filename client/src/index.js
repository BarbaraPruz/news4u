import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux'; 
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import About from './components/about';
import NewsContainer from './containers/news_container';
import rootReducer from './reducers/root_reducer';
import NavBar from './components/navbar';

import * as serviceWorker from './serviceWorker';

//const store = createStore(rootReducer, applyMiddleware(thunk));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path='/news/:newsType' component={NewsContainer} />
      </React.Fragment>   
    </Router>
    </Provider>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
