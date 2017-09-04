import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import NoMatch from './components/NoMatch'
import Watdog from './components/Watdog'

import { Router, Route, browserHistory } from 'react-router'
import ReactGA from 'react-ga'
import registerServiceWorker from './registerServiceWorker'


ReactGA.initialize('UA-105753102-1'); //Unique Google Analytics tracking number

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render((
  <Router onUpdate={logPageView} history={browserHistory}>
    <Route path="/" component={Home} onUpdate={logPageView} />
    <Route path="/projects" component={Projects} onUpdate={logPageView} />
    <Route path="/watdog" component={Watdog} onUpdate={logPageView} />
    <Route path="/resume" component={Resume} onUpdate={logPageView} />
    <Route path="/contact" component={Contact} onUpdate={logPageView} />
    <Route path="*" component={NoMatch}/>
</Router>
), document.getElementById('root'));

registerServiceWorker();
