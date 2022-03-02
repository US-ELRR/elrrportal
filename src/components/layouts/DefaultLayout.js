import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer/Footer';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main className='max-w-7xl mx-auto'>{children}</main>
      <Footer />
    </>
  );
}
