import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import CareerManagerDashboard from '@/components/manager/career/CareerManagerDashboard';

export default function Dashboard() {
  const userData = useStore((state) => state.userData);

  return (
    <DefaultLayout>
      {userData?.type === 'CareerManager' && <CareerManagerDashboard />}
    </DefaultLayout>
  );
}
