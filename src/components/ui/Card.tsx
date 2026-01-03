'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function Card({ children, className, delay = 0 }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10",
                className
            )}
        >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl transition-all group-hover:bg-primary/30" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
