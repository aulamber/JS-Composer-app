import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ComposerDetailsContainer, ComposerListContainer, Home } from '../components';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/list/composers" component={ComposerListContainer} />
      <Route path="/article/composers/:id" component={ComposerDetailsContainer} />
    </div>
  </Router>,
  document.getElementById('container-fluid'),
);
