import { json, LoaderFunction, useLoaderData } from 'remix';
import Pagination from '~/components/Pagination';
import SearchForm from '~/components/SearchForm';
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
    throw json('No search term provided', { status: 400 });
  }
  const results = await searchUsers(searchTerm, Number(page));

  return {
    page: page,
    searchTerm,
    results,
  };
};

type LoaderDataType = {
  page: number;
  searchTerm: string;
  results: GitHubSearchResult;
};

/**
 *
 * Page for searching and displaying search results of GitHub users
 *
 */
export default function Search() {
  const { results, page, searchTerm } = useLoaderData<LoaderDataType>();

  // calculate the total number of pages
  const totalNumberOfPagesPages = Math.ceil(results.total_count / 10);

  return (
    <>
      <div className='flex flex-col h-screen w-screen bg-gray-300 p-5 overflow-y-auto'>
        <div className='flex flex-col w-[50rem] mx-auto space-y-4 '>
          <div className='flex flex-col py-4'>
            <SearchForm searchTerm={searchTerm} />
          </div>
          <div className='flex flex-row py-4 text-2xl space-x-2'>
            <span className='font-semibold'>Total results:</span> <span>{results.total_count}</span>
          </div>
          {results.items.map((item) => (
            <UserProfile item={item} key={item.id} />
          ))}

          <Pagination page={page} totalNumberOfPages={totalNumberOfPagesPages} searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
}
