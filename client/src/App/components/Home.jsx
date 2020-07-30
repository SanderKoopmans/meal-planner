import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <SearchForm />
        <p>Stored items</p>
        <SearchResults />
      </div>
    );
  }
}

export default Home;
