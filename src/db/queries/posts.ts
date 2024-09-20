import type { Post } from '@prisma/client';
import { db } from '@/db';

export type PostWithData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

//Looks at type of fetchPostByTopicSlugs, looks at return, looks @ what promise gets resolved with, bc resolving promise with an array of post objects, square bracket takes type of one element inside of array
// export type PostWithData = Awaited<
//   ReturnType<typeof fetchPostsByTopicSlug>
// >[number];

export function fetchPostsByTopicSlug(slug: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}
