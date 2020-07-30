import React, { Component } from 'react';
import SearchForm from './SearchForm';
import List from './List';
// import store from 'store2';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <SearchForm />
        <div className="fromList">
          <p>Stored items</p>
          <List />
        </div>
      </div>
    );
  }
}

export default Home;
