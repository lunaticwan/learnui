import React, { useState } from 'react';
import { ENTRIES } from '../data/entries';
import { UI_COPY } from '../data/uiCopy';
import { useLanguage } from '../context/LanguageContext';
import { BilingualText } from '../components/BilingualText';
import { getLocalizedString } from '../types/ui';

export const QuizView: React.FC = () => {
  const { locale, langMode } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const getCopy = (key: string) => getLocalizedString(UI_COPY[key] as any, langMode === 'bilingual' ? 'en' : langMode);

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

  const quizTitleText = getCopy('quizTitle');
  const questionLabel = langMode === 'ko'
    ? `문제 ${currentIndex + 1} / ${Math.min(ENTRIES.length, 10)}`
    : langMode === 'zh'
    ? `第 ${currentIndex + 1} / ${Math.min(ENTRIES.length, 10)} 题`
    : `Question ${currentIndex + 1} of ${Math.min(ENTRIES.length, 10)}`;

  const scoreLabel = langMode === 'ko'
    ? `점수: ${score}`
    : langMode === 'zh'
    ? `得分: ${score}`
    : `Score: ${score}`;

  const promptQuestionText = langMode === 'ko'
    ? '다음 설명에 해당하는 UI 컴포넌트는 무엇일까요?'
    : langMode === 'zh'
    ? '下面描述的是哪个 UI 组件？'
    : 'Which UI component is described as:';

  const nextBtnText = getCopy('quizNext');
  const completedTitle = langMode === 'ko'
    ? '퀴즈 완료!'
    : langMode === 'zh'
    ? '测验完成！'
    : 'Quiz Completed!';

  const finalScoreText = langMode === 'ko'
    ? `최종 점수: ${score} / ${Math.min(ENTRIES.length, 10)}`
    : langMode === 'zh'
    ? `最终得分: ${score} / ${Math.min(ENTRIES.length, 10)}`
    : `Your score: ${score} / ${Math.min(ENTRIES.length, 10)}`;

  const tryAgainText = getCopy('quizReset');

  return (
    <main className="container view-container py-12 max-w-2xl mx-auto wrap" style={{ paddingTop: '32px', paddingBottom: '64px' }}>
      <h1 className="text-3xl font-bold mb-6 text-center">{quizTitleText}</h1>

      {!showResult ? (
        <div className="surface-card p-6 rounded-xl border border-border" style={{ border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', background: 'var(--bg)' }}>
          <div className="flex justify-between items-center text-sm text-subtle mb-4" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '13px', color: 'var(--gray-500)' }}>
            <span>{questionLabel}</span>
            <span>{scoreLabel}</span>
          </div>

          <p className="text-lg mb-6 font-medium" style={{ fontSize: '16px', fontWeight: 500, marginBottom: '20px' }}>
            {promptQuestionText} <br />
            <span className="italic text-subtle font-normal mt-2 block" style={{ display: 'block', marginTop: '8px', color: 'var(--gray-600)', fontWeight: 400 }}>
              "<BilingualText text={currentEntry.description} />"
            </span>
          </p>

          <div className="space-y-3 mb-6" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {options.map((opt, i) => {
              let btnStyle: React.CSSProperties = {
                width: '100%',
                textAlign: 'left',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid var(--line)',
                background: 'var(--bg-2)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '14px'
              };
              if (selectedOption !== null) {
                if (opt === currentName) {
                  btnStyle = { ...btnStyle, border: '1px solid #16a34a', background: '#f6fef9', fontWeight: 600 };
                } else if (opt === selectedOption) {
                  btnStyle = { ...btnStyle, border: '1px solid #dc2626', background: '#fef7f7' };
                }
              }
              return (
                <button key={i} onClick={() => handleSelect(opt)} style={btnStyle} disabled={selectedOption !== null}>
                  {opt}
                </button>
              );
            })}
          </div>

          {selectedOption && (
            <button
              onClick={handleNext}
              className="btn btn-primary w-full py-3"
              style={{ width: '100%', height: '40px', background: 'var(--fg)', color: 'var(--bg)', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 500 }}
            >
              {nextBtnText}
            </button>
          )}
        </div>
      ) : (
        <div className="surface-card p-8 rounded-xl border border-border text-center" style={{ border: '1px solid var(--line)', borderRadius: '12px', padding: '32px', textAlign: 'center', background: 'var(--bg)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>{completedTitle}</h2>
          <p className="text-xl mb-6" style={{ fontSize: '16px', marginBottom: '20px', color: 'var(--gray-600)' }}>{finalScoreText}</p>
          <button
            onClick={() => { setCurrentIndex(0); setScore(0); setShowResult(false); setSelectedOption(null); setOptions(getOptionsForEntry(ENTRIES[0])); }}
            className="btn btn-primary"
            style={{ padding: '8px 20px', background: 'var(--fg)', color: 'var(--bg)', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 500 }}
          >
            {tryAgainText}
          </button>
        </div>
      )}
    </main>
  );
};
