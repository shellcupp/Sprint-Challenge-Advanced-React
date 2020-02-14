
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app component without crashing', () => {
  render(<App />);
});

test('player list renders', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/playerlist/i);
})
