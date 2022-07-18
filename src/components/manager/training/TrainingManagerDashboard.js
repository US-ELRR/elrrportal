<<<<<<< HEAD
import AssignedLearners from './AssignedLearners';
import Banner from '@/components/manager/common/Banner';
import CompletedCompetencies from '../common/CompletedCompetencies';
import EnrolledCourses from '../common/EnrolledCourses';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

export default function TrainingManagerDashboard() {
  const router = useAuthRouter();
  const userData = useStore((state) => state.userData);

  const handleNavigate = (course) => {
    router.push(`/dashboard/trainingManager/courses/${course.courseid}`);
  };

=======
import Banner from '@/components/manager/common/Banner';
import useStore from '@/store/store';
import EnrolledCourses from '../common/EnrolledCourses';
import CompletedCompetencies from '../common/CompletedCompetencies';
import AssignedLearners from './AssignedLearners';

export default function TrainingManagerDashboard() {
  const userData = useStore((state) => state.userData);

>>>>>>> main
  return (
    <>
      <Banner user={userData?.learner.personnel.person} />
      <div className='flex gap-4 mt-10'>
<<<<<<< HEAD
        <EnrolledCourses
          courses={userData?.learner.courses}
          handleNavigate={handleNavigate}
        />

=======
        <EnrolledCourses courses={userData?.learner.courses} />
>>>>>>> main
        <CompletedCompetencies
          completedCompetencies={userData?.learner.competencies}
        />
        <AssignedLearners learners={userData?.assigned} />
      </div>
    </>
  );
}
