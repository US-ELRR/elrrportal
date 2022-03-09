import Banner from './Banner';
import LoggedOutNavBar from '@/components/common/Header/LoggedOutNavBar';
import NavBar from '@/components/common/Header/NavBar';
import { useRouter } from 'next/router';
import useStore from '@/store/store';



export default function Header() {
  const { userData, removeUserData } = useStore((state) => state);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
    removeUserData();
  };

  return (
    <header className='bg-gradient-to-t from-dod-900 via-dod-500 to-dod-300'>
      <nav className='max-w-7xl mx-auto'>
        <Banner />
        <NavBar userData={userData} handleLogout={handleLogout} />
      </nav>
    </header>
  );
}
