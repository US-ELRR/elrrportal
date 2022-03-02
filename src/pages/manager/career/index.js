import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';

export default function CareerManagerPage() {
  const user = useStore((state) => state.user);
  return (
    <DefaultLayout>
      Career Manager Page
      {JSON.stringify(user)}
    </DefaultLayout>
  );
}
