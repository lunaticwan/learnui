# LearnUI 部署与构建指南（Vite React SPA）

## Vite React SPA 静态部署规范

1. **构建输出路径**
   - 执行 `npm run build` (`tsc && vite build`) 后，所有前端静态文件（HTML, CSS, JS, Fonts, Icons, OG Images, Service Worker, Web Manifest）都会完整输出并集中在项目根目录下的 **`/dist`** 文件夹中。
   - **部署时只需将 `/dist` 目录中的全部文件上传至 Web 服务器静态根目录**即可（如 Nginx `/www/wwwroot/learnui.qiaomu.ai`）。

2. **Web 服务器（Nginx）配置建议**
   - 由于应用为 React SPA（Single Page Application），需要配置路由重定向以处理前端路由（如 `/styles/`, `/quiz/`, `/:platform/:slug` 等）：
     ```nginx
     location / {
         root /www/wwwroot/learnui.qiaomu.ai;
         index index.html;
         try_files $uri $uri/ /index.html;
     }
     ```
   - **Service Worker 与 Manifest 缓存策略**：
     为确保 PWA Service Worker 和 Manifest 及时更新，需禁用其 HTTP 缓存：
     ```nginx
     location ~* ^/(sw\.js|manifest\.webmanifest)$ {
         root /www/wwwroot/learnui.qiaomu.ai;
         add_header Cache-Control "no-cache, no-store, must-revalidate";
         add_header Pragma "no-cache";
         add_header Expires 0;
     }
     ```

3. **PWA 支持**
   - `/manifest.webmanifest` 包含 PWA 应用配置。
   - `/sw.js` 包含 Service Worker 缓存逻辑（静态资源 cache-first，页面 navigate network-first 并回退到 `/`）。

---

## 历史部署记录

### 2026-07-16 第六轮：20 个新增视觉风格（风格图鉴 24 → 44）
- [x] 20 个新增视觉风格及交互标本
- [x] 测验 `/quiz/` 题库扩展
- [x] og 分享图补全，全站累计 150 张

### 2026-07-15 域名修正与 PWA 初始配置
- 正式域名 `learnui.qiaomu.ai`
- Nginx vhost、Certbot TLS 证书及静态根目录配置完成
