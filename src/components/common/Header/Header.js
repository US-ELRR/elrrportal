import Banner from './Banner';
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
    <header className='bg-gradient-to-t from-dod-900 via-dod-500 to-dod-300 print:hidden'>
      <nav className='max-w-7xl mx-auto'>
        <Banner />
        <NavBar userData={userData} logout={handleLogout} />
      </nav>
    </header>
  );
}
