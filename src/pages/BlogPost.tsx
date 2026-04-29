import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import { getBlogPost } from '../content/blog';

function renderContent(content: string) {
  const parts = content.split(/(\[\[diagram:[^\]]+\]\])/g);

  return parts.map((part, i) => {
    if (part.startsWith('[[diagram:')) {
      const key = part.replace('[[diagram:', '').replace(']]', '');
      const map: Record<string, string> = {
        harness: '/diagrams/safemind-agent-harness-architecture.svg',
        loop: '/diagrams/safemind-investigation-loop.svg',
      };
      return (
        <div key={i} className="my-14">
          <img src={map[key]} className="w-full rounded-2xl border shadow-sm" />
        </div>
      );
    }

    return (
      <ReactMarkdown
        key={i}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-16 mb-6 text-2xl font-bold tracking-tight">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-12 mb-4 text-xl font-semibold">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mb-6 text-lg leading-relaxed text-slate-600">{children}</p>
          ),
          blockquote: ({ children }) => (
            <div className="my-10 p-6 border-l-4 border-blue-500 bg-blue-50 text-lg font-medium text-slate-800">
              {children}
            </div>
          ),
        }}
      >
        {part}
      </ReactMarkdown>
    );
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return <div>Not found</div>;
  }

  return (
    <div className="pb-32">
      <SEO title={post.title} description={post.excerpt} />

      <div className="max-w-3xl mx-auto px-4 mt-12">
        <Link to="/blog" className="text-sm text-slate-500">← Back</Link>
      </div>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold tracking-tight mb-10">{post.title}</h1>
        {renderContent(post.content)}
      </article>
    </div>
  );
}
