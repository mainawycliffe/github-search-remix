import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { json, Link, LoaderFunction, useLoaderData } from 'remix';
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

export default function Search() {
  const { results, page, searchTerm } = useLoaderData<LoaderDataType>();

  // calculate the total number of pages
  const totalPages = Math.ceil(results.total_count / 10);

  return (
    <>
      <div className='flex flex-col h-screen w-screen bg-gray-300 p-5 overflow-y-auto'>
        <div className='flex flex-col w-2/3 mx-auto space-y-4 '>
          <div className='flex flex-col py-4'>
            <SearchForm />
          </div>
          <div className='flex flex-row py-4 text-2xl space-x-2'>
            <span className='font-semibold'>Total results:</span> <span>{results.total_count}</span>
          </div>
          {results.items.map((item) => (
            <UserProfile item={item} key={item.id} />
          ))}
          <div className='flex flex-row py-4 text-2xl space-x-2'>
            <div className='flex flex-row flex-1'>
              Showing pages {page} of {totalPages}
            </div>
            <div className='flex flex-row space-x-2'>
              {page > 1 && (
                <Link
                  className='py-1 px-6 border-2 border-black rounded-md shadow-md block text-2xl font-semibold space-x-2 align-middle'
                  to={{
                    pathname: '/search?search=' + searchTerm + '&page=' + (page - 1),
                  }}>
                  <span className='inline-block align-middle'>
                    <FaChevronCircleLeft />
                  </span>
                  <span className='inline-block'>Previous</span>
                </Link>
              )}
              {page < totalPages && (
                <Link
                  className='py-1 px-6 border-2 border-black rounded-md shadow-md block text-2xl font-semibold space-x-2 align-middle'
                  to={{
                    pathname: '/search?search=' + searchTerm + '&page=' + (Number(page) + 1),
                  }}>
                  <span className='inline-block'>Next</span>
                  <span className='inline-block align-middle'>
                    <FaChevronCircleRight />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
