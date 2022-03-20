import { GitHubSearchResult, GitHubSearchResultItem, GitHubUser } from '../SearchResults';

export const API_ENDPOINT = `https://api.github.com`;

/**
 *
 * Search users and fetch their user profiles from Github, return a limited
 * number of users details.
 *
 */
export default async function searchUsers(query: string, page = 1) {
  const searchUrl = `${API_ENDPOINT}/search/users?q=${query}&page=${page}&per_page=10`;
  const res = await fetch(searchUrl);
  const body = (await res.json()) as GitHubSearchResult;
  const searchResultsWithUser = await Promise.all(
    body.items.map(async (item) => {
      const res = await fetch(`https://api.github.com/users/${item.login}`);
      const user = (await res.json()) as GitHubUser;
      return {
        user: {
          avatar_url: user.avatar_url,
          bio: user.bio,
          followers: user.followers,
          following: user.following,
          html_url: user.html_url,
          id: user.id,
          login: user.login,
          location: user.location,
          name: user.name,
          type: user.type,
        },
        html_url: item.html_url,
        id: item.id,
        login: item.login,
        type: item.type,
      } as GitHubSearchResultItem;
    }),
  );

  return {
    totalCount: body.total_count,
    incompleteResults: body.incomplete_results,
    items: searchResultsWithUser,
  };
}
