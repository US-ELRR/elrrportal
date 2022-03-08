import userData from '@/data/managerUser.json';

export default function handler(req, res) {
  res.status(200).json(userData);
}
