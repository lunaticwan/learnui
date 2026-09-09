import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ENTRIES } from '../data/entries';
import { STYLES } from '../data/styles';
import { UI_COPY } from '../data/uiCopy';
import { SpecimenViewer } from '../components/SpecimenViewer';
import { getLocalizedString } from '../types/ui';

type QuizMode = 'components' | 'styles' | 'mixed';
type QuestionType = 'specimen-to-name' | 'name-to-specimen';

interface QuizItem {
  id: string; // e.g. "entry:button" or "style:glassmorphism"
  type: 'component' | 'style';
  slug: string;
  specimenSlug: string; // e.g. "button" or "style-glassmorphism"
  nameEn: string;
  nameKo: string;
  url: string;
}

interface Question {
  target: QuizItem;
  options: QuizItem[];
  questionType: QuestionType;
}

const STORAGE_KEY_MASTERY = 'learnui_quiz_mastery_v1';
const STORAGE_KEY_STREAK = 'learnui_quiz_streak_v1';

export const QuizView: React.FC = () => {
  const [mode, setMode] = useState<QuizMode>('components');
  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_STREAK);
    return saved ? parseInt(saved, 10) || 0 : 0;
  });
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_MASTERY);
    return saved ? JSON.parse(saved) : [];
  });
  const [streakMap, setStreakMap] = useState<Record<string, number>>({});

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [sessionCount, setSessionCount] = useState<number>(0);

  const getCopyKo = (key: string, param?: number) => {
    let str = getLocalizedString(UI_COPY[key] as any, 'ko');
    if (param !== undefined) str = str.replace('{n}', String(param));
    return str;
  };

  // 퀴즈 가능한 풀 구성
  const allQuizItems: QuizItem[] = useMemo(() => {
    const items: QuizItem[] = [];

    ENTRIES.forEach((e) => {
      items.push({
        id: `entry:${e.slug}`,
        type: 'component',
        slug: e.slug,
        specimenSlug: e.slug,
        nameEn: e.name?.en || e.slug,
        nameKo: e.name?.ko || '',
        url: `/${e.platform}/${e.slug}`,
      });
    });

    STYLES.forEach((s) => {
      items.push({
        id: `style:${s.slug}`,
        type: 'style',
        slug: s.slug,
        specimenSlug: `style-${s.slug}`,
        nameEn: s.name?.en || s.slug,
        nameKo: s.name?.ko || '',
        url: `/styles/${s.slug}`,
      });
    });

    return items;
  }, []);

  const activePool = useMemo(() => {
    if (mode === 'components') {
      return allQuizItems.filter((item) => item.type === 'component');
    }
    if (mode === 'styles') {
      return allQuizItems.filter((item) => item.type === 'style');
    }
    return allQuizItems;
  }, [mode, allQuizItems]);

  const generateQuestion = useCallback(() => {
    if (activePool.length < 4) return;

    // 숙달되지 않은 항목 우선 정렬/선택
    const currentMastered = JSON.parse(localStorage.getItem(STORAGE_KEY_MASTERY) || '[]');
    const unmastered = activePool.filter((item) => !currentMastered.includes(item.id));
    const targetPool = unmastered.length > 0 ? unmastered : activePool;

    const target = targetPool[Math.floor(Math.random() * targetPool.length)];

    // 보기 3개 추가 무작위 선택
    const distractors: QuizItem[] = [];
    const poolWithoutTarget = activePool.filter((item) => item.id !== target.id);

    while (distractors.length < 3 && poolWithoutTarget.length > 0) {
      const idx = Math.floor(Math.random() * poolWithoutTarget.length);
      distractors.push(poolWithoutTarget[idx]);
      poolWithoutTarget.splice(idx, 1);
    }

    // 보기 셔플
    const options = [target, ...distractors].sort(() => Math.random() - 0.5);
    const questionType: QuestionType = Math.random() > 0.5 ? 'specimen-to-name' : 'name-to-specimen';

    setCurrentQuestion({
      target,
      options,
      questionType,
    });
    setSelectedOptionId(null);
    setIsAnswered(false);
  }, [activePool]);

  useEffect(() => {
    generateQuestion();
  }, [mode, generateQuestion]);

  // localStorage 동기화
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_STREAK, streak.toString());
  }, [streak]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_MASTERY, JSON.stringify(masteredIds));
  }, [masteredIds]);

  const handleSelectOption = (optionId: string) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedOptionId(optionId);
    setIsAnswered(true);
    setSessionCount((prev) => prev + 1);

    const isCorrect = optionId === currentQuestion.target.id;

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);

      const itemStreak = (streakMap[currentQuestion.target.id] || 0) + 1;
      setStreakMap((prev) => ({ ...prev, [currentQuestion.target.id]: itemStreak }));

      // 연속 2번 맞추면 마스터
      if (itemStreak >= 2 && !masteredIds.includes(currentQuestion.target.id)) {
        setMasteredIds((prev) => [...prev, currentQuestion.target.id]);
      }
    } else {
      setStreak(0);
      setStreakMap((prev) => ({ ...prev, [currentQuestion.target.id]: 0 }));
    }
  };

  const handleNext = () => {
    generateQuestion();
  };

  const handleReset = () => {
    if (window.confirm('퀴즈 진행 상황과 마스터 백분율을 초기화하시겠습니까?')) {
      setStreak(0);
      setMasteredIds([]);
      setStreakMap({});
      setSessionCount(0);
      localStorage.removeItem(STORAGE_KEY_STREAK);
      localStorage.removeItem(STORAGE_KEY_MASTERY);
      generateQuestion();
    }
  };

  const allMastered = activePool.length > 0 && activePool.every((item) => masteredIds.includes(item.id));

  return (
    <main className="wrap">
      <nav className="crumbs">
        <Link to="/">{getCopyKo('indexCrumb')}</Link>
        <span className="crumb-sep">/</span>
        <span className="crumb-cur">{getCopyKo('quizCrumb')}</span>
      </nav>

      <section className="hero" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
        <h1 className="hero-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
          <span>{getCopyKo('quizTitle')}</span>
        </h1>
        <p className="hero-sub" style={{ maxWidth: '640px' }}>
          {getCopyKo('quizDesc')}
        </p>

        {/* 모드 선택 & 스탯 헤더 */}
        <div className="controls" style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <div className="tabs" role="tablist">
            <button
              type="button"
              className={`tab ${mode === 'components' ? 'active' : ''}`}
              onClick={() => setMode('components')}
            >
              <span>{getCopyKo('quizModeComponents')}</span>
            </button>
            <button
              type="button"
              className={`tab ${mode === 'styles' ? 'active' : ''}`}
              onClick={() => setMode('styles')}
            >
              <span>{getCopyKo('quizModeStyles')}</span>
            </button>
            <button
              type="button"
              className={`tab ${mode === 'mixed' ? 'active' : ''}`}
              onClick={() => setMode('mixed')}
            >
              <span>{getCopyKo('quizModeMixed')}</span>
            </button>
          </div>

          <div style={{ marginLeft: 'auto', display: 'flex', gap: '16px', alignItems: 'center', fontSize: '14px' }}>
            <span>
              <strong>{getCopyKo('quizSession')}:</strong> {sessionCount}
            </span>
            <span>
              <strong>🔥 {getCopyKo('quizStreak')}:</strong> {streak}
            </span>
            <span>
              <strong>🏆 {getCopyKo('quizMastery')}:</strong> {masteredIds.filter((id) => activePool.some((p) => p.id === id)).length} / {activePool.length}
            </span>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleReset}
              style={{ fontSize: '12px', padding: '4px 8px' }}
            >
              {getCopyKo('quizReset')}
            </button>
          </div>
        </div>
      </section>

      {/* 퀴즈 문제 영역 */}
      <section style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '60px' }}>
        {allMastered ? (
          <div className="no-result" style={{ textAlign: 'center', padding: '48px 24px', background: 'var(--color-bg-card, #f9f9f9)', borderRadius: '12px', border: '1px solid #eaeaea' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>🎉 {getCopyKo('quizAllDone')}</h2>
            <button type="button" className="btn btn-primary" onClick={handleReset} style={{ marginTop: '16px' }}>
              {getCopyKo('quizReset')}
            </button>
          </div>
        ) : currentQuestion ? (
          <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #eaeaea', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <div style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 600, color: '#171717', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>
                {currentQuestion.questionType === 'specimen-to-name' ? getCopyKo('quizWhatIs') : getCopyKo('quizWhichIs')}
              </span>
              <span className="tag" style={{ fontSize: '11px', textTransform: 'uppercase' }}>
                {currentQuestion.target.type}
              </span>
            </div>

            {/* 질문 타겟 제시 영역 */}
            {currentQuestion.questionType === 'specimen-to-name' ? (
              <div style={{ marginBottom: '28px', border: '1px solid #eaeaea', borderRadius: '12px', overflow: 'hidden', minHeight: '200px', background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SpecimenViewer slug={currentQuestion.target.specimenSlug} />
              </div>
            ) : (
              <div style={{ marginBottom: '28px', padding: '28px', border: '1px solid #eaeaea', borderRadius: '12px', background: '#fafafa', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: '#0a0a0a' }}>
                  {currentQuestion.target.nameEn}
                </div>
                {currentQuestion.target.nameKo && (
                  <div style={{ fontSize: '16px', color: '#737373', marginTop: '6px' }}>
                    {currentQuestion.target.nameKo}
                  </div>
                )}
              </div>
            )}

            {/* 보기 선택 영역 */}
            {currentQuestion.questionType === 'specimen-to-name' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                {currentQuestion.options.map((option) => {
                  let btnStyle: React.CSSProperties = {
                    padding: '16px',
                    borderRadius: '10px',
                    border: '1px solid #e5e5e5',
                    background: '#ffffff',
                    textAlign: 'left',
                    cursor: isAnswered ? 'default' : 'pointer',
                    transition: 'all 0.15s ease',
                    fontWeight: 500,
                  };

                  if (isAnswered) {
                    if (option.id === currentQuestion.target.id) {
                      btnStyle.border = '2px solid #22c55e';
                      btnStyle.background = '#f0fdf4';
                    } else if (option.id === selectedOptionId) {
                      btnStyle.border = '2px solid #ef4444';
                      btnStyle.background = '#fef2f2';
                    } else {
                      btnStyle.opacity = 0.5;
                    }
                  }

                  return (
                    <button
                      key={option.id}
                      type="button"
                      style={btnStyle}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(option.id)}
                    >
                      <div style={{ fontSize: '15px', color: '#0a0a0a' }}>{option.nameEn}</div>
                      {option.nameKo && (
                        <div style={{ fontSize: '13px', color: '#737373', marginTop: '2px' }}>{option.nameKo}</div>
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {currentQuestion.options.map((option) => {
                  let cardStyle: React.CSSProperties = {
                    border: '1px solid #e5e5e5',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    cursor: isAnswered ? 'default' : 'pointer',
                    transition: 'all 0.15s ease',
                    background: '#ffffff',
                  };

                  if (isAnswered) {
                    if (option.id === currentQuestion.target.id) {
                      cardStyle.border = '2px solid #22c55e';
                      cardStyle.boxShadow = '0 0 0 2px #22c55e';
                    } else if (option.id === selectedOptionId) {
                      cardStyle.border = '2px solid #ef4444';
                      cardStyle.opacity = 0.6;
                    } else {
                      cardStyle.opacity = 0.4;
                    }
                  }

                  return (
                    <div
                      key={option.id}
                      style={cardStyle}
                      onClick={() => !isAnswered && handleSelectOption(option.id)}
                    >
                      <SpecimenViewer slug={option.specimenSlug} />
                    </div>
                  );
                })}
              </div>
            )}

            {/* 정답 제출 후 하단 피드백 및 다음 버튼 */}
            {isAnswered && (
              <div
                style={{
                  marginTop: '24px',
                  padding: '16px',
                  borderRadius: '10px',
                  background: selectedOptionId === currentQuestion.target.id ? '#f0fdf4' : '#fef2f2',
                  border: `1px solid ${selectedOptionId === currentQuestion.target.id ? '#bbf7d0' : '#fecaca'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: '15px', color: selectedOptionId === currentQuestion.target.id ? '#15803d' : '#b91c1c' }}>
                    {selectedOptionId === currentQuestion.target.id ? `✓ ${getCopyKo('quizCorrect')}` : `✕ ${getCopyKo('quizWrong')}`}
                  </div>
                  <div style={{ fontSize: '13px', color: '#525252', marginTop: '2px' }}>
                    {getCopyKo('quizAnswerWas')} <strong>{currentQuestion.target.nameEn}</strong> ({currentQuestion.target.nameKo})
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Link
                    to={currentQuestion.target.url}
                    className="btn btn-ghost"
                    style={{ fontSize: '13px', padding: '6px 12px' }}
                    target="_blank"
                  >
                    {getCopyKo('quizViewEntry')} ↗
                  </Link>
                  <button
                    type="button"
                    className="btn"
                    onClick={handleNext}
                    style={{ background: '#0a0a0a', color: '#ffffff', padding: '6px 16px', fontSize: '13px', borderRadius: '6px' }}
                  >
                    {getCopyKo('quizNext')} →
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </section>
    </main>
  );
};
