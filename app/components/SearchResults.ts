export interface GitHubSearchResultItem {
  login: string;
  id: number;
  html_url: string;
  type: string;
  user: GitHubUser;
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url?: string;
  html_url: string;
  type: string;
  name?: string;
  location?: string;
  bio?: string;
  followers: number;
  following: number;
}

export interface GitHubSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubSearchResultItem[];
}
