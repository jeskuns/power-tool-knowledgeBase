# power-tool-knowledgeBase

工程部测试实验室知识库的**瘦身后静态站点**：六个库（竞品型号 / 标准认证 / 测试方法用例 / 设备工装 / 测试记录 / 失效案例）的离线查询页、单文件 md、产品缩略图与标准全文，部署在 Cloudflare Pages。

> 与 `power-tools-news`（原 power-tools-kb 改名）是两个独立项目，勿混。

## 目录来源

本目录是**部署副本**，由源目录 `Documents\lifeOS\数字化\实验室管理\知识库\` 经 `_脚本/_build_site.py` 瘦身生成（HTML / 查询数据 JS / 单文件 md / 缩略图 WebP / 标准全文 md / logo / CSS 保留；原图 2.2GB、爬虫原始 JSON、tif、PDF/Excel 排除）。**不要在站点副本里直接改业务数据**，改源目录后重跑构建脚本再同步。

- 17280 文件 / 约 287 MB，单文件均 < 25 MB，适合 Cloudflare Pages。
- 主页 `index.html` 带即时查询（型号 / 记录 / 标准 / 案例）与六库卡片；方法 / 设备两库用各自 `查询.html`。

## 部署

推送 `main` 触发 `.github/workflows/deploy.yml` 自动部署到 Cloudflare Pages 项目 `power-tool-knowledgeBase`（需仓库 secrets `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID`）。
也可本地部署：`npx wrangler pages deploy . --project-name=power-tool-knowledgeBase`。

本地起服务预览：`python -m http.server 8080` 后打开 `http://localhost:8080/index.html`。

## 更新流程

1. 在源目录改数据、跑对应 `_脚本/build*.py` 刷新查询数据与单文件 md。
2. 跑源目录 `_脚本/_build_site.py` 重新生成本站点副本。
3. `git add -A && git commit -m "sync" && git push` 触发部署。
