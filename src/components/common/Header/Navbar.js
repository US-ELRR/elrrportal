import Link from 'next/link';
import { useRouter } from 'next/router';

const nav_options = [
  {
    name: 'Dashboard',
    path: '/manager/career', // will need to be reactive based on the user type
  },
  {
    name: 'Personnel',
    path: '/manager/career/personnel', // will need to be reactive based on the user type
  },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <header className='inline-flex text-white w-full py-2 justify-between'>
      <div>
        {nav_options.map((option) => (
          <Link href={option.path} key={option.name} passHref>
            <button className='inline-flex items-center px-4 py-2 mr-2 text-sm font-bold leading-5 text-white transition duration-150 ease-in-out bg-dod-500 border border-transparent rounded-md hover:bg-dod-700 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500'>
              {option.name}
            </button>
          </Link>
        ))}
      </div>
      <Link href='/' passHref>
        <button className='inline-flex items-center px-4 py-2 mr-2 text-sm font-bold leading-5 text-white transition duration-150 ease-in-out bg-dod-500 border border-transparent rounded-md hover:bg-dod-700 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500'>
          login
        </button>
      </Link>
    </header>
  );
}
