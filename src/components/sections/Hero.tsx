'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-primary-foreground backdrop-blur-md"
                >
                    <span className="mr-2 flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Accepting New Projects for 2026
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mx-auto max-w-4xl text-5xl font- tracking-tight text-white sm:text-7xl lg:text-8xl"
                >
                    We ship AI that <br />
                    <span className="font-meow font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 animate-gradient pb-2 pr-2" style={{ fontFamily: 'var(--font-meow)' }}>
                        ships value.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl"
                >
                    Vision that sees, GenAI that explains, and alerts that act before issues do.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button variant="primary" size="lg">
                        Start a Project
                    </Button>
                    <Button variant="glass" size="lg">
                        View Case Studies
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
