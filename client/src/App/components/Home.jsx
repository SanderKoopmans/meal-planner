import React, { Component } from 'react';
import SearchForm from './SearchForm';
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

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch('api/getList')
    .then(res => res.json())
    .then(list => this.setState({list: list.hits}))
    .catch(err => console.log(err));
  }

  render() {
    const { list } = this.state;
    // console.log('THIS LOG', this.state.list);
    const recipe = list.map(item => item.recipe);
    // console.log('ANOTHER LOG', recipe);

    return (
      <div className="searchContainer">
        <h2>Your search results:</h2>
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

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showSearchResult: true
    };
    this.hideComponent = this.hideComponent.bind(this)
  }

  parentFunction = (data_from_child) => {
    console.log('in parent', data_from_child);
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
    console.log('selection ', recipes);
    return (
      <div className="Home">
        <h1>Home</h1>
        <SearchForm functionCallFromParent={this.parentFunction.bind(this)}/>
        <p>Stored items</p>
        <button onClick={getStoredItems}>Save to selection</button>

        <button onClick={() => this.hideComponent("showSearchResult")}>Hide/Show results</button>

          {showSearchResult && <SearchResults />}
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
