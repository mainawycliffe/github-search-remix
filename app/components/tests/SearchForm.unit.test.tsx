import { render, screen } from '@testing-library/react';
import SearchForm from '../SearchForm';

test('renders search form, with search field', () => {
  render(<SearchForm />);

  const searchField = screen.getByLabelText('Search on Github');
  expect(searchField).toBeInTheDocument();
  expect(searchField).toHaveValue('');
  expect(searchField).toHaveAttribute('required', '');

  const searchButton = screen.getByRole('button', {
    name: 'Search',
  });
  expect(searchButton).toBeInTheDocument();
});

test('renders search form, with search field and search term', () => {
  render(<SearchForm searchTerm='github' />);

  const searchField = screen.getByLabelText('Search on Github');
  expect(searchField).toBeInTheDocument();
  expect(searchField).toHaveValue('github');

  const searchButton = screen.getByRole('button', {
    name: 'Search',
  });
  expect(searchButton).toBeInTheDocument();
});
