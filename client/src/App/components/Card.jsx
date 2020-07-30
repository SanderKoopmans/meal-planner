import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import store from 'store2';

const addToList = (event) => {
  console.log('target? ', event.target.parentElement);
  console.log('inner? ', event.target.parentElement.innerHTML);
  const target = event.target.parentElement;
  console.log('test ', target.childNodes);
  console.log('test 2 ', target.childNodes[0].innerHTML);
  store.set({'label': target.childNodes[0].innerHTML, 'image': target.childNodes[1].currentSrc, 'recipe': target.childNodes[4].attributes[0]})
  console.log('stored? ', store());
};

const Card = props => {
  const { label, image, amount, ingredients, desc } = props;
  console.log('props ', props);
  return (
    <div className="Card">
      <h3>{label}</h3>
      <img src={image} alt={label}></img>
      <p>Yield: {amount}</p>
      <p>Ingredients: {ingredients}</p>
      <button href={desc}>Get full recipe</button>
      <button onClick={addToList}>Add to mylist</button>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string,
};

export default Card;