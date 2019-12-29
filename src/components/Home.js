import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Property Pro Lite</h1>
        <br />
        <h3>
          <Link to="/signin" className="link">
            {' '}
            {' '}
            Click here to SIGN IN
            {' '}
            {' '}
          </Link>
            {' '}
            OR
            {' '}
          <Link to="/signup" className="link">
            {' '}
            {' '}
            Click here to SIGN UP
            {' '}
            {' '}
          </Link>
        </h3>
    </div>
  );
}
