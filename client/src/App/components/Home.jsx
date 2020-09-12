import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Card from './Card';
import './Home.css';

let recipeSelection = [];
let recipes = '';

const getStoredItems = () => {
  const myRecipes = localStorage.getItem('recipes');
  recipes = JSON.parse(myRecipes);
  console.log('stored recipes ', recipes);
  recipeSelection.push(recipes);
  console.log('selection ', recipeSelection);
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      showSearchResult: true,
      recipes: '',
    };
    this.hideComponent = this.hideComponent.bind(this)
  }

  getLoadingStatus = (loading) => {
    console.log('loading...')
    this.setState(loading);
  }

  getFromSearchForm = (searchResults) => {
    console.log('in getfromsearch', searchResults);
    const results = searchResults.hits;
    console.log('this state', results);
    this.setState({recipes: results})
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
    const { showSearchResult, loading } = this.state;
    return (
      <div className="Home">
        <h1>Meal-finder</h1>
        <div className="intro">
          <h3>Please find a recipe you like, using the search tools below.</h3>
          <p>When you found something to your liking. Save the recipe to your list, and update your selection.</p>
        </div>
        <SearchForm 
          setLoading ={this.getLoadingStatus.bind(this)} 
          sendToParent={this.getFromSearchForm.bind(this)} />

        <div className="search-controls">
          <button onClick={getStoredItems}>Update selection</button>

          <button onClick={() => this.hideComponent("showSearchResult")}>Toggle results</button>
        </div>

          {!loading ? showSearchResult && <SearchResults foundRecipes={this.state.recipes}/> : <h3>Loading recipes...</h3>}

          <h3>Your selection:</h3>
          {recipes.length ? 
            <div className="selection">
            {recipes.map((item, index) => {
              return(
                <Card 
                  key={index}
                  label={item.label}
                  image={item.image}
                  desc={item.uri} />
              );
            })}
            </div>
          : <h3>Please add something to your list</h3>}
        </div>
    );
  };
};

export default Home;
