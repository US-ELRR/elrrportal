import DefaultLayout from '@/components/layouts/DefaultLayout';
import useAuthRouter from '@/hooks/useAuthRouter';
import DetailsCard from '@/components/common/DetailsCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CompetencyPage() {
  const [competency, setCompetency] = useState({});
  const {
    query: { competencyid },
  } = useAuthRouter();

  // fetch the data
  useEffect(() => {
    if (!competencyid) return;
    axios
      .get(`/api/competencies/${competencyid}`)
      .then((response) => {
        setCompetency(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [competencyid]);

  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold bg-gray-300 w-full py-2 text-center'>
        {competency.competencyframeworktitle}
      </h1>
      <DetailsCard obj={competency} title='Competency' cols={3} />
    </DefaultLayout>
  );
}
