import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import { blogPosts, getBlogPost } from '../content/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="py-32 text-center">
        <SEO title="Post not found" description="The blog post you are looking for does not exist." />
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-accent-cyan hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pb-32">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        type="article"
      />
      <div className="max-w-3xl mx-auto px-4 mt-12 mb-12 flex justify-between items-center">
        <Link to="/blog" className="inline-flex items-center text-sm text-secondary-text hover:text-accent-cyan transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </Link>
        <button className="text-secondary-text hover:text-accent-cyan p-2" aria-label="Share">
          <Share2 size={18} />
        </button>
      </div>

      <article className="max-w-3xl mx-auto px-4">
        <header className="mb-16">
          <div className="flex flex-wrap gap-6 mb-8 text-xs font-mono font-bold uppercase tracking-[0.2em]">
            <span className="flex items-center text-accent-cyan">
              <Tag size={12} className="mr-1.5" /> {post.category}
            </span>
            <span className="flex items-center text-secondary-text">
              <Clock size={12} className="mr-1.5" /> {post.readTime}
            </span>
             <span className="text-secondary-text">
              {post.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold italic mb-8 leading-tight">
            {post.title}
          </h1>
        </header>

        <div className="markdown-body">
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="text-xl font-bold mb-8">Related Essays</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="p-6 rounded-2xl bg-surface border border-border hover:border-accent-cyan/30 transition-all">
                <h4 className="font-bold mb-2 group-hover:text-accent-cyan transition-colors">{p.title}</h4>
                <p className="text-sm text-secondary-text line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
