import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SearchFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      value: 'dinner'
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
    alert('Your chosen type of dish: ' + this.state.value);
    event.preventDefault();
    }

  render() {
    return (
      <div className="SearchForm">
      <h2>Find a recipe!</h2>
      <label>
        Search term:
        <input type="text" value={this.state.search} onChange={this.handleChange} placeholder="Insert search term"/>
      </label>
      <label>Type of dish:
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
      <Link to={'./list'}>
        <button>
          Show results
        </button>
      </Link>
      </div>
    )
  }
}

export default SearchFrom;