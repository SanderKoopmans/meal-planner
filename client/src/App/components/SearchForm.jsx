import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      cuisine: 'Vegan',
      type: 'Dinner'
  };
}

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { search, cuisine, type } = this.state;
    console.log('submit', this.state)

    axios.post('/api/search', { search, cuisine, type})
    .then(result => this.props.sendToParent(result));
  }

  render() {
    const { search } = this.state;
    return (
      <div className="SearchForm">
        <h2>Find a recipe!</h2>
        <form onSubmit={this.onSubmit}>
          <label>
            Search term:
            <input
              type='text'
              name='search'
              placeholder='Example, muffin'
              value={search}
              onChange={this.onChange}
              />
          </label>
          <label>
            Select cuisine
            <select value={this.state.value} onChange={this.onChange}>
              <option value='vegetarian'>Vegetarian</option>
              <option value='vegan'>Vegan</option>
              <option value='red-meat-free'>Red meat free</option>
            </select>
          </label>
          <label>
            Select course
            <select>
              <option value='breakfast'>Breakfast</option>
              <option value='lunch'>Lunch</option>
              <option value='dinner'>Dinner</option>
            </select>
          </label>
          <button type='submit'>Search!</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;