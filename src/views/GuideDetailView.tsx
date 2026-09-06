import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GUIDES } from '../data/guides';
import { useLanguage } from '../context/LanguageContext';
import { BilingualText } from '../components/BilingualText';

export const GuideDetailView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();

  const guide = GUIDES.find(g => g.slug === slug);

  if (!guide) {
    return (
      <main className="container view-container py-12">
        <h2>Guide not found</h2>
        <Link to="/" className="btn btn-secondary mt-4">Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="container view-container py-12">
      <nav className="text-sm mb-6 text-subtle">
        <Link to="/" className="hover:underline">Home</Link> &gt; Guides &gt; {guide.title[locale]}
      </nav>

      <h1 className="text-3xl font-bold mb-4"><BilingualText text={guide.title} /></h1>
      <p className="text-subtle text-lg mb-8"><BilingualText text={guide.summary} /></p>

      {guide.sections && guide.sections.map((sec, idx) => (
        <div key={idx} className="surface-card p-6 rounded-xl border border-border mb-6">
          <h2 className="text-xl font-semibold mb-3"><BilingualText text={sec.title} /></h2>
          <p className="text-subtle whitespace-pre-line"><BilingualText text={sec.content} /></p>
        </div>
      ))}
    </main>
  );
};
