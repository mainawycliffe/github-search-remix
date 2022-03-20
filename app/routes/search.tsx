import { LoaderFunction, useLoaderData } from 'remix';
import { GitHubSearchResult } from '~/components/SearchResults';
import UserProfile from '~/components/UserProfile';
import searchUsers from '~/components/utils/searchUsers';

// loader for fetching the results on the backend
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  // get search term from url and page
  const searchTerm = url.searchParams.get('search');
  const page = url.searchParams.get('page') ?? 1; // default to page 1
  if (!searchTerm) {
    throw Error('No search term provided');
  }
  return searchUsers(searchTerm, Number(page));
};

export default function Search() {
  const results = useLoaderData<GitHubSearchResult>();
  console.log(JSON.stringify(results, null, 2));
  return (
    <>
      <div className='flex flex-col h-screen w-screen bg-gray-300 p-5'>
        <div className='flex flex-col w-2/3 mx-auto space-y-4'>
          {results.items.map((item) => (
            <UserProfile item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
