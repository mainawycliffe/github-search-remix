import { render, screen } from '@testing-library/react';
import { GitHubSearchResultItem } from '../SearchResults';
import UserProfile from '../UserProfile';

const mockSearchResultItem: GitHubSearchResultItem = {
  login: 'johndoe',
  id: 1,
  html_url: 'github.com/johndoe',
  type: 'User',
  user: {
    avatar_url: 'github.com/johndoe/avatar',
    name: 'John Doe',
    bio: "John Doe's bio",
    location: "John Doe's location",
    followers: 1,
    following: 2,
    html_url: 'github.com/johndoe',
    id: 1,
    login: 'johndoe',
    type: 'User',
  },
};

const mockSearchResultItemWithoutLocationAndBio: GitHubSearchResultItem = {
  login: 'johndoe',
  id: 1,
  html_url: 'github.com/johndoe',
  type: 'User',
  user: {
    avatar_url: 'github.com/johndoe/avatar',
    followers: 1,
    following: 2,
    html_url: 'github.com/johndoe',
    id: 1,
    login: 'johndoe',
    type: 'User',
  },
};

it('should render a user profile with location and bio', () => {
  render(<UserProfile item={mockSearchResultItem} />);

  expect(screen.getByAltText('John Doe')).toHaveAttribute('src', 'github.com/johndoe/avatar');
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toHaveAttribute('href', 'github.com/johndoe');
  expect(screen.getByText('@johndoe')).toBeInTheDocument();
  expect(screen.getByText("John Doe's bio")).toBeInTheDocument();
  expect(screen.getByText("John Doe's location")).toBeInTheDocument();
});

it('should render a user profile without location and bio', () => {
  render(<UserProfile item={mockSearchResultItemWithoutLocationAndBio} />);

  expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
  expect(screen.getByText('@johndoe')).toBeInTheDocument();
  expect(screen.queryByText("John Doe's bio")).not.toBeInTheDocument();
  expect(screen.queryByText("John Doe's location")).not.toBeInTheDocument();
});
