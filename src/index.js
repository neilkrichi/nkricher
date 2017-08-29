import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import NoMatch from './components/NoMatch'

import { Router, Route, browserHistory } from 'react-router'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
  <Router history={browserHistory}>
  <Route path="/" component={Home} />
  <Route path="/projects" component={Projects} />
  <Route path="/resume" component={Resume} />
  <Route path="/contact" component={Contact} />
  <Route path="*" component={NoMatch}/>
</Router> ), document.getElementById('root'));
registerServiceWorker();
