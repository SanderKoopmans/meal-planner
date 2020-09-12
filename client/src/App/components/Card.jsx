import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

let myRecipes = [];

const store = () => {
  const recipes = myRecipes;
  localStorage.clear();
  localStorage.setItem('recipes', JSON.stringify(recipes));
  console.log('local', localStorage);
};

const saveToArray = (data) => {
  myRecipes.push(data);
  console.log('array ', myRecipes)
  store();
};

const Card = props => {
  const { label, image, desc } = props;
  return (
    <div className="Card">
      <p>{label}</p>
      <img src={image} alt={label}></img>
      <div className="controls">
        <button href={desc}>Get full recipe</button>
        <button onClick={(data) => saveToArray({'label': label, 'image': image, 'url': desc })}>Add to selection</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
