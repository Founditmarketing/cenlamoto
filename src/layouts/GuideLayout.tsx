import React from 'react';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import Contact from '../components/Contact';

interface GuideLayoutProps {
    title: string;
    subtitle: string;
    heroImage: string;
    readTime: string;
    children: React.ReactNode;
}

export default function GuideLayout({ title, subtitle, heroImage, readTime, children }: GuideLayoutProps) {
    return (
        <div className="pt-24 min-h-screen bg-slate-900">
            {/* Article Hero */}
            <section className="relative py-24 border-b border-brand-blue/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.1),transparent)]" />
                    <img
                        src={heroImage}
                        alt={title}
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/90 to-slate-900" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-brand-blue text-xs font-bold mb-6 mx-auto tracking-widest uppercase">
                            <BookOpen className="w-4 h-4" /> {readTime} Read
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight leading-tight">
                            {title}
                        </h1>
                        <p className="text-xl text-slate-400 font-medium">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Article Body */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-invert prose-lg prose-headings:font-display prose-headings:font-bold prose-a:text-brand-blue hover:prose-a:text-brand-blue-light prose-img:rounded-3xl prose-img:border prose-img:border-white/10 max-w-none">
                        {children}
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
