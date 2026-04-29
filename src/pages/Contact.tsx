import { useState, type ReactNode } from 'react';
import { Mail, Github, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ChatWidget from '../components/ChatWidget';

export default function Contact() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="pb-24">
      <SEO 
        title="Connect with the Lab" 
        description="Have a technical challenge or an architecture you'd like to discuss? Reach out through any of these channels for advisory or partnership discussions."
      />
      <section className="pt-24 pb-20 border-b border-slate-100 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Contact</h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed">Have a technical challenge or an architecture you'd like to discuss? Reach out through any of these paths.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ContactLink 
              icon={<Mail size={20} />}
              title="Email"
              text="Direct correspondence"
              link="mailto:contact@safemindlab.com"
              subtext="contact@safemindlab.com"
            />
            <ContactLink 
              icon={<Github size={20} />}
              title="GitHub"
              text="Review the harness"
              link="https://github.com/safemind-lab"
              subtext="safemind-lab"
            />
            <ContactLink 
              icon={<Globe size={20} />}
              title="Office Hours"
              text="Schedule a deep dive"
              link="mailto:contact@safemindlab.com?subject=SafeMind%20Lab%20office%20hours"
              subtext="Request a 15m architecture review"
            />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-12 rounded-3xl bg-slate-900 text-white shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Expertise & Availability:</h2>
          <ul className="space-y-6 text-slate-300 font-light">
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span><strong>Advisory:</strong> Designing production-grade agentic infrastructure.</span>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span><strong>Collaboration:</strong> Open to focused conversations with infrastructure-first AI teams.</span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Live Chat Widget Trigger Integrated into Page Context */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
        <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-4">Want to frame the discussion?</p>
        <button 
          onClick={() => setIsChatOpen(true)}
          className="text-blue-600 hover:text-indigo-600 font-bold transition-colors underline underline-offset-4"
        >
          Open the message helper
        </button>
      </div>

      <ChatWidget isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
    </div>
  );
}

function ContactLink({ icon, title, text, link, subtext }: { icon: ReactNode, title: string, text: string, link: string, subtext: string }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer"
      className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-600/30 transition-all flex flex-col shadow-sm"
    >
      <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-600/30 transition-all mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-1 text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500 font-light mb-6">{text}</p>
      <div className="mt-auto flex items-center text-[10px] font-extrabold text-blue-600 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
        {subtext} <ArrowRight size={14} className="ml-2" />
      </div>
    </a>
  );
}
