'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function Industries() {
    return (
        <section id="cool-ai" className="relative min-h-[80vh] flex flex-col items-center justify-center py-24 sm:py-32 overflow-hidden bg-black">
            {/* Background Stars */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-1 w-1 bg-white rounded-full"
                        initial={{ opacity: 0.2, scale: 0.5 }}
                        animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.5, 0.5] }}
                        transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-white mb-4 text-sm tracking-widest uppercase flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Built by creative engineers
                        <Sparkles className="w-4 h-4 text-primary" />
                    </p>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal text-white mb-16" style={{ fontFamily: 'Georgia, serif' }}>
                        Cool AI Stuff <span className="font-meow text-primary italic" style={{ fontFamily: 'var(--font-meow)' }}>We Build!</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">Hospital Helper Bot</h3>
                            <p className="text-zinc-400">AI assistants that write perfect discharge summaries so doctors can focus on what matters most - patients!</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">Smart Vision Tech</h3>
                            <p className="text-zinc-400">We teach computers to see and understand the world - it&apos;s like giving them superpowers!</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">Automate Data Capture</h3>
                            <p className="text-zinc-400">Turn documents into data with OCR and document AI so teams stop copy-pasting and start doing real work.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
