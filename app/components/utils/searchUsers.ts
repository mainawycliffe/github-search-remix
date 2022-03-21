import { json } from 'remix';
import { GitHubSearchResult, GitHubSearchResultItem, GitHubUser } from '../SearchResults';

export const API_ENDPOINT = `https://api.github.com`;

type Error = {
  message: string;
  documentation_url: string;
};

/**
 *
 * A custom type guard to check if the returned object is an error
 *
 */
function isError(obj: any): obj is Error {
  return obj && typeof obj === 'object' && 'message' in obj && 'documentation_url' in obj;
}

/**
 *
 * Search users and fetch their user profiles from Github, return a limited
 * number of users details.
 *
 */
export default async function searchUsers(query: string, page = 1) {
  const searchUrl = `${API_ENDPOINT}/search/users?q=${query}&page=${page}&per_page=10`;
  const res = await fetch(searchUrl, {
    ...(process.env.GITHUB_PAT && {
      headers: {
        Authorization: 'Basic ' + process.env.GITHUB_PAT,
      },
    }),
  });
  const body = (await res.json()) as GitHubSearchResult;
  const searchResultsWithUser = await Promise.all(
    body.items.map(async (item) => {
      const res = await fetch(`https://api.github.com/users/${item.login}`, {
        ...(process.env.GITHUB_PAT && {
          headers: {
            Authorization: 'Basic ' + process.env.GITHUB_PAT,
          },
        }),
      });
      const getUserResponse = (await res.json()) as GitHubUser | Error;
      if (isError(getUserResponse)) {
        const error = getUserResponse as Error;
        throw json(error.message, { status: 503 });
      }
      return {
        user: {
          avatar_url: getUserResponse.avatar_url,
          bio: getUserResponse.bio,
          followers: getUserResponse.followers,
          following: getUserResponse.following,
          html_url: getUserResponse.html_url,
          id: getUserResponse.id,
          login: getUserResponse.login,
          location: getUserResponse.location,
          name: getUserResponse.name,
          type: getUserResponse.type,
        },
        html_url: item.html_url,
        id: item.id,
        login: item.login,
        type: item.type,
      } as GitHubSearchResultItem;
    }),
  );

  return {
    total_count: body.total_count,
    incomplete_results: body.incomplete_results,
    items: searchResultsWithUser,
  };
}
