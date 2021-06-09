import React from 'react';
import { render, screen } from '@testing-library/react';
import Auth from './Dashboard';

test('renders learn react link', () => {
  render(<Auth />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
