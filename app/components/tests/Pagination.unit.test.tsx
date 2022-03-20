import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pagination from '../Pagination';

it('should only show next button if page is one ', () => {
  render(
    <MemoryRouter>
      <Pagination totalNumberOfPages={5} page={1} searchTerm='github' />
    </MemoryRouter>,
  );

  const nextButton = screen.getByRole('button', {
    name: /next/i,
  });

  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toHaveAttribute('href', '/search?search=github&page=2');

  expect(
    screen.queryByRole('button', {
      name: /previous/i,
    }),
  ).not.toBeInTheDocument();
});

it('should show both next and previous buttons when when page is two', () => {
  render(
    <MemoryRouter>
      <Pagination totalNumberOfPages={5} page={2} searchTerm='github' />
    </MemoryRouter>,
  );

  const nextButton = screen.getByRole('button', {
    name: /next/i,
  });

  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toHaveAttribute('href', '/search?search=github&page=3');

  const previousButton = screen.getByRole('button', {
    name: /previous/i,
  });

  expect(previousButton).toBeInTheDocument();
  expect(previousButton).toHaveAttribute('href', '/search?search=github&page=1');
});

it('should only show previous button if page is last', () => {
  render(
    <MemoryRouter>
      <Pagination totalNumberOfPages={5} page={5} searchTerm='github' />
    </MemoryRouter>,
  );

  const previousButton = screen.getByRole('button', {
    name: /previous/i,
  });

  expect(previousButton).toBeInTheDocument();
  expect(previousButton).toHaveAttribute('href', '/search?search=github&page=4');

  expect(
    screen.queryByRole('button', {
      name: /next/i,
    }),
  ).not.toBeInTheDocument();
});
