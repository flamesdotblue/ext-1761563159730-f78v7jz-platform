export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-sm">© {new Date().getFullYear()} ViralShorts.AI — All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm text-white/60">
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
