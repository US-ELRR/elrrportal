import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';
import CompletedCompetencies from '@/components/learner/common/CompletedCompetencies';
import EnrolledCourses from '@/components/learner/common/EnrolledCourses';
import LearnerBanner from './common/LearnerBanner';

export default function LearnerDashboard() {
  const userData = useStore((state) => state.userData);
  return (
    <>
      <LearnerBanner user={userData} />
      <div className='flex gap-4 mt-10'>
        <EnrolledCourses courses={userData?.learner.courses} />
        <CompletedCompetencies
          completedCompetencies={userData?.learner.competencies}
        />
      </div>
    </>
  );
}
