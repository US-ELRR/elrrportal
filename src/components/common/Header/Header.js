import Banner from './Banner';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='bg-gradient-to-t from-dod-900 via-dod-500 to-dod-300'>
      <nav className='max-w-7xl mx-auto'>
        <Banner />
        <Navbar />
      </nav>
    </header>
  );
}
