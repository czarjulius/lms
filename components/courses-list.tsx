import { Course } from '@prisma/client';

import { CourseCard } from '@/components/course-card';

type CourseWithProgressWithCategory = Course;

interface CoursesListProps {
  items: CourseWithProgressWithCategory[];
}

export const CoursesList = ({ items }: CoursesListProps) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <CourseCard key={item.id} id={item.id} title={item.title} imageUrl={item.imageUrl!} price={item.price!} />
        ))}
      </div>
      {items.length === 0 && (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          <CourseCard
            key="key-id-dummy"
            id="key-id-dummy"
            title="Dummy title"
            imageUrl="https://miro.medium.com/v2/resize:fit:700/1*80bqULFI-Ia_bgu62lr6Dg.png"
            price={35.8}
          />
        </div>
      )}
    </div>
  );
};
