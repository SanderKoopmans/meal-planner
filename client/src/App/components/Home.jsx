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
      showSearchResult: true,
      recipes: '',
    };
    this.hideComponent = this.hideComponent.bind(this)
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
    const { showSearchResult } = this.state;
    return (
      <div className="Home">
        <h1>Meal-finder</h1>
        <div className="intro">
          <h3>Please find a recipe you like, using the search tools below.</h3>
          <p>When you found something to your liking. Save the recipe to your list, and update your selection.</p>
        </div>
        <SearchForm sendToParent={this.getFromSearchForm.bind(this)}/>

        <div className="search-controls">
          <button onClick={getStoredItems}>Update selection</button>

          <button onClick={() => this.hideComponent("showSearchResult")}>Toggle results</button>
        </div>

          {showSearchResult && <SearchResults foundRecipes={this.state.recipes}/>}
          <h3>Your selection:</h3>
          {recipes.length ? (
            <div className="selection">
            {recipes.map((item, index) => {
              return(
                <Card 
                key={index}
                label={item.label}
                image={item.image}
                desc={item.uri}
                />
              );
            })}
            </div>
            ) : (
              <div>
                <h3>Please add something to the list</h3>
              </div>
            )}
          </div>
    );
  };
};

export default Home;
