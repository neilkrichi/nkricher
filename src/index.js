import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

import { Router, Route, browserHistory } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router history={browserHistory}>
  <Route path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/projects" component={Projects}/>
  <Route path="/resume" component={Resume}/>
  <Route path="/contact" component={Contact}/>
</Router> ), document.getElementById('root'));
registerServiceWorker();
