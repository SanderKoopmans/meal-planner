import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const getStoredItems = () => {
  const myRecipes = localStorage.getItem('recipes');
  const recipes = JSON.parse(myRecipes);
  console.log('stored recipes ', recipes);
};


class Home extends Component {
  constructor() {
    super();
    this.state = {
      showSearchResult: false
    };
    this.hideComponent = this.hideComponent.bind(this)
  }

  hideComponent(name) {
    console.log('name ',name);
    switch (name) {
      case "showSearchResult":
        this.setState({ showSearchResult: !this.state.showSearchResult });
        break;
    }
  }
  render() {
    const { showSearchResult } = this.state;
    return (
      <div className="Home">
        <h1>Home</h1>
        <SearchForm />
        <p>Stored items</p>
        <button onClick={getStoredItems}>Get from storage</button>

        <button onClick={() => this.hideComponent("showSearchResult")}>Hide search results</button>

        <div className="searchContainer">
          {showSearchResult && <SearchResults />}
        </div>
      </div>
    );
  };
};

export default Home;
