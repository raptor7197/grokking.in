'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function CallToAction() {
    return (
        <section className="relative py-24 sm:py-32">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />

            <div className="container relative mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto">
                        Let&apos;s discuss how our AI solutions can optimize your operations and drive value.
                    </p>

                    <div className="flex justify-center">
                        <Button variant="primary" size="lg" className="rounded-full px-8 h-12">
                            Get Started
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
