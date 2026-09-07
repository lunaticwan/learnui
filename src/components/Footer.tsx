import React from 'react';
import { UI_COPY } from '../data/uiCopy';
import { getLocalizedString } from '../types/ui';

export const Footer: React.FC = () => {
  const getCopy = (key: string) => getLocalizedString(UI_COPY[key] as any, 'en');
  const getCopyZh = (key: string) => getLocalizedString(UI_COPY[key] as any, 'zh');

  return (
    <footer className="site-footer">
      <div className="wrap footer-in">
        <p>
          <span className="fw-500">Learn UI Name</span> ·{' '}
          <span className="lang-en">{getCopy('tagline')}</span>{' '}
          <span className="lang-zh">{getCopyZh('tagline')}</span>
        </p>

        <div className="footer-support">
          <p className="support-title">
            <span className="lang-en">{getCopy('supportTitle')}</span>
            <span className="lang-zh">{getCopyZh('supportTitle')}</span>
          </p>
          <div className="support-row">
            <figure className="support-qr">
              <img src="/assets/img/qrcode-wechat.jpg" alt="WeChat QR" width="88" height="88" loading="lazy" />
              <figcaption>
                <span className="lang-en">{getCopy('supportFollow')}</span>
                <span className="lang-zh">{getCopyZh('supportFollow')}</span>
              </figcaption>
            </figure>
            <figure className="support-qr">
              <img src="/assets/img/qrcode-reward.png" alt="Reward QR" width="88" height="88" loading="lazy" />
              <figcaption>
                <span className="lang-en">{getCopy('supportReward')}</span>
                <span className="lang-zh">{getCopyZh('supportReward')}</span>
              </figcaption>
            </figure>
            <p className="support-links">
              <a href="https://x.com/vista8" rel="noopener">
                <span className="lang-en">{getCopy('supportX')}</span>
                <span className="lang-zh">{getCopyZh('supportX')}</span>
              </a>
              <a href="https://github.com/joeseesun" rel="noopener">
                GitHub @joeseesun
              </a>
            </p>
          </div>
        </div>

        <p className="foot-note">
          <span className="lang-en">
            {getCopy('footerNews')} <a href="/feed.xml">{getCopy('footerRss')}</a>
          </span>
          <span className="lang-zh">
            {getCopyZh('footerNews')} <a href="/feed.xml">{getCopyZh('footerRss')}</a>
          </span>
        </p>

        <p className="foot-links">
          <a href="https://github.com/joeseesun/learnui" rel="noopener">
            GitHub
          </a>
          <span className="sep">·</span>
          <a href="https://tuijian.qiaomu.ai/" rel="noopener">
            乔木推荐
          </a>
          <span className="sep">·</span>
          <span className="lang-en">
            Powered by <a href="https://qiaomu.ai/" rel="noopener">向阳乔木</a>
          </span>
          <span className="lang-zh">
            Powered by <a href="https://qiaomu.ai/" rel="noopener">向阳乔木</a>
          </span>
        </p>

        <p className="foot-src">
          <span className="lang-en">
            {getCopy('builtNote')} <a href="https://namethatui.com/" rel="noopener">namethatui.com</a>
          </span>
          <span className="lang-zh">
            {getCopyZh('builtNote')} <a href="https://namethatui.com/" rel="noopener">namethatui.com</a>
          </span>
        </p>
      </div>
    </footer>
  );
};
