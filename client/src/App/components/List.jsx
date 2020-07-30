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
    console.log(this.state.list);

    return (
      <div className="App">
        <h1>List of Items</h1>
        <h2>{list}</h2>
        {list.length ? (
          <div>
            {list.map((item) => {
              return(
                <div>
                  {item}
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
