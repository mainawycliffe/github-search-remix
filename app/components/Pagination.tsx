import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { Link } from 'remix';

type Props = {
  page: number;
  searchTerm: string;
  totalNumberOfPages: number;
};

/**
 *
 * Show pages for Github search results
 *
 */

export default function Pagination({ page, searchTerm, totalNumberOfPages }: Props) {
  return (
    <>
      <div className='flex flex-row py-4 text-2xl space-x-2'>
        <div className='flex flex-row flex-1'>
          Showing pages {page} of {totalNumberOfPages}
        </div>
        <div className='flex flex-row space-x-2'>
          {page > 1 && (
            <Link
              role={'button'}
              className='py-1 px-6 border-2 border-black rounded-md shadow-md block text-2xl font-semibold space-x-2 align-middle'
              to={{
                pathname: '/search?search=' + searchTerm + '&page=' + (page - 1),
              }}>
              <FaChevronCircleLeft className='inline-block align-middle' />
              <span className='inline-block'>Previous</span>
            </Link>
          )}
          {page < totalNumberOfPages && (
            <Link
              role={'button'}
              className='py-1 px-6 border-2 border-black rounded-md shadow-md block text-2xl font-semibold space-x-2 align-middle'
              to={{
                pathname: '/search?search=' + searchTerm + '&page=' + (Number(page) + 1),
              }}>
              <span className='inline-block'>Next</span>
              <FaChevronCircleRight className='inline-block' />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
