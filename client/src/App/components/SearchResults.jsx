import React, { Component } from 'react';
import Card from './Card';

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

export default SearchResults;