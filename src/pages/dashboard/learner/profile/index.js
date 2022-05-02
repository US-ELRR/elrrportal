import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import DetailsCard from '@/components/common/DetailsCard';
import HistoricalDetailsCard from '@/components/common/HistoricalDetailsCard';
import axios from 'axios';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

export default function PersonPage() {


  // user data from the store
  const userData = useStore((state) => state.userData);

  const {
    query: { personid },
  } = useAuthRouter();
  return (
    <DefaultLayout>
      <div className='bg-gray-300 w-full py-2 '>
        <h1 className='text-3xl font-semibold text-center'>
          {userData?.learner?.personnel?.person?.name}
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <DetailsCard obj={userData?.learner?.personnel?.person} title='Personnel Data' cols={2} />
        </div>
        <DetailsCard
          obj={userData?.learner?.personnel?.contactInformation}
          title='Contact Information'
          cols={2}
        />
        <div id='other-details' className='col-span-3'>
          <DetailsCard
            obj={userData?.learner?.personnel?.organization}
            title='Organization Data'
            cols={3}
          />
          <HistoricalDetailsCard
            key={'courses'}
            objArr={userData?.learner?.courses}
            title={'Courses'}
            subtitle={'Course'}
          />
          <HistoricalDetailsCard
            key={'competencies'}
            objArr={userData?.learner?.competencies}
            title={'Competencies'}
            subtitle={'Competency'}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
