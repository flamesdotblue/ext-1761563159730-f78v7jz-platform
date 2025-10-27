import { Music, Subtitles, Scissors, Sparkles, Rocket, TrendingUp } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Scissors,
      title: 'Highlight detection',
      desc: 'Finds peak emotional intensity and cuts to the most watchable 20-45s.',
    },
    {
      icon: Subtitles,
      title: 'Auto subtitles + emojis',
      desc: 'Tone-aware captions with expressive emojis and clean kinetic text.',
    },
    {
      icon: Music,
      title: 'Trending music',
      desc: 'Auto-selects trending tracks or phonk beats with beat-synced transitions.',
    },
    {
      icon: Sparkles,
      title: 'AI personalities',
      desc: 'Add Stewie Griffin, iShowSpeed, Ronaldo or custom voices to narrate or react.',
    },
    {
      icon: TrendingUp,
      title: 'Viral score',
      desc: 'Predictive score estimates performance from hook strength and visual energy.',
    },
    {
      icon: Rocket,
      title: 'One-click export',
      desc: 'HD, 9:16, watermark-free. Upload directly to YouTube Shorts.',
    },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 sm:p-8 backdrop-blur">
      <h2 className="text-2xl font-bold mb-6">Everything you need to go viral</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((f) => (
          <div key={f.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center gap-2 mb-2">
              <f.icon className="h-4 w-4" />
              <div className="font-semibold">{f.title}</div>
            </div>
            <p className="text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
