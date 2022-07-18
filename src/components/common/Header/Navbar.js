import Link from 'next/link';
import NavBtn from './NavBtn';

const nav_options_career_manager = [
  {
    name: 'Dashboard',
    path: '/dashboard', // will need to be reactive based on the user type
  },
  {
    name: 'Personnel',
<<<<<<< HEAD
    path: '/dashboard/careerManager/personnel', // will need to be reactive based on the user type
  },
  {
    name: 'Competencies',
    path: '/dashboard/careerManager/competencies',
=======
    path: '/dashboard/career_manager/personnel', // will need to be reactive based on the user type
  },
  {
    name: 'Competencies',
    path: '/dashboard/career_manager/competencies',
  },
  {
    name: 'Search',
    path: '/dashboard/career_manager/search', // will need to be reactive based on the user type
>>>>>>> main
  },

  // {
  //   name: 'Search',
  //   path: '/dashboard/careerManager/search', // will need to be reactive based on the user type
  // },
];
const nav_options_learner = [
  {
    name: 'Dashboard',
    path: '/dashboard', // will need to be reactive based on the user type
  },
];

const training_manager_nav_options = [
  {
<<<<<<< HEAD
    name: 'Transcript',
    path: '/dashboard/learner/profile', // will need to be reactive based on the user type
  },
];

const training_manager_nav_options = [
  {
=======
>>>>>>> main
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    name: 'Courses',
<<<<<<< HEAD
    path: '/dashboard/trainingManager/courses',
  },
  {
    name: 'Competencies',
    path: '/dashboard/trainingManager/competencies',
  },
  {
    name: 'Learners',
    path: '/dashboard/trainingManager/learners',
=======
    path: '/dashboard/training_manager/courses',
  },
  {
    name: 'Competencies',
    path: '/dashboard/training_manager/competencies',
  },
  {
    name: 'Learners',
    path: '/dashboard/training_manager/learners',
>>>>>>> main
  },
];

const nav_options = {
  CAREER_MANAGER: nav_options_career_manager,
  TRAINING_MANAGER: training_manager_nav_options,
  LEARNER: nav_options_learner,
};

export default function Navbar({ userData, logout }) {
  if (!userData) {
    return (
      <div className='inline-flex text-white w-full py-2 justify-end items-center'>
        <Link href='/' passHref>
          <button className='inline-flex items-end px-4 py-2 text-sm font-bold leading-5 text-white transition duration-150 ease-in-out bg-dod-500 border border-transparent rounded-md hover:bg-dod-700 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500'>
            login
          </button>
        </Link>
      </div>
    );
  }

  return (
    <header className='flex text-white w-full py-2 items-center justify-between'>
      <div className='flex justify-self-start'>
        {userData?.role &&
          nav_options[userData?.role]?.map((option) => {
            return <NavBtn key={option.name} btn={option} />;
          })}
      </div>
<<<<<<< HEAD
      <div className='text-right'>
=======
      <div className='' onClick={logout}>
>>>>>>> main
        {userData?.role && <div>{userData?.role}</div>}
        {userData?.learner?.personnel?.person?.name && (
          <div>{userData?.learner.personnel.person?.name}</div>
        )}
<<<<<<< HEAD
        {userData && (
          <button
            className='inline-flex items-center px-4 py-0.5 text-sm font-bold leading-5 text-white transition duration-75 ease-in-out bg-dod-500 border border-transparent rounded-md hover:bg-dod-700 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500'
            onClick={logout}
          >
            Logout
          </button>
        )}
=======
>>>>>>> main
      </div>
    </header>
  );
}
