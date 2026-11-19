// 主网站共享导航栏：根据当前路径高亮；所有页面在 </body> 前引入本文件。
(function () {
  var NAV = [
    { href: "index.html", label: "首页" },
    { href: "brands.html", label: "电动工具企业" },
    { href: "standards.html", label: "标准库" },
    { href: "records.html", label: "测试记录" },
    { href: "cases.html", label: "失效案例" },
    { href: "query.html", label: "查询知识库" },
  ];
  function current() {
    var p = location.pathname.split("/").pop();
    if (!p || p === "") return "index.html";
    return p;
  }
  function render() {
    var cur = current();
    var bar = document.getElementById("site-nav");
    if (!bar) {
      bar = document.createElement("header");
      bar.id = "site-nav";
      document.body.insertBefore(bar, document.body.firstChild);
    }
    var html = '<a class="brandmark" href="index.html"><span class="mark">ED</span><span>工程部数字化</span></a>';
    NAV.forEach(function (n) {
      var cls = "nav" + (n.href === cur ? " active" : "");
      html += '<a class="' + cls + '" href="' + n.href + '">' + n.label + "</a>";
    });
    bar.innerHTML = html;
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
