/**
 * Shows a list of completed competencies.
 * @param { {
 * competencyframeworkvalidenddate: string,
 * competencyframeworktitle: string,
 * } } completedCompetencies
 */

export default function CompletedCompetencies({ completedCompetencies }) {
  return (
    <div className='bg-white rounded shadow p-4'>
      <h1 className='text-lg text-center font-semibold pb-2 border-b'>
        Completed Competencies
      </h1>
      <div className='grid gap-y-2'>
        {/* table headers */}
        <div className='flex items-baseline font-semibold mt-2'>
          <div className='w-4/6'>Title</div>
          <div>Conferred Date</div>
        </div>
        {completedCompetencies?.map((competency) => (
          <div className='flex items-baseline hover:underline hover:text-dod-100 cursor-pointer even:bg-gray-50'>
            <div className='w-4/6'>{competency.competencyframeworktitle}</div>
            <div className=''>{competency.competencyframeworkvalidenddate}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
