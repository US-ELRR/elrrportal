export default function Banner({ user }) {
  return (
    <div className='bg-gray-300 w-full'>
      <h1 className='text-lg text-center font-semibold'>
        Welcome {user?.name} to the Enterprise Learner Record Repository&nbsp;
        <strong>(ELRR)</strong>
      </h1>
    </div>
  );
}
