import DefaultLayout from '@/components/layouts/DefaultLayout';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DetailsCard from '@/components/common/DetailsCard';
import HistoricalDetailsCard from '@/components/common/HistoricalDetailsCard';

export default function PersonPage() {
  // the details for the person
  const [data, setData] = useState({});

  // user data from the store
  const userData = useStore((state) => state.userData);

  const {
    query: { personid },
  } = useAuthRouter();

  // fetch the data
  useEffect(() => {
    if (personid) {
      axios.get(`/api/personnel/${personid}`, {}).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    }
  }, [personid]);

  return (
    <DefaultLayout>
      <div className='bg-gray-300 w-full py-2 '>
        <h1 className='text-3xl font-semibold text-center'>
          {data?.person?.name}
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <DetailsCard obj={data.person} title='Personnel Data' cols={2} />
        </div>
        <DetailsCard
          obj={data.contactInformation}
          title='Contact Information'
          cols={2}
        />
        <div id='other-details' className='col-span-3'>
          <DetailsCard
            obj={data.organization}
            title='Organization Data'
            cols={3}
          />
          <HistoricalDetailsCard
            key={'employment'}
            objArr={data.employment}
            title={'Employments'}
            subtitle={'Employment'}
          />
          <HistoricalDetailsCard
            key={'courses'}
            objArr={data.courses}
            title={'Courses'}
            subtitle={'Course'}
          />
          <HistoricalDetailsCard
            key={'competencies'}
            objArr={data.competencies}
            title={'Competencies'}
            subtitle={'Competency'}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
