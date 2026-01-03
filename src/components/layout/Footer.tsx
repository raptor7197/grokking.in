export function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10 text-zinc-400 text-sm">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-white font-bold text-lg mb-4">Grokking</h3>
                    <p>Shipping AI that delivers real value across industries.</p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Email</h4>
                    <ul className="space-y-2">
                        <li><a href="mailto:viswapriya.misra@gmail.com" className="hover:text-primary transition-colors">viswapriya.misra@gmail.com</a></li>
                        <li><a href="mailto:viswarup004@gmail.com" className="hover:text-primary transition-colors">viswarup004@gmail.com</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Phone</h4>
                    <ul className="space-y-2">
                        <li>+91 - 9220711331</li>
                        <li>+91 - 9211341112</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Location</h4>
                    <p>Delhi - NCR, India</p>
                </div>
            </div>
            <div className="container mx-auto px-6 text-center pt-8 border-t border-white/5">
                &copy; 2026 Grokking. All rights reserved.
            </div>
        </footer>
    )
}
