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
          <Route path="/" exact component={Home} />
          <Route path="/mac" exact component={() => <Product product="mac" />} />
          <Route path="/ipad" exact component={() => <Product product="ipad" />} />
          <Route path="/iphone" exact component={() => <Product product="iphone" />} />
          <Route path="/watch" exact component={() => <Product product="watch" />} />
          <Route path="/tv" exact component={() => <Product product="tv" />} />
          <Route path="/music" exact component={() => <Product product="music" />} />
          <Route path="/support" exact component={() => <Product product="support" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
