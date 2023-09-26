import { Category, Course } from '@prisma/client';

import { db } from '@/lib/db';

type CourseWithCategory = Course & {
  category: Category | null;
};

export const getCourses = async (): Promise<CourseWithCategory[]> => {
  try {
    const courses = await db.course.findMany({
      include: {
        category: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return courses;
  } catch (error) {
    console.log('[GET_COURSES]', error);
    return [];
  }
};
