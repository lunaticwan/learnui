import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 라우트 변경 시 페이지 스크롤을 최상단으로 리셋하고 라우트 변경 이벤트를 로깅함.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(`[Navigation] Route changed to: ${pathname}${search}${hash}`);
  }, [pathname, search, hash]);

  return null;
};
