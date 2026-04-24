import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from './Blog';
import SEO from '../components/SEO';

const SAMPLE_CONTENT: Record<string, string> = {
  "context-engineering-vs-harness-engineering": `
# Context Engineering vs. Harness Engineering

The current obsession with "prompt engineering" and "context window optimization" misses the fundamental tectonic shift required for production AI: **Harness Engineering**.

In the early days of agent development, we focused on how to *stuff* more into the prompt. How to give the agent more instructions, more few-shot examples, and more retrieved snippets. This stage, while productive, has hit a point of diminishing returns.

## What is Harness Engineering?

Harness Engineering is the discipline of building the infrastructure *around* the model. It is the realization that the model is just a non-deterministic CPU, and like any CPU, it needs an operating system to manage memory, I/O, and safety.

### The Three Pillars of a Hardened Harness:

1. **State Formalization:** Moving away from a monolithic "history" string and toward a structured state object that persists across runs.
2. **Deterministic Gating:** Using the model to propose actions, but using code to validate and execute them.
3. **Execution Isolation:** Ensuring that if an agent triggers a tool that fails or hangs, the entire system doesn't crash.

## Why it Matters

When we deploy agents in high-stakes environments like a Security Operations Center (SOC), we cannot afford "stochastic hallucinations." Any autonomous action must be defensible. A good harness provides the **provenance** needed to trust the agent's verdict.

If you want to build a better agent, stop tweaking your prompts. Start building a better harness.
  `,
  "what-breaks-first-in-agentic-systems": `
# What Breaks First in Agentic Systems

After deploying multiple agentic workloads into production security environments, we've identified a recurring pattern of failure. It isn't usually the model "getting it wrong"—it's the system failing around the model.

## 1. Tool-Call Ambiguity
Models are remarkably good at calling tools, but they are equally good at hallucinating tool signatures when they feel "constrained." Without strict schema enforcement at the harness level, these hallucinations lead to silent failures.

## 2. Context Poisoning
As soon as an agent ingests external data (like an EDR log or a web page), it is exposed to potential injection. If the harness doesn't treat external data as untrusted, the agent's reasoning loop can be hijacked.

## 3. Latency Cascades
Sequential reasoning loops (Think -> Act -> Observe -> Repeat) stack latency. In high-volume triage, a 5-step investigation taking 60 seconds is often too slow. Parallelization within the harness is essential for production parity.

## Conclusion

Building systems that thrive under these conditions requires a move toward **explicit orchestration**. We must design for failure rather than assuming the agent will "figure it out."
  `,
  "policy-and-auditability-in-ai-workflows": `
# Policy and Auditability in AI Workflows

The greatest barrier to AI adoption in highly regulated industries (Fintech, Healthcare, Defense) isn't model quality—it's **trust**. Specifically, the ability to audit *why* a decision was made.

## Designing for Auditability

In the SafeMind Harness, we treat every decision as a node in a graph. Each node contains:
- The input context
- The specific policy being evaluated
- The model's reasoning
- The confidence score

## The Role of Policy-as-Code

By translating legal or operational policies into structured checks (Policy-as-Code), we give the agent a "rulebook" it cannot ignore. Instead of asking the model to "be compliant," we force it to check its proposed actions against a deterministic validator.

This hybrid approach—LLM for reasoning, Code for enforcement—is the only way to satisfy the requirements of a modern compliance department.
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
