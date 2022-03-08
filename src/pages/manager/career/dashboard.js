import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';

const UserBanner = () => {
  const { userData } = useStore((state) => state);

  return (
    <div>
      <h1 className='text-lg text-center font-semibold'>
        Welcome {userData?.user?.name} to the Enterprise Learner Record
        Repository&nbsp;
        <strong>(ELRR)</strong>
      </h1>
      <div className='flex w-full'></div>
    </div>
  );
};

export default function CareerManagerPage() {
  const userData = useStore((state) => state.userData);
  return (
    <DefaultLayout>
      <UserBanner />
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </DefaultLayout>
  );
}
