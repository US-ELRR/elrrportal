import careerManagerCourseData from '@/data/career_manager/careerManagerCourseData.json';

export default function handler(req, res) {
  res.status(200).json(careerManagerCourseData);
}
