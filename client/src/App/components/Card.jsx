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
  // console.log('props ', props);
  return (
    <div className="Card">
      <h3>{label}</h3>
      <img src={image} alt={label}></img>
      <button href={desc}>Get full recipe</button>
      <button onClick={(data) => saveToArray({'label': label, 'image': image, 'url': desc })}>Add to selection</button>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string,
};

export default Card;