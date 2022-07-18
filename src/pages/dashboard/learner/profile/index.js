<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import DetailsCard from '@/components/common/DetailsCard';
import HistoricalDetailsCard from '@/components/common/HistoricalDetailsCard';
import axios from 'axios';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

export default function PersonPage() {
=======
import DefaultLayout from '@/components/layouts/DefaultLayout';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DetailsCard from '@/components/common/DetailsCard';
import HistoricalDetailsCard from '@/components/common/HistoricalDetailsCard';

export default function PersonPage() {


>>>>>>> main
  // user data from the store
  const userData = useStore((state) => state.userData);

  const {
    query: { personid },
  } = useAuthRouter();
  return (
    <DefaultLayout>
      <div className='bg-gray-300 w-full py-2 '>
        <h1 className='text-3xl font-semibold text-center'>
          {userData?.learner?.personnel?.person?.name}
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
<<<<<<< HEAD
          <DetailsCard
            obj={{
              // ...data?.person,
              Id: userData?.learner?.personnel?.person?.personid,
              'Human Resource Identifier':
                userData?.learner?.personnel?.person?.humanResourceIdentifier,
              Prefix: userData?.learner?.personnel?.person?.namePrefix,
              'First Name': userData?.learner?.personnel?.person?.firstName,
              'Middle Name': userData?.learner?.personnel?.person?.middleName,
              'Last Name': userData?.learner?.personnel?.person?.lastName,
            }}
            title='Personnel Data'
            cols={2}
          />
        </div>
        <DetailsCard
          obj={{
            // ...data.contactInformation,
            'Phone Type':
              userData?.learner?.personnel?.contactInformation
                ?.telephonenumbertype,
            Phone:
              userData?.learner?.personnel?.contactInformation?.telephonenumber,
            'Email Type':
              userData?.learner?.personnel?.contactInformation
                ?.electronicmailaddresstype,
            Email:
              userData?.learner?.personnel?.contactInformation
                ?.electronicmailaddress,
          }}
=======
          <DetailsCard obj={userData?.learner?.personnel?.person} title='Personnel Data' cols={2} />
        </div>
        <DetailsCard
          obj={userData?.learner?.personnel?.contactInformation}
>>>>>>> main
          title='Contact Information'
          cols={2}
        />
        <div id='other-details' className='col-span-3'>
          <DetailsCard
            obj={userData?.learner?.personnel?.organization}
            title='Organization Data'
            cols={3}
          />
<<<<<<< HEAD

          <HistoricalDetailsCard
            key={'courses'}
            objArr={userData?.learner?.courses.map((course) => ({
              // ...course,
              Id: course.courseid,
              'Course Provider': course.courseprovidername,
              'Course Name': course.name,
              'Course Identifier': course.courseidentifier,
              'Course Level': course.courselevel,
              'Course Instruction Mode': course.courseinstructionmethod,
              'Course Department': course.departmentname,
              'Start Date': course.coursestartdate,
              'End Date': course.courseenddate,
              'Enrollment Date': course.courseenrollmentdate,
            }))}
=======
          <HistoricalDetailsCard
            key={'courses'}
            objArr={userData?.learner?.courses}
>>>>>>> main
            title={'Courses'}
            subtitle={'Course'}
          />
          <HistoricalDetailsCard
            key={'competencies'}
<<<<<<< HEAD
            cols={4}
            objArr={userData?.learner?.competencies.map((competency) => ({
              // ...competency,
              Id: competency.competencyid,
              'Competency Owner': 'Defense Acquisition University',
              'Framework Name': competency.competencyframeworktitle,
              'Framework Version': 'v1.0.3',
            }))}
=======
            objArr={userData?.learner?.competencies}
>>>>>>> main
            title={'Competencies'}
            subtitle={'Competency'}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
