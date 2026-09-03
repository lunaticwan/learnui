import React, { useLayoutEffect, useRef } from 'react';
import { DEMO_FRAGMENTS } from '../data/demos';

interface SpecimenViewerProps {
  slug: string;
  detail?: boolean;
}

export const SpecimenViewer: React.FC<SpecimenViewerProps> = ({ slug, detail = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fragment = DEMO_FRAGMENTS[slug];
    if (!fragment) {
      container.innerHTML = `<div class="demo demo-missing" style="color:#a3a3a3;font:12px monospace">specimen pending: ${slug}</div>`;
      return;
    }

    container.innerHTML = fragment;

    const scripts = container.querySelectorAll('script');

    scripts.forEach((oldScript) => {
      const scriptId = 'specimen-script-' + Math.random().toString(36).substring(2, 9);
      const newScript = document.createElement('script');

      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.id = scriptId;

      const code = (oldScript.textContent || '').replace(
        /document\.currentScript/g,
        `document.getElementById('${scriptId}')`
      );
      newScript.textContent = code;

      if (oldScript.parentNode) {
        oldScript.parentNode.replaceChild(newScript, oldScript);
      }
    });
  }, [slug]);

  const cls = detail ? 'stage stage-detail' : 'stage stage-card pe-none';

  return (
    <div className={cls}>
      <div className="stage-center">
        <div className="fragment" data-slug={slug} ref={containerRef} />
      </div>
    </div>
  );
};
