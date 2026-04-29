/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Briefcase, 
  MapPin, 
  Target, 
  Globe, 
  Brain, 
  Rocket, 
  Monitor, 
  Users, 
  Mail, 
  Linkedin, 
  ArrowRight,
  ChevronRight,
  Phone,
  MessageSquare,
  ExternalLink,
  ShieldCheck,
  Github,
  Award,
  Database,
  GraduationCap
} from "lucide-react";
import { EXPERIENCE_DATA, REGIONS, IMPACT_POINTS, CONTACT_INFO, CERTIFICATIONS, EDUCATION_DATA } from "./constants";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#02040a] font-sans text-slate-400 selection:bg-emerald-500/30">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-[100] h-1 origin-left bg-gradient-to-r from-emerald-500 to-indigo-500"
        style={{ scaleX }}
      />

      {/* Modern Fixed Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#080a12]/80 backdrop-blur-2xl border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="group relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-600 to-emerald-500 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-black font-black text-white italic">
                S
              </div>
            </div>
            <span className="text-xl font-[950] tracking-tighter text-white uppercase italic">SHEM COLA</span>
          </motion.div>
          
          <div className="hidden items-center gap-10 text-sm font-bold text-slate-400 md:flex">
            <a href="#journey" className="transition-all hover:text-indigo-400">Experience</a>
            <a href="#outreach" className="transition-all hover:text-indigo-400">Impact</a>
            <a href="#contact" className="transition-all hover:text-indigo-400">Contact</a>
            <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-white font-bold transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20">
              <MessageSquare className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Dynamic Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
          <div className="absolute inset-0 z-0 text-indigo-500/10">
            <div className="absolute inset-0 bg-[#080a12]" />
            {/* Animated Grid lines */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-emerald-600/5 blur-[120px]" />
          </div>

          <div className="relative z-10 w-full max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:gap-12">
                <div className="flex-1">
                  <motion.div variants={fadeIn} className="mb-6 flex items-center justify-center gap-4 lg:justify-start">
                    <span className="h-0.5 w-16 bg-emerald-500"></span>
                    <span className="text-sm font-black uppercase tracking-[0.5em] text-emerald-500">Career Expedition</span>
                  </motion.div>
                  
                  <motion.h1 
                    variants={fadeIn}
                    className="mb-8 text-[12vw] font-[1000] leading-[0.85] tracking-tighter text-white sm:text-8xl lg:text-[11rem]"
                  >
                    SHEM <br />
                    COLA <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent italic">MURILA.</span>
                  </motion.h1>
                </div>
                
                <motion.div 
                  variants={fadeIn}
                  className="mb-10 max-w-md lg:mb-[3rem] mx-auto lg:mx-0"
                >
                  <p className="text-xl font-medium leading-relaxed text-slate-400">
                    Leader in <span className="text-white">AI Training</span>, <span className="text-white">STEM Education</span>, and <span className="text-white">Technical Project Management</span>. 
                    Driving digital transformation across Kenya's most innovative institutions.
                  </p>
                  
                  <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                    <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20">
                      <MessageSquare className="h-4 w-4" /> WhatsApp
                    </a>
                    <a href="#journey" className="flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 text-sm font-bold text-white hover:bg-white/5 transition-all">
                      My Journey
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                variants={fadeIn}
                className="mt-12 flex flex-wrap justify-center gap-4 lg:justify-start"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 py-4 px-6 backdrop-blur-md">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                  <span className="text-sm font-bold text-white">{CONTACT_INFO.location}</span>
                </div>
                
                <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 py-4 px-6 backdrop-blur-md hover:bg-white/10 transition-all group">
                  <Github className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white">GitHub</span>
                </a>

                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 py-4 px-6 backdrop-blur-md hover:bg-white/10 transition-all group">
                  <Linkedin className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white">LinkedIn</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <a href="#journey" className="flex flex-col items-center gap-4 text-slate-600">
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Scroll History</span>
              <div className="h-[2px] w-12 bg-white/10 overflow-hidden">
                <motion.div 
                  animate={{ x: [-48, 48] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="h-full w-full bg-indigo-500"
                />
              </div>
            </a>
          </motion.div>
        </section>

        {/* Career Journey Timeline */}
        <section id="journey" className="relative py-40 px-6 bg-[#0a0c16]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-32 flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-end">
              <div className="text-center lg:text-left">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="mb-6 block text-sm font-black uppercase tracking-[0.5em] text-indigo-500"
                >
                  Career Roadmap
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-6xl font-[1000] tracking-tighter text-white md:text-8xl"
                >
                  Experience
                </motion.h2>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-md text-center lg:text-right"
              >
                <p className="text-xl italic font-bold text-slate-500 leading-relaxed">
                  "Transforming raw technical potential into impactful educational systems."
                </p>
                <div className="mt-4 flex justify-center lg:justify-end gap-2">
                  <div className="h-1 w-12 bg-indigo-600 rounded-full" />
                  <div className="h-1 w-3 bg-emerald-600 rounded-full" />
                </div>
              </motion.div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {EXPERIENCE_DATA.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index % 2) * 0.1 }}
                  className="group relative overflow-hidden rounded-[40px] bg-white/5 p-10 ring-1 ring-white/5 transition-all hover:bg-white/10 hover:ring-indigo-500/30"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-10 flex items-start justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                        {exp.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-white/5 px-4 py-1.5 rounded-full ring-1 ring-white/10">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="mb-1 text-3xl font-black text-white">{exp.company}</h3>
                    <p className="mb-6 text-sm font-black uppercase tracking-widest text-indigo-500 italic">{exp.role}</p>
                    
                    <p className="mb-10 text-lg leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                      {exp.description}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-white/5 grid gap-4 sm:grid-cols-2">
                      {exp.highlights.slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          <span className="text-[11px] font-bold text-slate-500 leading-tight group-hover:text-slate-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 px-6 bg-[#0a0c16]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center lg:text-left">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-4 block text-sm font-black uppercase tracking-[0.5em] text-indigo-500"
              >
                Academic Background
              </motion.span>
              <h2 className="text-5xl font-black text-white tracking-tight">Education</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {EDUCATION_DATA.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-[40px] bg-white/5 p-10 ring-1 ring-white/5 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shrink-0">
                      {edu.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-1">{(edu as any).year}</div>
                      <h3 className="text-2xl font-black text-white">{edu.degree}</h3>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">{edu.institution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-24 px-6 bg-[#02040a]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center lg:text-left">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-4 block text-sm font-black uppercase tracking-[0.5em] text-emerald-500"
              >
                Achievements
              </motion.span>
              <h2 className="text-5xl font-black text-white tracking-tight">Certifications</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl bg-white/5 p-8 border border-white/5 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    {cert.icon}
                  </div>
                  <div className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-500">{cert.year}</div>
                  <h3 className="mb-2 text-xl font-bold text-white">{cert.title}</h3>
                  <p className="text-sm font-medium text-slate-500">{cert.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* National Outreach Map-Style */}
        <section id="outreach" className="py-40 px-6 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="relative rounded-[64px] bg-gradient-to-br from-indigo-900 to-indigo-700 p-8 md:p-24 shadow-2xl shadow-indigo-600/20">
              <div className="absolute bottom-0 right-0 p-12 opacity-10">
                <Globe className="h-96 w-96 text-white" />
              </div>

              <div className="relative z-10">
                <div className="max-w-3xl mb-20 text-center md:text-left">
                  <h2 className="mb-8 text-5xl font-[1000] tracking-tighter text-white md:text-8xl">Impact</h2>
                  <p className="text-2xl font-bold text-indigo-100 leading-relaxed">
                    Impact across East Africa, bringing STEM and AI literacy to diverse communities. 
                    From pedagogical training in Tanzania to virtual labs in Uganda and inclusivity initiatives in Mombasa.
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  {REGIONS.map((region, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      className="group relative"
                    >
                      <div className="absolute -inset-0.5 rounded-2xl bg-white/20 opacity-0 blur group-hover:opacity-100 transition duration-500" />
                      <div className="relative rounded-2xl bg-white/10 px-8 py-4 text-xs font-black uppercase tracking-widest text-white backdrop-blur-xl border border-white/20 transition-transform active:scale-95 cursor-default hover:text-emerald-300">
                        {region}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-24 grid gap-10 md:grid-cols-3">
                  {IMPACT_POINTS.map((point, i) => (
                    <div key={i} className="flex gap-6 items-start rounded-3xl bg-black/20 p-8 border border-white/5 transition-transform hover:scale-[1.02]">
                      <div className="h-12 w-12 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                        {point.icon}
                      </div>
                      <p className="font-bold text-indigo-50 leading-snug">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Contact Section */}
        <section id="contact" className="py-40 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-20 lg:grid-cols-2">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="mb-8 block text-sm font-black uppercase tracking-[0.6em] text-emerald-500"
                >
                  Final Connection
                </motion.span>
                <h2 className="text-6xl font-[1000] tracking-tighter text-white md:text-[5.5rem] leading-[0.9] mb-12">
                  Contact
                </h2>
                
                <div className="space-y-10">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="group flex items-center gap-8 text-xl font-black text-white hover:text-indigo-400 transition-colors">
                    <div className="h-16 w-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all">
                      <Mail />
                    </div>
                    {CONTACT_INFO.email}
                  </a>
                  
                  <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-8 text-xl font-black text-white hover:text-indigo-400 transition-colors">
                    <div className="h-16 w-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-[#0077b5]/10 transition-all">
                      <Linkedin />
                    </div>
                    /in/shem-cola
                  </a>

                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="group flex items-center gap-8 text-xl font-black text-white hover:text-emerald-400 transition-colors">
                    <div className="h-16 w-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500/10 transition-all">
                      <MessageSquare />
                    </div>
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="rounded-[48px] bg-white/5 p-12 ring-1 ring-white/5 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 h-40 w-40 bg-indigo-600/20 blur-[60px]" />
                  <h3 className="text-4xl font-black text-white mb-8">Ready to initiate?</h3>
                  <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                    Whether it's a technical program rollout, AI training consultancy, or a STEM project – I'm ready to bridge the gap.
                  </p>
                  
                  <div className="grid gap-6">
                    <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="group w-full flex items-center justify-between rounded-2xl bg-[#25D366] p-8 text-white font-bold hover:opacity-90 transition-all hover:scale-[1.02] shadow-xl shadow-[#25D366]/10">
                      <div className="flex items-center gap-4">
                        <MessageSquare className="h-6 w-6" />
                        <span className="text-2xl">WhatsApp</span>
                      </div>
                      <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-2" />
                    </a>
                    
                    <div className="flex gap-4">
                      <div className="flex-1 rounded-2xl bg-white/5 p-6 border border-white/5">
                        <div className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-widest">Skype</div>
                        <div className="text-lg font-black text-white">{CONTACT_INFO.skype}</div>
                      </div>
                      <div className="flex-1 rounded-2xl bg-white/5 p-6 border border-white/5">
                        <div className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-widest">Location</div>
                        <div className="text-lg font-black text-white">Nairobi</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-indigo-600 rounded-2xl flex items-center justify-center font-bold text-2xl text-white italic">S</div>
              <span className="text-xl font-bold text-white tracking-tight uppercase">SHEM COLA MURILA</span>
            </div>
            
            <div className="flex gap-10 text-sm font-bold text-slate-500">
              <a href="#journey" className="hover:text-white transition-colors">Experience</a>
              <a href="#outreach" className="hover:text-white transition-colors">Impact</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex gap-6">
              <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-500 hover:text-white transition-colors"><Mail className="h-5 w-5" /></a>
            </div>

            <p className="text-xs text-slate-600 font-bold tracking-widest uppercase">&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

