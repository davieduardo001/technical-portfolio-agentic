export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-navy-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-600">
          &copy; 2026 Davi Eduardo. Built with Next.js + Tailwind. Deployed on Vercel.
        </p>
        <p className="text-xs font-mono text-slate-700">
          davieduardocosta.miranda@gmail.com
        </p>
      </div>
    </footer>
  );
}
