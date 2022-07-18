import CareerManagerDashboard from '@/components/manager/career/CareerManagerDashboard';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import LearnerDashboard from '@/components/learner/LearnerDashboard';
import TrainingManagerDashboard from '@/components/manager/training/TrainingManagerDashboard';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';
<<<<<<< HEAD
=======
import CareerManagerDashboard from '@/components/manager/career/CareerManagerDashboard';
import TrainingManagerDashboard from '@/components/manager/training/TrainingManagerDashboard';
import useAuthRouter from '@/hooks/useAuthRouter';
>>>>>>> main

export default function Dashboard() {
  const router = useAuthRouter();
  const userData = useStore((state) => state.userData);

  return (
    <DefaultLayout>
      {userData?.role === 'CAREER_MANAGER' && <CareerManagerDashboard />}
      {userData?.role === 'TRAINING_MANAGER' && <TrainingManagerDashboard />}
<<<<<<< HEAD
      {userData?.role === 'LEARNER' && <LearnerDashboard />}
=======
>>>>>>> main
    </DefaultLayout>
  );
}
