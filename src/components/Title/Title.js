import React from 'react';
import './Title.css';

const arrowBackSvg = (
  <svg
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 9L0 4.5L4.5 0L5.09063 0.590625L1.60312 4.07812H9V4.92188H1.60312L5.09063 8.40938L4.5 9Z"
      fill="#383838"
    />
  </svg>
);

const Title = ({ text }) => {
  return (
    <div className="container">
      {arrowBackSvg}
      <h1 className="title">{text}</h1>
    </div>
  );
};

export default Title;
