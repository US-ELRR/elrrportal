import careerManagerCompetenciesData from '@/data/career_manager/careerManagerCompetenciesData.json';

export default function handler(req, res) {
  res.status(200).json(careerManagerCompetenciesData);
}
