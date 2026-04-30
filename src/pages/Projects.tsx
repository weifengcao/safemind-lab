import { Link } from 'react-router-dom';
import { ChevronRight, Cpu, KeyRound, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { projectSummaries } from '../content/projects';

export default function Projects() {
  return (
    <div className="pb-24">
      <SEO
        title="Field Workloads & Projects"
        description="Concrete workloads used to validate SafeMind Harness across cybersecurity, compliance, and governed enterprise AI workflows."
      />
      <section className="pt-24 pb-20 border-b border-slate-100 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Field Workloads</h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Applied systems from the implementation used to test the harness against realistic enterprise workflows: messy inputs, incomplete evidence, policy constraints, governed execution, replay, and tenant rollout requirements.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectSummaries.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="group flex flex-col transition-all"
            >
              <div className="aspect-[16/10] bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:border-slate-300 transition-all">
                <div className="w-full h-full bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
                  <div className="p-6 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                    {project.accent === 'blue' ? (
                      <ShieldCheck size={32} className="text-blue-600" />
                    ) : project.accent === 'emerald' ? (
                      <KeyRound size={32} className="text-emerald-600" />
                    ) : (
                      <Cpu size={32} className="text-indigo-600" />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-500 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                  {project.domain}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-6 line-clamp-3">{project.desc}</p>

              <div className="flex items-center font-bold text-xs uppercase tracking-widest text-slate-900 group-hover:text-blue-600 transition-transform">
                Read Case Study <ChevronRight size={14} className="ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
