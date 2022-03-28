import DefaultLayout from '@/components/layouts/DefaultLayout';
import useAuthRouter from '@/hooks/useAuthRouter';
import axios from 'axios';
import DetailsCard from '@/components/common/DetailsCard';
import { useEffect, useState } from 'react';

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
  }, [courseid]);

  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold bg-gray-300 w-full py-2 text-center'>
        {course.name}
      </h1>

      <DetailsCard obj={course} title='Course Details' cols={3} />
    </DefaultLayout>
  );
}
