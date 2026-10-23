import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the headline and company details', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/roofing across West Yorkshire/i);
  expect(screen.getByText(/company number 13915962/i)).toBeInTheDocument();
});
