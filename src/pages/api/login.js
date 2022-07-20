import careerManagerData from '@/data/career_manager/careerManagerData.json';
import learnerData from '@/data/learner/learnerData.json';
import systemAdminData from '@/data/systemAdmin/systemAdminData.json';
import trainingManagerData from '@/data/training_manager/trainingManagerData.json';
import learnerData from '@/data/learner/learnerData.json';

export default function handler(req, res) {
  const { username } = req.body;
  if (username.toLowerCase().includes('careermanager')) {
    return res.status(200).json(careerManagerData);
  }
  if (username.toLowerCase().includes('trainingmanager')) {
    return res.status(200).json(trainingManagerData);
  }
  if (username.toLowerCase().includes('learner')) {
    return res.status(200).json(learnerData);
  }
  if (username.toLowerCase().includes('systemadmin')) {
    return res.status(200).json(systemAdminData);
  }
  return res.status(401).json()
}
