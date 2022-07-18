import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main className='max-w-7xl mx-auto mt-10'>{children}</main>
      <Footer />
    </>
  );
}
