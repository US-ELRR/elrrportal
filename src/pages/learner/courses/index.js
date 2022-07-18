import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';

export default function Courses() {
  const { userData } = useStore((state) => state);
  let courses = userData?.courses;

  return (
    <DefaultLayout>
    <h1 className='my-10 mx-2 text-2xl font-extrabold'> Course List </h1>
      <div className='bg-white rounded shadow p-4 flex-1'>
        <h2 className='mb-2 text-xl font-bold' >
          Courses
        </h2>
        <div className='grid gap-y-2 '>
          {/* table headers */}
          <div className='flex items-baseline font-semibold mt-2 gap-1 border-b-2 border-black'>
            <div className='flex-1'>Course Identifier</div>
            <div className='w-2/6'>Course Name</div>
            <div className='flex-1'>Provider Name</div>
            <div className='flex-1'>Start Date</div>
            <div className='flex-1'>End Date</div>
            <div className='flex-1'>Enrollment Date</div>
            <div className=''>Status</div>

          </div>
          {courses?.length > 0 &&
            courses?.map((course) => (
              <div
                key={course.name}
                className='flex items-baseline hover:underline hover:text-dod-100 cursor-pointer gap-1 even:bg-gray-50'
              >
                <div className='flex-1'>{course.courseidentifier}</div>
                <div className='w-2/6'>{course.name}</div>
                <div className='flex-1'>{course.courseprovidername}</div>
                <div className='flex-1'>{course.coursestartdate}</div>
                <div className='flex-1'>{course.courseenddate}</div>
                <div className='flex-1'>{course.courseenrollmentdate}</div>
                <div className=''>{course.recordstatus}</div>
              </div>
            ))}
          {courses.length === 0 && (
            <div className='text-center text-gray-500'>No courses enrolled</div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}
