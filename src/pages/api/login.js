import careerManagerData from '@/data/career_manager/careerManagerData.json';

export default function handler(req, res) {
  res.status(200).json(careerManagerData);
}
