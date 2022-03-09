import careerManagerData from '@/data/careerManagerData.json';

export default function handler(req, res) {
  res.status(200).json(careerManagerData);
}
