import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Go to QA/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText(/Go to Production/i);
  expect(linkElement).toBeInTheDocument();
});
