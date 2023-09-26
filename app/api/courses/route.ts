import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { title } = await req.json();

    const course = await db.course.create({
      data: {
        userId: 'euf434kf445',
        title,
        description:
          'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
        imageUrl: 'https://www.codespot.org/assets/cover/web-development-courses.jpg',
        price: 75.5,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log('[COURSES]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
