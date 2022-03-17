import careerManagerCompetenciesData from '@/data/careerManagerCompetenciesData.json';

export default function handler(req, res) {
  res.status(200).json(careerManagerCompetenciesData);
}
