import React, { Component } from 'react';
import axios from 'axios';
import './SearchForm.css';

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
    const { search } = this.state;
    console.log('Search value: ', search);

    (async () => {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Accept': 'Application/JSON',
          'Content-Type': 'Application/JSON'
        }, 
        body: JSON.stringify({ search })
      })
        .then(res => res.json())
        .then(data => this.props.sendToParent(data));
    })();
  }

  render() {
    const { search } = this.state;
    return (
      <div className="SearchForm">
        <h3>Let's find some recipes</h3>
        <form onSubmit={this.onSubmit}>
          <div className="home-search">
          <label>
            <i className="fa fa-search searchIcon"></i>
            <input
              id="search"
              type='text'
              name='search'
              placeholder='Example, muffin'
              value={search}
              onChange={this.onChange}
              />
              <button id="search-submit" type='submit'>Search</button>
          </label>
          </div>
          <div className="option-search">
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
          </div>
        </form>
      </div>
    )
  }
}

export default SearchForm;