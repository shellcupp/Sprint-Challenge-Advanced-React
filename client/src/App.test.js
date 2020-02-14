
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app component without crashing', () => {
  render(<App />);
});

test('player list renders without crashing', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/playerlist/i);
})
//Write a "reasonable" amount of unit tests for your React components. 
//First I wanted to test to see if my App component rendered without crashing
//Then I tested to see if player list rendered without crashing