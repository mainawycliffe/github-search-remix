import { GitHubSearchResultItem } from './SearchResults';
import { FaGithub } from 'react-icons/fa';

type Props = {
  item: GitHubSearchResultItem;
};

/**
 *
 * A component for displaying a single user profile from Github Search Results
 *
 */
export default function UserProfile({ item }: Props) {
  return (
    <>
      <div className='flex flex-row space-x-2 px-4 py-6 rounded-md shadow-lg bg-white'>
        <img
          src={item.user.avatar_url}
          alt={item.user.name}
          className='inline object-cover w-20 h-20 mr-2 rounded-full'
        />
        <div className='flex flex-col space-y-2'>
          <h4 className='text-2xl font-semibold'>
            <a href={item.user.html_url}>
              {item.user.name} <span className='text-md text-gray-600'>@{item.login}</span>
            </a>
          </h4>
          {item.user.bio && <div className='text-xl'>{item.user.bio}</div>}
          {item.user.location && <div className='text-lg font-semibold text-gray-500'>{item.user.location}</div>}
          <div className='text-xl space-y-2 md:space-y-0 md:space-x-4 flex flex-col  md:flex-row text-center'>
            <div className='flex flex-row space-x-2'>
              <div className='font-bold'>Followers:</div>
              <div>{item.user.followers}</div>
            </div>
            <div className='flex flex-row space-x-2'>
              <div className='font-bold'>Following:</div>
              <div>{item.user.following}</div>
            </div>
            <div className='flex flex-row '>
              <a className='block' target='_blank' href={item.user.html_url} rel='noreferrer'>
                <FaGithub className='inline-block' /> <span className='inline-block'> GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
