import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import { BLOG_POSTS, getBlogPost } from '../content/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pb-32">
      <SEO title={post.title} description={post.excerpt} type="article" />

      <div className="max-w-3xl mx-auto px-4 mt-12 mb-12">
        <Link to="/blog" className="text-sm">← Back</Link>
      </div>

      <article className="max-w-3xl mx-auto px-4">
        <header className="mb-16">
          <div className="flex gap-6 mb-8 text-xs uppercase">
            <span>{post.category}</span>
            <span>{post.readTime}</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        </header>

        <div className="markdown-body">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
