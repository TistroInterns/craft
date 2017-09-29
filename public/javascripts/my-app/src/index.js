import React from 'react';
import { render } from 'react-dom';
import { Router, Route,browserHistory,IndexRoute } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import App from './app/components/App.js';
import Home from './app/components/Home.js';
import Testimonial from './app/components/Testimonial.js'
import Downloads from './app/components/Downloads.js';
import FAQ from './app/components/FAQ.js';

render(
  (
     <Router history={browserHistory} >
            <Route path="/" component={App}>
                <IndexRoute exact component={Home}></IndexRoute>
                <Route path='/Testimonial' component={Testimonial}></Route>
                <Route path='/Downloads' component={Downloads}></Route>
                <Route path='/FAQ' component={FAQ}></Route>
                
            </Route>
        </Router>
  ), document.getElementById('app'));





  