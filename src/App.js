import React from 'react';
import './App.css';
import { Security, ImplicitCallback } from '@okta/okta-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Home";


const config = {
  issuer: 'https://dev-720083.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa26622s6cX6nGvV357',
  pkce: true
}


function App() {
  return (
      <Router>
        <Security {...config}>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
      </Router>
  );
}

export default App;
