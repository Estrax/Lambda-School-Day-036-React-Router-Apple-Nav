import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import Home from './components/Home';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div>
        <NavWrapper />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/mac" exact render={() => <Product product="mac" />} />
          <Route path="/ipad" exact render={() => <Product product="ipad" />} />
          <Route path="/iphone" exact render={() => <Product product="iphone" />} />
          <Route path="/watch" exact render={() => <Product product="watch" />} />
          <Route path="/tv" exact render={() => <Product product="tv" />} />
          <Route path="/music" exact render={() => <Product product="music" />} />
          <Route path="/support" exact render={() => <Product product="support" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
