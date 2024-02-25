import React from 'react';
import Category from './Component/Category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBrain, faMessage, faEye } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const categoriesData = [
  { icon: faBolt, value1: 'Reaction', value2: '80/100', bgcolor: '#fff6f4', txtcolor: '#f2a3ac', bgborder: 'none' },
  { icon: faBrain, value1: 'Memory', value2: '92/100', bgcolor: '#fffcef', txtcolor: '#f6e4a1', bgborder: 'none' },
  { icon: faMessage, value1: 'Verbal', value2: '71/100', bgcolor: '#f2fbfa', txtcolor: '#81cdba', bgborder: 'none' },
  { icon: faEye, value1: 'Visual', value2: '62/100', bgcolor: '#f3f3ff', txtcolor: '#888ec7', bgborder: 'none' },
];

function App() {
  return (
    <div className='widget'>
      <div className='LeftContent'>
        <h3>Your Result</h3>
        <div className='circle-container'>
          <div className='circle'>
            <span className='big-number'>76</span>
            <span className='small-text'>of 100</span>
          </div>
        </div>
        <h1>Great</h1>
        <p className="review">
          You scored higher than 65% of the people who have taken these tests
        </p>
      </div>
      <div className='RightContent'>
        <h2>Summary</h2>
        {categoriesData.map((category, index) => (
          <Category key={index} {...category} />
        ))}
        <button>Continue</button>
      </div>
    </div>
  );
}

export default App;
