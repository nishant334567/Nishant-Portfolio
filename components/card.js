// components/Card.js
import React from 'react';
import styles from '../styles/globals.css';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:animate-bounce">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
