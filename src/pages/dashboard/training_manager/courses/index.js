import { useCallback, useEffect, useState } from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Tab, Listbox } from '@headlessui/react';
import axios from 'axios';

const cols = [
  'Course Name',
  'Course Code',
  'Course Start Date',
  'Course Status',
];

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get('/api/courses')
      .then(({ data }) => {
        setCourses(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold text-center bg-gray-300 w-full py-2 '>
        Courses Page
      </h1>

      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='mt-8 flex flex-col'>
          <div className='-my-2 -mx-4 sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle'>
              <div className='shadow ring-1 ring-black ring-opacity-5'>
                <table
                  className='min-w-full border-separate '
                  style={{ borderSpacing: 0 }}
                >
                  <thead className='bg-gray-50 '>
                    <tr>
                      {cols.map((col) => (
                        <th
                          scope='col'
                          className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className='bg-white text-left '>
                    {courses.length > 0 &&
                      courses.map((course) => {
                        return (
                          <tr className=' hover:text-dod-100 even:bg-gray-50 cursor-pointer group'>
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2 group-hover:text-dod-100'>
                              {course.name}
                            </td>
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2 group-hover:text-dod-100'>
                              {course.courseid || '-'}
                            </td>
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2 group-hover:text-dod-100'>
                              {course.coursestartdate || '-'}
                            </td>
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2 group-hover:text-dod-100'>
                              {course.recordstatus || '-'}
                            </td>
                          </tr>
                        );
                      })}
                    {courses.length === 0 && (
                      <tr>
                        <td colSpan='4'>No courses found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                {courses?.length === 0 && (
                  <div className='text-center text-gray-600 w-full'>
                    No personnel data found
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
