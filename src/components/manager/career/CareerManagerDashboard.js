import Banner from '@/components/manager/common/Banner';
import EnrolledCourses from '@/components/manager/common/EnrolledCourses';
import CompletedCompetencies from '@/components/manager/common/CompletedCompetencies';
import useStore from '@/store/store';

export default function CareerManagerDashboard() {
  const userData = useStore((state) => state.userData);
  return (
    <>
      <Banner user={userData?.learner.personnel.person} />
      <div className='flex gap-4 mt-10'>
        <EnrolledCourses courses={userData?.learner.courses} />
        <CompletedCompetencies
          completedCompetencies={userData?.learner.competencies}
        />
      </div>
    </>
  );
}
