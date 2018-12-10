import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'index.css';
import Root from './Root'
import App from 'App';
import About from 'components/about';
import HeadlinesContainer from 'containers/headlines_container';
import SearchContainer from 'containers/search_container';
import Preferences from 'containers/preferences';
import NavBar from 'containers/navbar';
import Logout from 'containers/logout';
import Footer from 'components/footer';


ReactDOM.render(
    <Root>
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path='/headlines' component={HeadlinesContainer} />
        <Route exact path='/search' component={SearchContainer} />        
        <Route path='/users/:id/edit' component={Preferences} />
        <Route path='/users/:id/logout' component={Logout} /> 
        <Footer />
      </React.Fragment>   
    </Router>
    </Root>,
  document.getElementById('root')
)


