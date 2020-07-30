import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = props => {
  const { label, image } = props;
  return (
    <div className="Card">
      <p>{label}</p>
      <img src={image} alt={label}></img>
      {/* <p>{image}</p> */}
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string,
};

export default Card;