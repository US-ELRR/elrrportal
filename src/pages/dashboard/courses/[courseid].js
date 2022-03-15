import DefaultLayout from '@/components/layouts/DefaultLayout';
import useAuthRouter from '@/hooks/useAuthRouter';
import axios from 'axios';
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

export default function CoursePage() {
  const router = useAuthRouter();
  const [course, setCourse] = useState({});
  const {
    query: { courseid },
  } = router;

  // on mount retrieve course data
  useEffect(() => {
    if (courseid) {
      axios
        .get(`/api/courses/${courseid}`)
        .then((res) => {
          setCourse(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <DefaultLayout>
      <div className='bg-gray-300 w-full py-2 text-center'>
        <h1 className='text-3xl font-semibold'>{course.name}</h1>
      </div>
      <DetailsCard obj={course} title='Course Details' cols={3} />
    </DefaultLayout>
  );
}
