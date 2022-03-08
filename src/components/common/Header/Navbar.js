import Link from 'next/link';
import { useRouter } from 'next/router';
import useStore from '@/store/store';
import NavBtn from './NavBtn';

const nav_options_career_manager = [
  {
    name: 'Dashboard',
    path: '/manager/career/dashboard', // will need to be reactive based on the user type
  },
  {
    name: 'Personnel',
    path: '/manager/career/personnel', // will need to be reactive based on the user type
  },
  {
    name: 'Compentencies',
    path: '/manager/career/compentencies',
  },
  {
    name: 'Search',
    path: '/manager/career/search', // will need to be reactive based on the user type
  },
];
const nav_options_learner = [
  {
    name: 'Dashboard',
    path: '/learner', // will need to be reactive based on the user type
  },
];

const nav_options = {
  manager: nav_options_career_manager,
  learner: nav_options_learner,
};

export default function Navbar() {
  const { userData, removeUserData } = useStore((state) => state);
  const router = useRouter();

  const logout = () => {
    router.push('/');
    removeUserData();
  };
  return (
    <header className='inline-flex text-white w-full py-2 justify-between items-center'>
      <div>
        {userData?.type &&
          nav_options[userData.type]?.map((option) => {
            return <NavBtn key={option.name} btn={option} />;
          })}
      </div>
      {!userData?.user?.name && (
        <Link href='/' passHref>
          <button className='inline-flex items-center px-4 py-2 mr-2 text-sm font-bold leading-5 text-white transition duration-150 ease-in-out bg-dod-500 border border-transparent rounded-md hover:bg-dod-700 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500'>
            login
          </button>
        </Link>
      )}
      {userData?.user?.name && <div onClick={logout}>{userData?.user.name}</div>}
    </header>
  );
}
