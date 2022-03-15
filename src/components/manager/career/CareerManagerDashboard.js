import Banner from '@/components/manager/common/Banner';
import EnrolledCourses from '@/components/manager/common/EnrolledCourses';
import CompletedCompetencies from '@/components/manager/common/CompletedCompetencies';

import { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import useStore from '@/store/store';
import axios from 'axios';

export default function CareerManagerDashboard() {
  const userData = useStore((state) => state.userData);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [completedCompetencies, setCompletedCompetencies] = useState([]);

  // on load, get the enrolled courses and competencies
  useEffect(() => {
    unstable_batchedUpdates(() => {
      axios.get('/api/courses').then((res) => {
        setEnrolledCourses(res.data);
      });
      axios.get('/api/competencies').then((res) => {
        setCompletedCompetencies(res.data);
      });
    });
  }, []);

  return (
    <>
      <Banner user={userData?.learner.personnel.person} />
      <div className='flex gap-4 mt-10'>
        <EnrolledCourses courses={userData?.learner.courses} />
        <CompletedCompetencies completedCompetencies={userData?.learner.competencies} />
      </div>
    </>
  );
}
