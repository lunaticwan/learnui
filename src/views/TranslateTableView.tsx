import React from 'react';
import { TRANSLATE_TABLE } from '../data/translateTable';

export const TranslateTableView: React.FC = () => {
  return (
    <main className="container view-container py-12">
      <h1 className="text-3xl font-bold mb-4">UI Glossary & Translation Table</h1>
      <p className="text-subtle mb-8">
        Comprehensive mapping of UI controls across AppKit (macOS) and SwiftUI.
      </p>

      <div className="overflow-x-auto surface-card rounded-xl border border-border p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border text-subtle text-sm">
              <th className="p-3">Element / Control (EN)</th>
              <th className="p-3">Chinese (ZH)</th>
              <th className="p-3">AppKit Symbol</th>
              <th className="p-3">SwiftUI Symbol</th>
            </tr>
          </thead>
          <tbody>
            {TRANSLATE_TABLE.map((row, idx) => (
              <tr key={idx} className="border-b border-border/50 hover:bg-surface-elevated/50 transition-colors text-sm">
                <td className="p-3 font-medium">{row.thing?.en || '-'}</td>
                <td className="p-3 text-subtle">{row.thing?.zh || '-'}</td>
                <td className="p-3 font-mono text-xs text-subtle">{row.appkit || '-'}</td>
                <td className="p-3 font-mono text-xs text-subtle">{row.swiftui || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
