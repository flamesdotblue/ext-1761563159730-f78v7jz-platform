import { useMemo } from 'react';
import { TrendingUp, Image as ImageIcon, Share2 } from 'lucide-react';

export default function Preview({ result, loading }) {
  const barColor = useMemo(() => {
    if (!result) return 'bg-white/20';
    if (result.score >= 85) return 'bg-emerald-400';
    if (result.score >= 70) return 'bg-amber-400';
    return 'bg-red-400';
  }, [result]);

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Preview</h3>
          <span className="text-xs text-white/50">9:16 • HD</span>
        </div>
        <div className="relative mx-auto w-full max-w-[360px] aspect-[9/16] overflow-hidden rounded-xl bg-neutral-900">
          {result ? (
            <img src={result.previewFrames[0]} alt="Frame" className="h-full w-full object-cover" />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-white/40">
              {loading ? 'Processing…' : 'Your preview will appear here'}
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="rounded bg-black/60 px-2 py-1 text-xs">Auto-subtitles • Emojis • {result?.options?.style || 'style'}</div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button className="rounded-lg border border-white/15 px-4 py-2 text-sm hover:border-white/30">Download MP4</button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-4 py-2 text-sm font-semibold">
            <Share2 className="h-4 w-4" />
            Export to YouTube
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4" />
            <div className="font-semibold">Viral potential</div>
          </div>
          <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
            <div className={`h-full ${barColor}`} style={{ width: `${result ? result.score : 0}%` }} />
          </div>
          <div className="mt-2 text-sm text-white/70">
            {result ? `${result.score}% likelihood based on hook strength, pace, and visual energy.` : 'Get a score after generating.'}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="font-semibold mb-2">Title & Description</div>
          <div className="space-y-2">
            <input className="w-full rounded-lg border border-white/15 bg-neutral-900/60 px-3 py-2" value={result?.title || ''} readOnly placeholder="AI title will appear here" />
            <textarea className="w-full rounded-lg border border-white/15 bg-neutral-900/60 px-3 py-2" rows={4} value={result?.description || ''} readOnly placeholder="AI description will appear here" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center gap-2 mb-3">
              <ImageIcon className="h-4 w-4" />
              <div className="font-semibold">Thumbnail</div>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-neutral-900">
              {result ? (
                <img src={result.previewFrames[1]} className="h-full w-full object-cover" alt="Thumbnail" />
              ) : (
                <div className="h-full grid place-items-center text-white/40">Auto-picked best frame</div>
              )}
            </div>
            <div className="mt-2 text-xs text-white/60">{result ? result.thumbnailText : 'Uses the best frame + bold text overlay'}</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="font-semibold mb-2">Tags</div>
            <div className="flex flex-wrap gap-2">
              {(result?.tags || ['#shorts', '#viral', '#ai']).map((t) => (
                <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">{t}</span>
              ))}
            </div>
            <div className="mt-4 text-xs text-white/50">SEO optimized for Shorts discovery.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
