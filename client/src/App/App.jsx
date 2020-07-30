import React, { Component } from 'react';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    const App = () => (
      <div className="home">
        <Home />
      </div>
      )
      return (
        <App/>
      );
    }
}

export default App;
