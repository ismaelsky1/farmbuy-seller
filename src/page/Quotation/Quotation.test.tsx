import React from 'react';
import { render, screen } from '@testing-library/react';
import Quotation from './Quotation';

test('renders learn react link', () => {
  render(<Quotation />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
