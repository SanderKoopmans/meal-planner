import React, { Component } from 'react';
// const env = require('dotenv').config();

// const appId = process.env.REACT_APP_appID;
// const appKey = process.env.REACT_APP_appKEY;

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
    const title = recipe.map(item => item.label);
    console.log('Title? ', title);

    return (
      <div className="App">
        <h1>Your list of recipes:</h1>
        {recipe.length ? (
          <div>
            {recipe.map(item => {
              return(
                <div>
                  <p>{item.label}</p>
                  <p>{item.image}</p>
                </div>
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
