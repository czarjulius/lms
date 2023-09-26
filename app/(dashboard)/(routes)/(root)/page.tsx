import { getCourses } from '@/actions/get-courses';
import { CoursesList } from '@/components/courses-list';

export default async function Dashboard() {
  const courses = await getCourses();

  return (
    <div className="p-6 space-y-4">
      <CoursesList items={[...courses]} />
    </div>
  );
}
