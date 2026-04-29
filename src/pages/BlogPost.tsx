import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import { getBlogPost } from '../content/blog';

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
          <ReactMarkdown
            components={{
              img: ({ src, alt }) => (
                <figure className="my-12 -mx-4 md:-mx-24 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <img
                    src={src || ''}
                    alt={alt || ''}
                    className="w-full h-auto rounded-xl"
                    loading="lazy"
                  />
                  {alt ? (
                    <figcaption className="mt-3 text-center text-xs text-slate-500">
                      {alt}
                    </figcaption>
                  ) : null}
                </figure>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
