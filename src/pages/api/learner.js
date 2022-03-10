import learnerData from '@/data/learnerData.json';

export default function handler(req, res) {
  res.status(200).json(learnerData);
}
