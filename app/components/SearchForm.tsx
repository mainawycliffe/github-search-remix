import { Form, useTransition } from 'remix';

type Props = {
  searchTerm?: string;
};

/**
 *
 * Form for searching GitHub users
 *
 */
export default function SearchForm({ searchTerm }: Props) {
  const transition = useTransition();

  const isBusy = transition.state === 'submitting';

  return (
    <Form method='get' action='/search' className='space-y-4'>
      <label className='font-bold text-2xl' htmlFor='search'>
        Search on Github
      </label>
      <input
        type='text'
        id='search'
        name='search'
        required
        className='bg-gray-200 appearance-none border-2 border-gray-600 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-blue-300 text-xl'
        placeholder='Search'
        defaultValue={searchTerm}
      />
      <button disabled={isBusy} type='submit' className='text-xl px-4 py-2 text-white bg-blue-500 rounded-lg font-bold'>
        {isBusy ? 'Loading...' : 'Search'}
      </button>
    </Form>
  );
}
