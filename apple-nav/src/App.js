import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <NavWrapper />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mac" exact />
          <Route path="/ipad" exact />
          <Route path="/iphone" exact />
          <Route path="/watch" exact />
          <Route path="/tv" exact />
          <Route path="/music" exact />
          <Route path="/support" exact />
        </Switch>
      </div>
    );
  }
}

export default App;
