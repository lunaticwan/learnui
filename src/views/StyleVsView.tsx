import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { STYLES } from '../data/styles';
import { useLanguage } from '../context/LanguageContext';
import { BilingualText } from '../components/BilingualText';

export const StyleVsView: React.FC = () => {
  const { pair } = useParams<{ pair: string }>();
  const { locale } = useLanguage();

  if (!pair) return null;

  const [slugA, slugB] = pair.split('-vs-');
  const styleA = STYLES.find(s => s.slug === slugA);
  const styleB = STYLES.find(s => s.slug === slugB);

  if (!styleA || !styleB) {
    return (
      <main className="container view-container py-12">
        <h2>Comparison not found</h2>
        <Link to="/styles" className="btn btn-secondary mt-4">Back to Styles</Link>
      </main>
    );
  }

  return (
    <main className="container view-container py-12">
      <nav className="text-sm mb-6 text-subtle">
        <Link to="/styles" className="hover:underline">Styles</Link> &gt; {styleA.name[locale]} vs {styleB.name[locale]}
      </nav>

      <h1 className="text-3xl font-bold mb-8">
        <BilingualText text={styleA.name} /> vs <BilingualText text={styleB.name} />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="surface-card p-6 rounded-xl border border-border">
          <h2 className="text-xl font-bold mb-3"><BilingualText text={styleA.name} /></h2>
          <p className="text-subtle mb-4"><BilingualText text={styleA.description} /></p>
          {styleA.era && <p className="text-xs text-subtle">Era: {styleA.era}</p>}
        </div>

        <div className="surface-card p-6 rounded-xl border border-border">
          <h2 className="text-xl font-bold mb-3"><BilingualText text={styleB.name} /></h2>
          <p className="text-subtle mb-4"><BilingualText text={styleB.description} /></p>
          {styleB.era && <p className="text-xs text-subtle">Era: {styleB.era}</p>}
        </div>
      </div>
    </main>
  );
};
