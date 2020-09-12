import React, { Component } from 'react';
import Card from './Card';
import './SearchResults.css';

let recipeArr;

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      recipe: '',
    };
  }

  componentDidMount() {
    console.log('(SearchResults) mounted...');
    recipeArr = this.props.foundRecipes;
    this.setState({ recipe: recipeArr.map(recipe => recipe.recipe)})
    console.log('(SearchResults) recipeArr', recipeArr)
  }

  render() {
    const { recipe } = this.state;
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
                desc={item.url} />
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