import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';

export default function LearnerPage() {
  const user = useStore((state) => state.user);
  return (
    <DefaultLayout>
      Learner Page
      {JSON.stringify(user)}
    </DefaultLayout>
  );
}
