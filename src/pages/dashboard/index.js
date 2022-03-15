import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import CareerManagerDashboard from '@/components/manager/career/CareerManagerDashboard';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuthRouter from '@/hooks/useAuthRouter';

export default function Dashboard() {
  const router = useAuthRouter();
  const userData = useStore((state) => state.userData);

  return (
    <DefaultLayout>
      {userData?.role === 'CAREER_MANAGER' && <CareerManagerDashboard />}
    </DefaultLayout>
  );
}
