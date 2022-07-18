import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';

export default function OperatorPage() {
  const user = useStore((state) => state.user);
  return (
    <DefaultLayout>
      Operator Page
      {JSON.stringify(user)}
    </DefaultLayout>
  );
}
