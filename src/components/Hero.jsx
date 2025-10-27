import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles, Zap, Play } from 'lucide-react';

export default function Hero({ onGetStarted }) {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/60 to-neutral-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-xs text-white/80">AI voice agent aura animation included</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            ViralShorts.AI
          </h1>
          <p className="max-w-3xl text-white/70 text-lg sm:text-xl">
            Turn any long video into a ready-to-upload 9:16 viral Short with highlight detection, subtitles, emojis, trending music, and AI personality reactions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center mt-2">
            <button onClick={onGetStarted} className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-5 py-3 font-medium shadow hover:shadow-lg transition">
              <Rocket className="h-5 w-5" />
              Get Started
            </button>
            <a href="#how" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-medium hover:bg-white/5 transition">
              <Play className="h-5 w-5" />
              See how it works
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
            <Stat label="Auto 9:16" icon={Zap} value="Smart reframing" />
            <Stat label="Subtitles + Emojis" icon={Sparkles} value="Tone-aware" />
            <Stat label="Music" icon={Play} value="Trending & phonk" />
            <Stat label="Export" icon={Rocket} value="HD watermark-free" />
          </div>
        </div>
      </div>
    </header>
  );
}

function Stat({ label, value, icon: Icon }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
      <div className="flex items-center gap-2 text-sm text-white/70">
        <Icon className="h-4 w-4" />
        {label}
      </div>
      <div className="mt-1 font-semibold">{value}</div>
    </div>
  );
}
