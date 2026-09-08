# LearnUI 배포 및 빌드 가이드 (Vite React SPA)

## Vite React SPA 정적 배포 규격

1. **빌드 출력 경로**
   - `npm run build` (`tsc && vite build`) 실행 시, 모든 프론트엔드 정적 파일(HTML, CSS, JS, 폰트, 아이콘, OG 이미지, Service Worker, Web Manifest)이 프로젝트 루트의 **`/dist`** 디렉터리에 출력됩니다.
   - **배포 시 `/dist` 디렉터리 내의 전체 파일을 Web 서버 정적 루트 디렉터리에 업로드**하거나 GitHub Pages 아티팩트로 사용합니다.

2. **Web 서버 (Nginx) 설정 권장사항**
   - 본 애플리케이션은 React SPA(Single Page Application)이므로 클라이언트 라우팅(`/styles/`, `/quiz/`, `/:platform/:slug` 등)을 처리하기 위한 리다이렉트 설정이 필요합니다:
     ```nginx
     location / {
         root /www/wwwroot/learnui.qiaomu.ai;
         index index.html;
         try_files $uri $uri/ /index.html;
     }
     ```
   - **Service Worker 및 Manifest 캐시 정책**:
     PWA Service Worker와 Manifest가 즉시 업데이트될 수 있도록 HTTP 캐시를 비활성화합니다:
     ```nginx
     location ~* ^/(sw\.js|manifest\.webmanifest)$ {
         root /www/wwwroot/learnui.qiaomu.ai;
         add_header Cache-Control "no-cache, no-store, must-revalidate";
         add_header Pragma "no-cache";
         add_header Expires 0;
     }
     ```

3. **PWA 지원**
   - `/manifest.webmanifest`: PWA 웹 앱 매니페스트 설정.
   - `/sw.js`: Service Worker 캐싱 로직 (정적 자원 cache-first, 네비게이션 내비게이트 network-first 후 `/` 폴백).

---

## 🚀 GitHub Actions를 이용한 GitHub Pages 자동 배포

`.github/workflows/deploy.yml` 파일이 포함되어 있어 `main` 브랜치 푸시 시 자동으로 GitHub Pages에 빌드 및 배포가 수행됩니다.

- GitHub 레포지토리 **Settings > Pages > Build and deployment > Source**를 **GitHub Actions**로 설정합니다.
- `workflow_dispatch` 이벤트가 설정되어 있으므로 GitHub Actions 탭에서 수동 트리거 배포도 가능합니다.
