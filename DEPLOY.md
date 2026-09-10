# iM뱅크 Learn UI 배포 및 빌드 가이드

이 문서는 **iM뱅크 Learn UI** 정적 웹 애플리케이션의 빌드, CI/CD 자동 배포 및 정적 서버(Nginx 등) 운영 환경 설정 규격을 다룹니다.

---

## 1. 정적 빌드 및 산출물 구조

1. **빌드 명령**:
   ```bash
   npm run build
   ```
   - 내부 실행 순서: `npm run build:data` (`python3 scripts/build_korean_data.py`) → `tsc --noEmit` 타입 검사 → `vite build` 프로덕션 번들링.
2. **산출물 경로**:
   - 빌드가 완료되면 프로젝트 루트의 **`/dist`** 디렉터리에 정적 빌드 파일(HTML, CSS, JS 번들, 폰트 에셋, Service Worker, Web Manifest)이 생성됩니다.
3. **상대 경로 링크 제약 (`base: './'`)**:
   - `vite.config.ts`에 `base: './'`가 설정되어 있어, GitHub Pages 하위 경로 배포 및 자체 정적 웹 서버 등 어떠한 웹 루트 경로에서도 독립 동작합니다.

---

## 2. GitHub Actions 자동 배포 (.github/workflows/deploy.yml)

`main` 브랜치에 코드가 푸시되거나 `workflow_dispatch` 수동 트리거가 실행되면 GitHub Pages에 정적 아티팩트가 자동으로 배포됩니다.

### 워크플로우 구성 명세

- **트리거**: `main` 브랜치 `push` 및 `workflow_dispatch`
- **실행 환경**: `ubuntu-latest`
- **주요 단계**:
  1. **소스 코드 체크아웃**: `actions/checkout@v4`
  2. **Python 환경 수립**: `actions/setup-python@v5` (Python `3.12`)
  3. **Node.js 환경 수립**: `actions/setup-node@v4` (Node.js `22`, `npm` 캐시 활성화)
  4. **의존성 설치**: `npm ci`
  5. **프로덕션 빌드**: `npm run build`
  6. **Pages 아티팩트 업로드**: `actions/upload-pages-artifact@v3` (업로드 경로: `./dist`)
  7. **Pages 배포 실행**: `actions/deploy-pages@v4`

### GitHub 저장소 설정

1. GitHub 레포지토리의 **Settings > Pages**로 이동합니다.
2. **Build and deployment > Source** 옵션을 **GitHub Actions**로 선택합니다.

---

## 3. 웹 서버 (Nginx) 정적 배포 규격

웹 서버(Nginx, Apache 등)에 직접 설치 및 운영하는 경우 다음 가이드를 준수합니다.

### Nginx 가상 호스트 설정 예시

```nginx
server {
    listen 80;
    server_name learnui.imbank.co.kr;

    # /dist 빌드 산출물 위치
    root /www/wwwroot/imbank-learn-ui/dist;
    index index.html;

    # SPA 클라이언트 라우팅 폴백 설정
    location / {
        try_files $uri $uri/ /index.html;
    }

    # PWA Service Worker 및 Manifest 캐시 비활성화 (즉시 업데이트 보장)
    location ~* ^/(sw\.js|manifest\.webmanifest)$ {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires 0;
    }

    # 정적 에셋 장기 캐시 설정 (Vite 해시 파이프라인 에셋)
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 4. PWA (Progressive Web App) 오프라인 모드

- `/manifest.webmanifest`: PWA 앱 아이콘, 테마 색상 및 디스플레이 모드 설정.
- `/sw.js`: Service Worker 기반 오프라인 정적 파일 캐싱 (Cache-First) 및 네비게이션 폴백 (Network-First w/ Cache Fallback).
