import React from 'react'
import PropTypes from 'prop-types';
import './card.css'; // Create this CSS file for styling

const Card = ({ headerText, paragraghText}) => {


  return (
    <div className='card'>
        <h1>{headerText}</h1>
        <p>{paragraghText}</p>
      
    </div>
  );
};



export default Card
