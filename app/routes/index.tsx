import SearchForm from '~/components/SearchForm';

/**
 *
 * The Homepage of the Web App, show search form
 *
 */
export default function Index() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-gray-300'>
      <div className='flex flex-col max-w-full p-4 space-y-4'>
        <SearchForm />
      </div>
    </div>
  );
}
