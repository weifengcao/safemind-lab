import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from './Blog';
import SEO from '../components/SEO';

const SAMPLE_CONTENT: Record<string, string> = {
  "enterprise-ai-is-a-systems-problem": `
# Enterprise AI Is Not a Model Problem — It’s a Systems Problem

Over the past two years, enterprise AI has been treated primarily as a model problem: which LLM to use, how to prompt it, and how to add retrieval.

This framing breaks down in production.

LLMs do not fail in isolation — systems do.

## What actually breaks

In real environments like security, fintech, and infrastructure, you are not optimizing for generating answers. You are optimizing for:

- Correctness under uncertainty
- Bounded execution (time, cost, risk)
- Auditability and replay
- Policy enforcement
- Consistency at scale

A simple pipeline (alert → LLM → answer) fails because inputs are noisy, reasoning is multi-step, and outputs must be safe and auditable.

## The missing layer: systems

Production AI requires more than models. It requires a system with structure.

### Determinism before AI

Validate, normalize, deduplicate, and suppress before calling any model.

### Stateful execution

Agents must track progress: what evidence exists, what is missing, and what has been attempted.

### Separation of reasoning and decision

Model output is a hypothesis — not a final decision.

A system must evaluate completeness, detect contradictions, and compute confidence.

### Bounded loops

Every investigation must be constrained by budgets: time, tokens, tool calls, and depth.

### Policy enforcement

No model should directly execute actions. All actions must pass through policy and approval layers.

### Memory as a system

Different memory types serve different roles: hot state, metadata, semantic patterns, and feedback.

### Evaluation and feedback

Systems must continuously measure and improve using both online and offline evaluation.

## A different framing

The right question is not “how do we build an agent?” but:

What is the control plane for AI execution?

This includes orchestration, state management, policy, evaluation, and observability.

## Where this leads

Instead of prompt-driven agents, we need governed systems with bounded execution and auditability.

## Next

In the next post, we will break down the architecture behind a governed agent harness and how it enables production-grade AI systems.
  `,
  "context-engineering-vs-harness-engineering": `
# Context Engineering vs. Harness Engineering

...existing content...
  `,
  "what-breaks-first-in-agentic-systems": `
# What Breaks First in Agentic Systems

...existing content...
  `,
  "policy-and-auditability-in-ai-workflows": `
# Policy and Auditability in AI Workflows

...existing content...
  `
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const content = slug ? SAMPLE_CONTENT[slug] : "";

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
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="text-xl font-bold mb-8">Related Essays</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2).map(p => (
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
