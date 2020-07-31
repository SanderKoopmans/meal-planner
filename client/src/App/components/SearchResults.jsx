import React, { Component } from 'react';
import Card from './Card';
import './SearchResults.css';

let recipeArr;
let recipe;

class SearchResults extends Component {

  componentDidUpdate() {
    recipeArr = this.props.foundRecipes;
    recipe = recipeArr.map(recipe => recipe.recipe);
    console.log('ANOTHER LOG', recipe);
  }

  render() {
    return (
      <div className="searchContainer">
        {recipe ? (
          <div className="list">
            {recipe.map(item => {
              return(
                <Card
                key={item.uri}
                label={item.label}
                image={item.image}
                desc={item.url}
                  />
              );
            })}
          </div>
        ) : (
          <div>
            <h2>Loading results</h2>
          </div>
        )}
        </div>
    );
  };
}

export default SearchResults;