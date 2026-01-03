'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Sliders, Layers, PlugZap } from 'lucide-react';

const benefits = [
    {
        title: "Your data, your rules",
        description: "All sensitive data stays in your environment, on-prem or private cloud.",
        icon: ShieldCheck
    },
    {
        title: "Built for your world",
        description: "No cookie-cutters here; solutions are tailored to your workflows, templates, and teams so they feel native from day one.",
        icon: Sliders
    },
    {
        title: "Works with what you have",
        description: "Plug-and-play with your existing cameras, ERPs/EMRs, and infrastructure—no rip-and-replace, faster time-to-value.",
        icon: PlugZap
    }
];

export function Benefits() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Why people love working with us</h2>
                    <p className="text-xl text-zinc-400 max-w-2xl">
                        A partner that ships useful AI, fits your world, and keeps your data exactly where it belongs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-primary/50 transition-colors"
                        >
                            <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                                <benefit.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
