import AssignedLearners from './AssignedLearners';
import Banner from '@/components/manager/common/Banner';
import CompletedCompetencies from '../common/CompletedCompetencies';
import EnrolledCourses from '../common/EnrolledCourses';
import useStore from '@/store/store';

export default function TrainingManagerDashboard() {
  const userData = useStore((state) => state.userData);

  return (
    <>
      <Banner user={userData?.learner.personnel.person} />
      <div className='flex gap-4 mt-10'>
        <EnrolledCourses courses={userData?.learner.courses} />
        <CompletedCompetencies
          completedCompetencies={userData?.learner.competencies}
        />
        <AssignedLearners learners={userData?.assigned} />
      </div>
    </>
  );
}
