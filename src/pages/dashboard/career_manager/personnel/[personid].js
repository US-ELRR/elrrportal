import DefaultLayout from '@/components/layouts/DefaultLayout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function DetailsCard({ obj, title, cols }) {
  // determine what grid to use
  let gridToUse = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
  };

  return (
    <div className='rounded shadow p-4 bg-gray-50 my-4 gap-4'>
      <h1 className='text-xl pb-4 border-b font-bold'>{title}</h1>
      <div
        className={`grid ${
          gridToUse[cols] || 'grid-cols-3'
        } gap-4 pt-2 overflow-hidden`}
      >
        {obj &&
          Object.keys(obj)
            // sort the keys by length ascending
            .sort((a, b) => a.length - b.length)
            .map((key) => {
              return (
                <div key={key} className=''>
                  <div className='font-semibold text-gray-500'>{key}</div>
                  {obj[key] ? (
                    <span className='text-gray-700'>{obj[key]}</span>
                  ) : (
                    <span className=''>--</span>
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
}

function HistoricalDetailsCard({ obj, title, subtitle, cols }) {
  return (
    <div className='rounded shadow p-4 bg-gray-50 my-4 gap-4'>
      <h1 className='text-xl pb-4 border-b font-bold'>{title}</h1>
      <div className='grid gap-4'>
        {obj &&
          obj.map((employment, index) => {
            // returns each historical element
            return (
              <div className='border p-4 rounded-md shadow border-gray-900'>
                <h2 className='text-xl font-semibold'>
                  {subtitle} #{index + 1}
                </h2>
                <div className={`grid grid-cols-${cols || 3} gap-4`}>
                  {Object.keys(employment).map((key) => {
                    // maps over the keys and returns the keys and values accordingly
                    return (
                      <div key={key} className=''>
                        <div className='font-semibold text-gray-500'>{key}</div>
                        {employment[key] ? (
                          <span className='text-gray-700'>
                            {employment[key]}
                          </span>
                        ) : (
                          <span className=''>--</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default function PersonPage() {
  const {
    query: { personid },
  } = useRouter();

  const [data, setData] = useState({});

  useEffect(() => {
    // fetch the data
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
            obj={data.employment}
            title={'Employments'}
            subtitle={'Employment'}
          />
          <HistoricalDetailsCard
            obj={data.courses}
            title={'Courses'}
            subtitle={'Course'}
          />
          <HistoricalDetailsCard
            obj={data.competencies}
            title={'Competencies'}
            subtitle={'Competency'}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
