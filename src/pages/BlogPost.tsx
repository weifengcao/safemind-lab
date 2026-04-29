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
      return <img key={i} src={map[key]} className="my-12 w-full rounded-xl border" />;
    }
    return <ReactMarkdown key={i}>{part}</ReactMarkdown>;
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
        <Link to="/blog">← Back</Link>
      </div>
      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        {renderContent(post.content)}
      </article>
    </div>
  );
}
