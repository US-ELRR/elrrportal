import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Banner from '@/components/manager/common/Banner';
import EnrolledCourses from '@/components/manager/common/EnrolledCourses';
import CompletedCompetencies from '@/components/manager/common/CompletedCompetencies';
import { unstable_batchedUpdates } from 'react-dom';

export default function Dashboard() {
  const userData = useStore((state) => state.userData);
  const [courseData, setCourseData] = useState([]);
  const [competenciesData, setCompetenciesData] = useState([]);

  useEffect(() => {
    unstable_batchedUpdates(() => {
      axios.get('/api/courses').then((res) => {
        setCourseData(res.data);
      });
      axios.get('/api/competencies').then((res) => {
        setCompetenciesData(res.data);
      });
    });
  }, []);
  return (
    <DefaultLayout>
      <>
        <Banner user={userData?.user} />
        <div className='flex gap-4 mt-10'>
          <EnrolledCourses courses={courseData} />
          <CompletedCompetencies completedCompetencies={competenciesData} />
        </div>
      </>
    </DefaultLayout>
  );
}
