import DefaultLayout from '@/components/layouts/DefaultLayout';
import DetailsCard from '@/components/common/DetailsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CompetenciesPage() {
  const [competencies, setCompetencies] = useState([]);

  useEffect(() => {
    return axios
      .get('/api/competencies')
      .then((res) => {
        setCompetencies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold bg-gray-300 w-full py-2 text-center'>
        Competencies Page
      </h1>
      {competencies.map((competency) => (
        <DetailsCard
          key={competency.competencyframeworkid}
          obj={competency}
          title={competency.competencyframeworktitle}
          cols={3}
        />
      ))}
    </DefaultLayout>
  );
}
