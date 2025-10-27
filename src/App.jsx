import { useRef, useState } from 'react';
import Hero from './components/Hero';
import HighlightForm from './components/HighlightForm';
import Preview from './components/Preview';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  const formRef = useRef(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleGenerate = async (payload) => {
    setLoading(true);
    // Simulate AI pipeline with a small delay
    await new Promise((r) => setTimeout(r, 1200));

    const now = new Date();
    const seed = payload.url.length + (payload.persona || 'none').length + (payload.style || 'clean').length;
    const score = Math.min(100, 62 + (seed % 38));

    const title = `"${payload.persona || 'AI'}" reacts: ${payload.style === 'phonk' ? 'Insane Phonk Edit' : 'Unreal Moment'} | ${score}% Hook`;
    const description = `Auto-generated with ViralShorts.AI\n• Source: ${payload.url}\n• Style: ${payload.style}\n• Voice: ${payload.persona || 'Natural AI'}\n\nHashtags: #shorts #viral #ai #${payload.style}`;

    const thumbnailText = 'Best Frame + Bold Overlay';

    setResult({
      createdAt: now.toISOString(),
      url: payload.url,
      options: payload,
      title,
      description,
      score,
      duration: `${payload.duration}s`,
      thumbnailText,
      tags: ['#shorts', '#viral', '#ai', `#${payload.style}`],
      previewFrames: [
        'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1553532435-93d532a45f36?q=80&w=1600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?q=80&w=1600&auto=format&fit=crop',
      ],
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero onGetStarted={scrollToForm} />

      <main className="relative z-10">
        <section ref={formRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <HighlightForm onGenerate={handleGenerate} loading={loading} />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
          <Preview result={result} loading={loading} />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <Features />
        </section>
      </main>

      <Footer />
    </div>
  );
}
