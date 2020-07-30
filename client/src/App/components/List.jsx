import React, { Component } from 'react';
import Card from './Card';
import './List.css';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
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
    console.log('THIS LOG', this.state.list);
    const recipe = list.map(item => item.recipe);
    console.log('ANOTHER LOG', recipe);

    return (
      <div className="searchResult">
        <h2>Your search results:</h2>
        {recipe.length ? (
          <div className="list">
            {recipe.map(item => {
              return(
                <Card 
                  key={item.uri}
                  label={item.label}
                  image={item.image}
                  amount={item.yield}
                  ingredients={item.ingredientLines}
                  desc={item.url}
                   />
              );
            })}
          </div>
        ) : (
          <div>
            <h2>Loading</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;
