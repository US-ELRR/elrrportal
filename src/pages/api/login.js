import careerManagerData from '@/data/career_manager/careerManagerData.json';
<<<<<<< HEAD
import learnerData from '@/data/learner/learnerData.json';
import trainingManagerData from '@/data/training_manager/trainingManagerData.json';
=======
import trainingManagerData from '@/data/training_manager/trainingManagerData.json';
import learnerData from '@/data/learner/learnerData.json';
>>>>>>> main

export default function handler(req, res) {
  const { username } = req.body;
  if (username.toLowerCase().includes('careermanager')) {
    return res.status(200).json(careerManagerData);
<<<<<<< HEAD
  } else if (username.toLowerCase().includes('trainingmanager')) {
    return res.status(200).json(trainingManagerData);
  }

  return res.status(200).json(learnerData);
=======
  }
  else if (username.toLowerCase().includes('trainingmanager')) {
    return res.status(200).json(trainingManagerData);
  }

  return res.status(200).json(learnerData)
>>>>>>> main
}
