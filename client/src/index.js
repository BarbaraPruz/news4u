import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import About from './components/about';
import HeadlinesContainer from './containers/headlines_container';
import SearchContainer from './containers/search_container';
import Preferences from './containers/preferences';
import rootReducer from './reducers/root_reducer';
import NavBar from './containers/navbar';
import Logout from './containers/logout';
import Footer from './components/footer';
import SignUpForm from './containers/signup_form';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/about" component={About} />
        <Route exact path='/headlines' component={HeadlinesContainer} />
        <Route exact path='/search' component={SearchContainer} />        
        <Route path='/users/:id/edit' component={Preferences} />
        <Route path='/users/:id/logout' component={Logout} /> 
        <Footer />
      </React.Fragment>   
    </Router>
    </Provider>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
