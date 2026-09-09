import React from 'react';
import { UI_COPY } from '../data/uiCopy';
import { getLocalizedString } from '../types/ui';

export const Footer: React.FC = () => {
  const getCopyKo = (key: string) => getLocalizedString(UI_COPY[key] as any, 'ko');

  return (
    <footer className="site-footer">
      <div className="wrap footer-in">
        <p>
          <span className="fw-500">iM뱅크 Learn UI</span> ·{' '}
          <span>{getCopyKo('tagline')}</span>
        </p>

        <p className="foot-src">
          <span>{getCopyKo('builtNote')}</span>
        </p>
      </div>
    </footer>
  );
};
