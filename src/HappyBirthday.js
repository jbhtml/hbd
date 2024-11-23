import React from 'react';
import './HappyBirthday.css';

const HappyBirthday = ({ name }) => {
  return (
    <div className="birthday-container">
      <h1 className="birthday-title">🎉 Happy Birthday, {name}! 🎂</h1>
      <p className="birthday-message">Wishing you all the joy and happiness on your special day!</p>
      <div className="birthday-cake">
        🥳🎂🎉🎉
      </div>
    </div>
  );
};

export default HappyBirthday;