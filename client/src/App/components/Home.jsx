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
      showSearchResult: false,
      recipes: '',
    };
    this.hideComponent = this.hideComponent.bind(this)
  }

  getFromSearchForm = (searchResults) => {
    const results = searchResults.data.hits;
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
        <h1>Home</h1>
        <SearchForm sendToParent={this.getFromSearchForm.bind(this)}/>
        <p>Stored items</p>
        <button onClick={getStoredItems}>Save to selection</button>

        <button onClick={() => this.hideComponent("showSearchResult")}>Hide/Show results</button>

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
