import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';

export default function LearnerPage() {
  const user = useStore((state) => state.user);
  const { userData } = useStore((state) => state);

  return (
    <DefaultLayout>
      <div>
        <h1 className='text-lg text-center font-semibold'>
          Welcome {userData?.user?.name} to the Enterprise Learner Record
          Repository&nbsp;
          <strong>(ELRR)</strong>
        </h1>
        <div className='flex w-full'></div>
    </div>
    </DefaultLayout>
  );
}
