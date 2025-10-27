import { useState } from 'react';
import { Upload, Subtitles, Music, Scissors, Bot, Wand2, Image, Mic } from 'lucide-react';

export default function HighlightForm({ onGenerate, loading }) {
  const [url, setUrl] = useState('');
  const [subtitles, setSubtitles] = useState(true);
  const [emojis, setEmojis] = useState(true);
  const [music, setMusic] = useState('trending');
  const [style, setStyle] = useState('clean');
  const [persona, setPersona] = useState('iShowSpeed');
  const [duration, setDuration] = useState(28);

  const submit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    onGenerate({ url, subtitles, emojis, music, style, persona, duration });
  };

  return (
    <div id="how" className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 sm:p-8 backdrop-blur">
      <div className="flex items-center gap-3 mb-6">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-neutral-900">
          <Upload className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Paste a link. Get a Short.</h2>
          <p className="text-white/60 text-sm">Supports YouTube, TikTok, Twitch, and more.</p>
        </div>
      </div>

      <form onSubmit={submit} className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            className="flex-1 rounded-lg border border-white/15 bg-neutral-900/60 px-4 py-3 outline-none focus:border-white/30"
            placeholder="Paste video URL (e.g., https://youtube.com/watch?v=...)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading || !url}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-neutral-900 px-5 py-3 font-semibold disabled:opacity-60"
          >
            <Wand2 className="h-5 w-5" />
            {loading ? 'Analyzing…' : 'Generate Short'}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Editing" description="Auto reframe & cuts" icon={Scissors}>
            <div className="grid grid-cols-2 gap-3">
              <Toggle label="Subtitles" icon={Subtitles} enabled={subtitles} onChange={setSubtitles} />
              <Toggle label="Emojis" icon={Image} enabled={emojis} onChange={setEmojis} />
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Clip length: {duration}s</label>
              <input type="range" min={10} max={59} value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full" />
            </div>
          </Card>

          <Card title="Audio" description="Music & voices" icon={Music}>
            <div className="space-y-3">
              <Select label="Background music" value={music} onChange={setMusic} options={[
                { value: 'trending', label: 'Trending' },
                { value: 'phonk', label: 'Phonk' },
                { value: 'lofi', label: 'Lo-fi' },
                { value: 'none', label: 'None' },
              ]} />

              <Select label="Personality voice" value={persona} onChange={setPersona} options={[
                { value: 'iShowSpeed', label: 'iShowSpeed' },
                { value: 'Ronaldo', label: 'Ronaldo' },
                { value: 'Stewie Griffin', label: 'Stewie Griffin' },
                { value: 'Natural', label: 'Natural AI' },
              ]} icon={Mic} />
            </div>
          </Card>

          <Card title="Style" description="Visual flavor" icon={Bot}>
            <div className="grid grid-cols-2 gap-3">
              {['clean', 'dynamic', 'phonk', 'meme'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStyle(s)}
                  className={`rounded-lg border px-3 py-2 text-sm capitalize transition ${style === s ? 'border-white bg-white text-neutral-900' : 'border-white/15 hover:border-white/30'}`}
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="text-xs text-white/50 mt-3">All exports are 9:16, HD, watermark-free.</p>
          </Card>
        </div>
      </form>
    </div>
  );
}

function Card({ title, description, icon: Icon, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="h-4 w-4 text-white/80" />
        <div className="font-semibold">{title}</div>
      </div>
      <p className="text-xs text-white/50 mb-4">{description}</p>
      {children}
    </div>
  );
}

function Toggle({ label, icon: Icon, enabled, onChange }) {
  return (
    <button type="button" onClick={() => onChange(!enabled)} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${enabled ? 'border-white bg-white text-neutral-900' : 'border-white/15 hover:border-white/30'}`}>
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

function Select({ label, value, onChange, options, icon: Icon }) {
  return (
    <label className="block">
      <div className="text-sm text-white/70 mb-2 inline-flex items-center gap-2">
        {Icon ? <Icon className="h-4 w-4" /> : null}
        {label}
      </div>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-lg border border-white/15 bg-neutral-900/60 px-3 py-2 outline-none focus:border-white/30">
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}
