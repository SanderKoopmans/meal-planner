import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    const App = () => (
      <div className="switch">
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
      )
      return (
        <App/>
      );
    }
}

export default App;
