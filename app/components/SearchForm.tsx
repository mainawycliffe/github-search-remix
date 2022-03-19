import { Form } from 'remix';

export default function SearchForm() {
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
      />
      <button type='submit' className='text-xl px-4 py-2 text-white bg-blue-500 rounded-lg font-bold'>
        Search
      </button>
    </Form>
  );
}
