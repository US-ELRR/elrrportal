import DefaultLayout from '@/components/layouts/DefaultLayout';
import useStore from '@/store/store';

export default function Courses() {
  const { userData } = useStore((state) => state);
  let competenciesData = userData?.competencies;

  const competencies = (data) =>
    data?.map((data, index) => {
      return (
        <div className='p-8 mt-8 bg-slate-50 shadow-md rounded-md items-top h-100 gap-y-4' >
        
        <a key={index} className=''>
        <h2 className='mb-2 text-xl font-bold'>{data.competencyframeworktitle} </h2>
        <div>{data.competencyframeworkdescription}</div>
        Status: {data.recordstatus}
        </a>

        </div>
      );
    });

  return (
    <DefaultLayout>
    <h1 className='my-10 mx-2 text-2xl font-extrabold'> Competencies </h1>
      <div className='bg-white rounded shadow p-4 flex-1'>
        {/* <h2 className='mb-2 text-xl font-bold' > */}
        {competencies(competenciesData)}
        {/* </h2> */}
        
      </div>
    </DefaultLayout>
  );
}
