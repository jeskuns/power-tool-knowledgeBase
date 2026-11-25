# 电动工具知识库

> 实验室六大测试知识库的源文件目录与离线查询门户：型号 / 标准 / 方法 / 设备 / 记录 / 案例，输入即查，全部数据离线内置。
>
> 正本（原文 / 原图 / 构建脚本）：`Documents\lifeOS\数字化\实验室管理\知识库\`
> 上线包：`company\power-tool-knowledgeBase\`（Pages 站）与 `company\gongchengbu\knowledge\`（工程部 App 内嵌），均由本目录构建，**只含查询数据、路径全英文、不带原文**

---

## 一、这是什么

把实验室多年积累的六类资料整理成一个**可离线使用**的静态知识库：既有统一的查询门户（一个搜索框跨库检索），也有每个库各自的阅读器 / 查询页和单文件 Markdown（供离线检索与 RAG 使用）。

- **对外显示名**：电动工具知识库
- **数据规模**：8790 条产品型号 + 2144 条标准目录 + 3601 条委托记录 + 538 条测试方法/用例 + 125 台设备 + 93 条失效案例
- **离线可用**：原文、卡片、图片、查询数据全部随站点打包，拷到手机没网也能查
- **无后台依赖**：纯静态文件，部署在 Cloudflare Pages

> 命名区分：**电动工具知识库**（本项目，六库查询站）与 **电动工具行业新闻**（`power-tools-news`，每日采集行业资讯的站点）是两个独立项目，请勿混淆。历史资料里的「工程部」「工程部数字化」等字样为旧称或真实路径记录，现已按新命名体系更新展示文案；`company\gongchengbu\knowledge\` 为工程部站点的上线包路径，与 `company\power-tool-knowledgeBase\` 同源同结构。

---

## 二、六个库

| 库 | 目录 | 核心数据 | 用途 |
|---|---|---|---|
| 竞品型号库 | `电动工具竞品型号库/` | 8790 条型号 / 30 品牌 / 21 家公司，产品图与缩略图 | 选型对比、按型号查规格、安规判定前参数确认 |
| 测试标准与认证库 | `电动工具测试标准与认证知识库/` | 2144 条标准目录、25 张限值速查卡、974 篇全文路径 | 查条款限值、确认标准版本、标准全文检索 |
| 测试方法与用例库 | `电动工具测试方法与用例库/` | 538 条（156 SQL 用例 + 324 大纲项 + 35 大纲 + 23 企标方法）、4 套测试方案 | 测前查方法、按产品找用例、减少漏项 |
| 测试设备与工装能力库 | `电动工具测试设备与工装能力库/` | 125 台设备、19 台外校、10 条工装、39 张编号照片 | 设备选型、校准提醒、CNAS/CMA 评审取证 |
| 测试记录库 | `电动工具测试记录知识库/` | 3601 单委托 / 3803 台样品（2024–2026） | 查不合格、查超期、查型号历史 |
| 失效案例库 | `电动工具测试失效案例库/` | 93 条案例（含失效现象/原因/规避措施） | 失效检索与归口分析 |

每个子库都有自己的 `README.md`，含数据来源、字段口径、目录说明和实测统计，深入某个库时先看它。

---

## 三、目录结构

```
知识库/
├── index.html                 统一查询门户 + 六库入口卡片（主页）
├── query/data/                统一查询页的数据源（跨库检索）
├── assets/                    站点样式与脚本（css / js）
├── _脚本/                     站点与查询数据构建脚本（见下）
├── 电动工具竞品型号库/         型号数据、图片、爬虫与查询知识库
├── 电动工具测试标准与认证知识库/  标准目录、速查卡、OCR 全文
├── 电动工具测试方法与用例库/    方法与用例结构化数据、测试方案
├── 电动工具测试设备与工装能力库/ 设备台账、外校、工装、编号照片
├── 电动工具测试记录知识库/      三年测试台账主数据与分析
└── 电动工具测试失效案例库/      失效案例与归因
```

上线包结构（两个目标完全一致，由 `_脚本/build_deploy_kb.py` 生成，共 12863 个文件 / 约 95 MB）：

```text
上线目录/
├── index.html                 统一查询门户（内嵌跨库检索）
├── query/data/                四个查询数据 js（models / records / standards / cases）
├── assets/                    样式、品牌数据、品牌 logo
├── models/                    型号查询 + data/ + images/p/<品牌>/*.webp（约 12790 张）
├── standards/                 标准目录查询 + data/ + safety-cards.html
├── methods/                   用例查询 + data/ + solutions.html
├── equipment/                 设备查询 + data/ + offline/
├── records/                   委托记录查询 + data/ + CSV 明细
└── cases/                     失效案例查询 + data/
```

> 原文（标准全文 / OCR / 清洗稿 / 速查卡片 md / 型号总表 xlsx 等）只留在正本，不进上线包；上线包里的「查看全文」入口已去掉，站外可用正本路径查看。

---

## 四、查询入口

- **统一门户**：根目录 `index.html`，顶部搜索框支持型号 / 报告编号 / 标准号 / 任意关键词，输入即出结果；点标签可浏览某个库的全部数据。
- **快捷查询**：门户提供 `?scope=models` / `records` / `stds` / `cases` 等参数直达对应库。
- **各库独立页**：正本各子库自带的 `查询.html` 与 `查询知识库/` 下的单文件 md；上线包中它们对应英文路径 `models|standards|methods|equipment|records|cases/index.html` 与 `*/offline/`，原文目录不带过去。
- **品牌墙**：首页默认态「按品牌浏览全部型号」展开后显示 30 个品牌的 logo 卡片（`assets/logo/` + `assets/data/brands.js`），点卡片直接筛该品牌型号；logo 由 `build_site_data.py` 从 `电动工具竞品型号库/图片数据/brands/` 归集。
- **单文件 Markdown**：每个库各有一份查询知识库 md，供离线全文检索与 RAG 使用。

---

## 五、构建与更新

所有脚本在 `_脚本/` 和 `query/data/` 下，均在项目根目录执行：

| 脚本 | 作用 |
|---|---|
| `python _脚本/build_query_kb_all.py` | 刷新六库单文件查询知识库 md（幂等） |
| `python _脚本/build_site_data.py` | 重建 `assets/data/*.js` 与品牌 logo 汇总 |
| `python _脚本/build_standard_fulltext.py` | 生成标准全文路径与全文索引 |
| `python _脚本/build_deploy_kb.py` | **上线包构建**：从正本生成两个英文路径、只含查询数据的上线目录（`--dry-run` 先看清单） |
| `python _脚本/sync_knowledge_all.py --only power-tool` | 仅构建 Pages 上线目录（自动转发到 `build_deploy_kb.py`，不会拷回原文） |
| `python _脚本/sync_knowledge_all.py --only gongchengbu` | 仅构建工程部站点内嵌目录（同样转发） |
| `python _脚本/_check_links.py --root <上线目录>` | 体检该目录首页与六库查询页的站内链接（应为 0 缺失） |

> `_build_portal.py`、`_fix_images.py`、`_fix_portal_links.py`、`_analyze_gaps.py` 是历史一次性补丁，不要重复执行（`_build_portal.py` 是纯字符串 replace，二次运行会静默无效果）。

各子库内部还有自己的数据流水线（爬虫、OCR、表格解析等），见各自 README。

**标准库 OCR**：按 `电动工具测试标准与认证知识库/00_索引/OCR计划.md` 分阶段续跑，实时进度用 `python _脚本/kb_ocr_plan.py --status` 查看（需用带 fitz 的 Python 环境）。OCR 数值不可直接当权威引用。

**生成上线包**：用 `build_deploy_kb.py` 从正本构建到 `company\power-tool-knowledgeBase\`（Pages 站，推送后由 GitHub Actions 部署到 `power-tool-knowledgebase`）与 `company\gongchengbu\knowledge\`（工程部 App 内嵌）。两个上线目录只含查询数据、路径全英文；改动只在正本做，不要直接改上线目录，下次构建会覆盖。

```powershell
cd C:\Users\Administrator\Documents\lifeOS\数字化\实验室管理\知识库\_脚本
python build_deploy_kb.py --dry-run          # 先看清单
python build_deploy_kb.py                    # 生成两个上线目录
python _check_links.py --root "C:\Users\Administrator\Documents\lifeOS\company\power-tool-knowledgeBase"
python sync_knowledge_all.py --only power-tool     # 等价转发，兼容旧命令
```

**注入到测试助手 App**：型号库是 `company\tool-test-assistant` 的唯一数据源，用 App 侧的 `tools/inject_kb.py` 生成 320px 缩略图与 1024px 大图（详见该仓库 README 第十一节），不由本目录推送。

---

## 六、维护约定

- 展示标题、页脚、README 中的品牌字样统一为「电动工具知识库」。
- 业务数据（设备台账、委托记录等历史字段）里的原始表述保持原样，以免事实失真。
- 新增资料先落在对应子库，再跑构建脚本刷新查询数据与单文件 md，最后用 `build_deploy_kb.py` 重建两个上线包。
- 各子库 README 的「最后更新」日期随实际改动维护。

<!-- CHG-20261124 -->
## 标准全文清洗与查询数据统一（2026-11-24）
- 对 `电动工具测试标准与认证知识库/05_全文清洗` 的 1954 篇标准全文做了 AI + 本地规则清洗（数字/标准号/条款号保持原样）。
- 全文按类型合并为 **15 份分类文档**，放在 `电动工具测试标准与认证知识库/查询知识库/全文分类/`，附 `索引.md`；每篇用 `<a id="锚点">` + `## 标题` 定位，`standards.js` 的「查看全文」链接已指向这些锚点（原 `全文/` 目录已删）。
- 查询数据源统一：主页 `query/data/*.js` 与库内 `查询数据/*.js` 对齐，竞品型号 **8790**、标准编目 **2144**（旧主文档的 5999/2658 已刷新）。
- 首页 `index.html` 的「标准全文目录」改指向 `全文分类/索引.md`；标准库的 `查询.html` 已删除（检索走首页顶部 `?scope=stds`）。
- `安规标准知识库.html` 内 47 处 `全文/` 旧链接已改指新分类文档锚点。
- 2026-11-25 更正：以上为当时的正本状态；上线包现在不带 `全文分类/` 与 `查询.html`，全文入口只在正本（上线包见第三节结构）。
<!-- /CHG-20261124 -->

<!-- CHG-MOBILE-20261124 -->
## 手机版适配 + Pages 部署修复（2026-11-24）
- **全站手机版**：新增 `assets/css/app-mobile.css` + `assets/js/app-mobile.js`，给 8 个 HTML（首页 + 7 个子页）注入底部「首页/型号/标准/方法/设备/记录/案例」七库快捷导航、安全区避让、窄屏顶栏防竖排、搜索框上下堆叠、表格横滚、图片自适应。手机视口 390px 实测：导航/高亮正常、横向溢出 0。
- **Pages 部署修复**：`02_安全标准.md`（40MB）、`01_标准化管理.md`（17.7MB）超过 Cloudflare Pages 25MiB 单文件上限导致部署失败（线上长期旧版）。已按 `## 篇名` 拆为 `02_安全标准-1..7.md`、`01_标准化管理-1..3.md`（均 <6MB，也低于同步脚本 8MB 上限），并同步修正 `standards.js`（两处）、`安规标准知识库.html`、`index.html`、`索引.md` 的所有锚点引用。
- **约定**：全文分类的单文件必须 <8MB（同步脚本 `MAX_FILE`），超过就按 `##` 篇名拆分并改引用；改动在源目录做后跑 `python _脚本/sync_knowledge_all.py --only power-tool`。GitHub Actions 报 Cloudflare Rate limited（10429）时用本机 wrangler `pages deploy . --project-name=power-tool-knowledgebase --commit-dirty=true` 直传。
<!-- /CHG-MOBILE-20261124 -->
