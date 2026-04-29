import type { BlogPost } from './blog';
import { blog1 } from './blog_1';
import { blog2 } from './blog_2';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [blog2, blog1];

export function getBlogPost(slug?: string) {
  if (!slug) return undefined;
  return BLOG_POSTS.find((post) => post.slug === slug);
}
