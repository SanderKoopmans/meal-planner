import React, { Component } from 'react';
import SearchForm from './SearchForm';
const storedItems = localStorage.getItem('myList');

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <SearchForm />
        <div className="fromList">
          <p>Stored items</p>
          
        </div>
      </div>
    );
  }
}

export default Home;
