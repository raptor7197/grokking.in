'use client';

import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Zap, CreditCard, Trello, Figma } from 'lucide-react';

const steps = [
    {
        step: "1",
        title: "Let's chat",
        description: "Fast discovery, virtual or in-person: what's broken, where the data lives, which AI lever fits, and what success looks like for your team.",
        icon: MessageSquare
    },
    {
        step: "2",
        title: "Build cool stuff",
        description: "Rapid prototypes in days, then harden: fine-tune GenAI and vision models on your data, design human-in-the-loop checks, and fit the workflow to your ERP/EMR.",
        icon: Sparkles
    },
    {
        step: "3",
        title: "Launch and party",
        description: "Smooth integration, monitoring, and iterative tuning so it keeps working in the wild—dust, glare, deadlines, and clinical reviews included.",
        icon: Zap
    }
];

const tools = [
    { icon: CreditCard, text: "Flexible payments" },
    { icon: MessageSquare, text: "Slack or Telegram for chat" },
    { icon: Trello, text: "Trello or Jira for tasks" },
    { icon: Figma, text: "Designed in Adobe CC and Figma" }
];

export function Services() {
    return (
        <section id="services" className="relative py-24 sm:py-32 bg-black text-white">
            <div className="container mx-auto px-6">

                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">How we turn ideas into AI magic</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">From &quot;this is annoying&quot; to &quot;wow, that&apos;s fixed,&quot; the journey starts with real pain points and ends with a tight, production-ready workflow that actually saves time.</p>
                </div>

                {/* Steps Grid */}
                <div className="grid gap-12 md:grid-cols-3 mb-24">
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-6 inline-flex items-center rounded-full bg-white px-1 py-1 pr-6">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white mr-3">
                                    <item.icon size={20} className="animate-pulse" />
                                </div>
                                <span className="font-semibold text-black">Step {item.step}</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="h-px w-full bg-zinc-800 mb-12 origin-left"
                />

                {/* Tools Section */}
                <div className="grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-3">
                        <h4 className="text-xl font-semibold flex items-center gap-4">
                            Tools we use
                            <span className="h-px flex-1 bg-zinc-800 md:hidden"></span>
                        </h4>
                    </div>

                    <div className="md:col-span-9">
                        <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                            {tools.map((tool, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 text-zinc-300"
                                >
                                    <tool.icon size={20} className="text-white" />
                                    <span>{tool.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
