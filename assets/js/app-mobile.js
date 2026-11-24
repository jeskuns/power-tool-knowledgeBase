/* 电动工具知识库 · 手机版底部六库导航（零依赖，纯 DOM 注入）
   在每个页面 </body> 前引入；用 data-kb-base 表示到站点根目录的相对前缀：
   首页为 ""，子页为 "../"。当前页高亮由 data-kb-page 指定。 */
(function () {
  'use strict';
  var body = document.body;
  if (!body || body.querySelector('.kb-tabs')) return;

  var base = body.getAttribute('data-kb-base') || '';
  var current = body.getAttribute('data-kb-page') || '';
  var p = function (file) { return base + file; };

  var TABS = [
    { key: 'home',  label: '首页', href: p('index.html'),
      icon: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>' },
    { key: 'models',label: '型号', href: p('电动工具竞品型号库/查询.html'),
      icon: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>' },
    { key: 'stds',  label: '标准', href: p('电动工具测试标准与认证知识库/安规标准知识库.html'),
      icon: '<path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h8M8 17h5"/>' },
    { key: 'methods',label:'方法', href: p('电动工具测试方法与用例库/查询.html'),
      icon: '<path d="M9 3h6M10 3v6l-4.6 8.2A2 2 0 0 0 7.2 20h9.6a2 2 0 0 0 1.8-2.8L14 9V3"/><path d="M7.5 15h9"/>' },
    { key: 'equip', label: '设备', href: p('电动工具测试设备与工装能力库/查询.html'),
      icon: '<path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18a2.1 2.1 0 0 0 3 3l5.7-5.7a4.5 4.5 0 0 0 6-6L15 12l-3-3z"/>' },
    { key: 'records',label:'记录', href: p('电动工具测试记录知识库/查询.html'),
      icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="m9 14.5 2 2 4-4"/>' },
    { key: 'cases', label: '案例', href: p('电动工具测试失效案例库/查询.html'),
      icon: '<path d="M12 3 2 20h20L12 3z"/><path d="M12 9v5M12 17h.01"/>' }
  ];

  body.classList.add('kb-app');

  var nav = document.createElement('nav');
  nav.className = 'kb-tabs';
  nav.setAttribute('aria-label', '六库快捷导航');
  var html = '';
  for (var i = 0; i < TABS.length; i++) {
    var t = TABS[i];
    var active = t.key === current ? ' is-active' : '';
    html += '<a class="kb-tab' + active + '" href="' + t.href + '"' +
      (t.key === current ? ' aria-current="page"' : '') + '>' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + t.icon + '</svg>' +
      '<span>' + t.label + '</span></a>';
  }
  nav.innerHTML = html;
  body.appendChild(nav);
})();
