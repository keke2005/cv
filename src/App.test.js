import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CV profile heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /kekeletso tsilane/i });
  expect(heading).toBeInTheDocument();
});
