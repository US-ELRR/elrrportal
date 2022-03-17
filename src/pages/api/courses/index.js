import careerManagerCourseData from '@/data/careerManagerCourseData.json';

export default function handler(req, res) {
  res.status(200).json(careerManagerCourseData);
}
