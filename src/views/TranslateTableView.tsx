import React from 'react';
import { TRANSLATE_TABLE } from '../data/translateTable';
import { useLanguage } from '../context/LanguageContext';
import { BilingualText } from '../components/BilingualText';

export const TranslateTableView: React.FC = () => {
  const { locale } = useLanguage();

  return (
    <main className="container view-container py-12">
      <h1 className="text-3xl font-bold mb-4">UI Glossary & Translation Table</h1>
      <p className="text-subtle mb-8">Comprehensive mapping of UI terms across Web, macOS, and iOS platforms in English, Chinese, and Korean.</p>

      <div className="overflow-x-auto surface-card rounded-xl border border-border p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border text-subtle text-sm">
              <th className="p-3">English Name</th>
              <th className="p-3">Web Symbol</th>
              <th className="p-3">macOS Symbol</th>
              <th className="p-3">iOS Symbol</th>
              <th className="p-3">Chinese (zh)</th>
              <th className="p-3">Korean (ko)</th>
            </tr>
          </thead>
          <tbody>
            {TRANSLATE_TABLE.map((row, idx) => (
              <tr key={idx} className="border-b border-border/50 hover:bg-surface-elevated/50 transition-colors text-sm">
                <td className="p-3 font-medium">{row.enName}</td>
                <td className="p-3 font-mono text-xs text-subtle">{row.web || '-'}</td>
                <td className="p-3 font-mono text-xs text-subtle">{row.macos || '-'}</td>
                <td className="p-3 font-mono text-xs text-subtle">{row.ios || '-'}</td>
                <td className="p-3 text-subtle">{row.zhName || '-'}</td>
                <td className="p-3 text-subtle">{row.koName || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
