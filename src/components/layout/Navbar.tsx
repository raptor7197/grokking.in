'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function Navbar() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.header
                className="flex h-14 items-center justify-between gap-12 rounded-full border border-white/10 bg-black/50 px-6 backdrop-blur-xl"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-lg font-bold tracking-tight text-white hover:text-primary transition-colors">
                        Grokking<span className="text-primary">.in</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Services</Link>
                    <Link href="#industries" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Industries</Link>
                    <Link href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</Link>
                </nav>

                <div className="flex items-center gap-4">
                    {/* "Book a call" styled button */}
                    <Button variant="primary" size="sm" className="rounded-full bg-white text-black hover:bg-zinc-200 border-none h-9 px-5">
                        Book a call
                    </Button>
                </div>
            </motion.header>
        </div>
    );
}
