import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';
import { useEffect, useState } from 'react';

export default function LearnerPersonnelPage() {
  const { userData } = useStore((state) => state);
  // const [userData, setUserData] = useState([]);

  console.log(userData);

  const personInfo = [
    { title: 'Name', details: userData?.user.name },
    { title: 'Preferred Name', details: userData?.user.preferredName },
    { title: 'Title', details: userData?.user.titleAffixcode },
    { title: 'HR ID', details: userData?.user.humanResourceIdentifier },
    { title: 'DOB', details: userData?.user.birthdate },
    { title: 'Sex', details: userData?.user.sex },
    { title: 'Veteran', details: userData?.user.militaryVeteranindicator },
    { title: 'Primary Language', details: userData?.user.primaryLanguage },
    { title: 'Citizenship', details: null },
  ];

  const contactInfo = [
    { title: 'Phone Number', details: userData?.contactInformation.telephonenumber },
    { title: 'Email', details: userData?.contactInformation.electronicmailaddress },
    {
      title: 'Preferred Contact method',
      details: userData?.contactInformation.contactinformation,
    },
  ];

  const orgInfo = [
    { title: 'Organization Name', details: userData?.organization.organizationname },
    {
      title: 'Organization Identifier',
      details: userData?.organization.organizationidentifier,
    },
    {
      title: 'Organization Identification Code',
      details: userData?.organization.organizationidentificationcode,
    },
    { title: 'Organization FEIN', details: userData?.organization.organizationfein },
    {
      title: 'Organization Description',
      details: userData?.organization.organizationdescription,
    },
    {
      title: 'Industry Identifier',
      details: userData?.organization.industrytypeidentifier,
    },
    {
      title: 'Parent Organization',
      details: userData?.organization.parentorganization,
    },
  ];

  const employment = (userEmp) =>
    userEmp?.map((userEmp, index) => {
      let employmentinformation = [
        { title: 'Employer Name', details: userEmp.employerName },
        { title: 'Employer ID', details: userEmp.employmentid },
        { title: 'Employer Department', details: userEmp.employerdepartment },
        { title: 'Hire Date', details: userEmp.hiredate },
        {
          title: 'Employment Start Date',
          details: userEmp.employmentstartdate,
        },
        { title: 'Employment End Date', details: userEmp.employmentenddate },
        { title: 'Position', details: userEmp.joblevel },
        { title: 'Employed', details: userEmp.employed },
        { title: 'Occupation', details: userEmp.occupation },
      ];
      return (
        <div className='p-8 mt-8 bg-slate-50 shadow-md rounded-md grid grid-cols-3 items-top h-100 gap-y-4' >
          {employmentinformation.map((info, index) => {
            return (
              <a key={index} className=''>
                {info.title} : {info.details}
              </a>
            );
          })}
        </div>
      );
    });

  const makeList = (list) =>
    list.map((list, index) => {
      // console.log(list);
      return (
        <a key={index} className=''>
          {list.title} : {list.details}
        </a>
      );
    });

  return (
    <DefaultLayout>
      <h1 className='mt-2 mx-2 text-2xl font-extrabold'>Personnel Informtion </h1>
      <div>
        <div className='flex flex-col px-4 mt-6 mx-auto bg-slate-100'>
          <div className=' '>
            <div className='gap-8 p-8 mx-auto mt-10 bg-white shadow-md rounded-md'>
              <h2 className='mb-6 text-xl font-bold' >Person Details </h2>
              <p className='grid grid-cols-3 items-top gap-3'>
                {makeList(personInfo)}
              </p>
            </div>
            <div className='p-8 mx-auto mt-10 bg-white col-span-3 flex flex-col shadow-md rounded-md'>
              <h2 className='mb-6 text-xl font-bold'> Contact Informtion </h2>
              <p className='grid grid-cols-3 items-center h-100 gap-y-4'>{makeList(contactInfo)}</p>
            </div>
            <div className='p-8 mx-auto mt-10 bg-white col-span-3 flex flex-col shadow-md rounded-md'>
              <h2 className='mb-6 text-xl font-bold'> Organization </h2>
              <p className='grid grid-cols-3 items-top h-100 gap-y-4'>{makeList(orgInfo)}</p>
            </div>
            <div className='p-8 mx-auto my-auto mt-10 bg-white col-span-3 flex flex-col shadow-md rounded-md h-72 overflow-y-auto'>
              <h2 className='text-xl font-bold'> Employment </h2>
              <p className='h-100 gap-y-4'>
                {employment(userData?.employment)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
