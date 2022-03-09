import careerManagerData from '@/data/careerManagerData.json';
import learnerData from '@/data/learnerData.json';

export default function handler(req, res) {
  if(req.body.username.toLowerCase().includes('learner')){
    res.status(200).json(learnerData);
  }
  res.status(200).json(careerManagerData);
}
