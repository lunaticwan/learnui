import React, { useState } from 'react';
import { ENTRIES } from '../data/entries';
import { useLanguage } from '../context/LanguageContext';
import { BilingualText } from '../components/BilingualText';
import { getLocalizedString } from '../types/ui';

export const QuizView: React.FC = () => {
  const { locale } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentEntry = ENTRIES[currentIndex];

  if (!currentEntry) return null;

  const getNameStr = (entryItem: typeof currentEntry) => {
    return getLocalizedString(entryItem.name, locale) || entryItem.slug;
  };

  const getOptionsForEntry = (entryItem: typeof currentEntry) => {
    const correct = getNameStr(entryItem);
    const others = ENTRIES
      .filter(e => e.slug !== entryItem.slug)
      .map(e => getNameStr(e))
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    return [correct, ...others].sort(() => 0.5 - Math.random());
  };

  const [options, setOptions] = useState<string[]>(() => getOptionsForEntry(currentEntry));

  const currentName = getNameStr(currentEntry);

  const handleSelect = (option: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(option);
    if (option === currentName) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < Math.min(ENTRIES.length, 10)) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedOption(null);
      const nextEntry = ENTRIES[nextIdx];
      setOptions(getOptionsForEntry(nextEntry));
    } else {
      setShowResult(true);
    }
  };

  return (
    <main className="container view-container py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">UI Component Quiz</h1>

      {!showResult ? (
        <div className="surface-card p-6 rounded-xl border border-border">
          <div className="flex justify-between items-center text-sm text-subtle mb-4">
            <span>Question {currentIndex + 1} of {Math.min(ENTRIES.length, 10)}</span>
            <span>Score: {score}</span>
          </div>

          <p className="text-lg mb-6 font-medium">
            Which UI component is described as: <br />
            <span className="italic text-subtle font-normal mt-2 block">
              "<BilingualText text={currentEntry.description} />"
            </span>
          </p>

          <div className="space-y-3 mb-6">
            {options.map((opt, i) => {
              let btnClass = "w-full text-left p-4 rounded-lg border border-border hover:bg-surface-elevated transition-colors";
              if (selectedOption !== null) {
                if (opt === currentName) {
                  btnClass = "w-full text-left p-4 rounded-lg border border-emerald-500 bg-emerald-500/10 font-semibold";
                } else if (opt === selectedOption) {
                  btnClass = "w-full text-left p-4 rounded-lg border border-rose-500 bg-rose-500/10";
                }
              }
              return (
                <button key={i} onClick={() => handleSelect(opt)} className={btnClass} disabled={selectedOption !== null}>
                  {opt}
                </button>
              );
            })}
          </div>

          {selectedOption && (
            <button onClick={handleNext} className="btn btn-primary w-full py-3">
              Next Question
            </button>
          )}
        </div>
      ) : (
        <div className="surface-card p-8 rounded-xl border border-border text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-6">Your score: {score} / {Math.min(ENTRIES.length, 10)}</p>
          <button onClick={() => { setCurrentIndex(0); setScore(0); setShowResult(false); setSelectedOption(null); setOptions(getOptionsForEntry(ENTRIES[0])); }} className="btn btn-primary">
            Try Again
          </button>
        </div>
      )}
    </main>
  );
};
