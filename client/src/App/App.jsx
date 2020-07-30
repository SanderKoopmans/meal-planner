import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import './App.css';

class App extends Component {
  render() {
    const App = () => (
      <div className="switch">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
      )
      return (
        <Switch>
          <App/>
        </Switch>
      );
    }
}

export default App;
