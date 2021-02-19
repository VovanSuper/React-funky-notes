import { render, screen } from '@testing-library/react';
import App from './App';

it('should render title of Home page header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple Notes/i);
  expect(linkElement).toBeInTheDocument();
});
