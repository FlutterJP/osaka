import{_ as o,c as i,a,b as e,d as t,e as s,r,o as d}from"./app.c33b6664.js";const z=JSON.parse('{"title":"\u30AB\u30EC\u30F3\u30C0\u30FC\u30A2\u30D7\u30EA","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u30ED\u30B8\u30C3\u30AF","slug":"\u30ED\u30B8\u30C3\u30AF"},{"level":3,"title":"\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8","slug":"\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8"},{"level":3,"title":"\u30E1\u30A4\u30F3\u3068\u306A\u308B\u30A2\u30D7\u30EA","slug":"\u30E1\u30A4\u30F3\u3068\u306A\u308B\u30A2\u30D7\u30EA"},{"level":2,"title":"Flutter \u74B0\u5883\u69CB\u7BC9","slug":"flutter-\u74B0\u5883\u69CB\u7BC9"},{"level":3,"title":"SDK \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B","slug":"sdk-\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B"},{"level":3,"title":"\u30D1\u30B9\u3092\u901A\u3059","slug":"\u30D1\u30B9\u3092\u901A\u3059"},{"level":2,"title":"\u74B0\u5883\u69CB\u7BC9\u3092\u5C11\u3057\u697D\u306B\u3059\u308B","slug":"\u74B0\u5883\u69CB\u7BC9\u3092\u5C11\u3057\u697D\u306B\u3059\u308B"},{"level":2,"title":"\u914D\u4FE1\u52D5\u753B","slug":"\u914D\u4FE1\u52D5\u753B"},{"level":2,"title":"\u56F0\u3063\u305F\u3089","slug":"\u56F0\u3063\u305F\u3089"}],"relativePath":"handson/calendar.md"}'),c={name:"handson/calendar.md"},p=e("h1",{id:"\u30AB\u30EC\u30F3\u30C0\u30FC\u30A2\u30D7\u30EA",tabindex:"-1"},[t("\u30AB\u30EC\u30F3\u30C0\u30FC\u30A2\u30D7\u30EA "),e("a",{class:"header-anchor",href:"#\u30AB\u30EC\u30F3\u30C0\u30FC\u30A2\u30D7\u30EA","aria-hidden":"true",loading:"lazy"},"#")],-1),h=s(`<p>\u4ECA\u56DE\u306F\u4EE5\u4E0B\u3092\u76EE\u6307\u3057\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002</p><p><div class="link-preview"><a href="https://zenn.dev/chooyan/books/calendar-package" target="_blank" rel="noopener noreferrer"><div class="link-preview__title">\u30AB\u30EC\u30F3\u30C0\u30FC\u30A2\u30D7\u30EA\u3067\u5B66\u3076\u30D1\u30C3\u30B1\u30FC\u30B8\u958B\u767A</div><div class="link-preview__description"> \u30B7\u30F3\u30D7\u30EB\u306A\u30AB\u30EC\u30F3\u30C0\u30FC\u30A2\u30D7\u30EA\u3092\u5B9F\u969B\u306B\u958B\u767A\u3057\u306A\u304C\u3089\u3001Flutter \u30D1\u30C3\u30B1\u30FC\u30B8\u3001Dart \u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u958B\u767A\u306E\u9032\u3081\u65B9\u3092\u5B66\u3073\u307E\u3059\u3002 \u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u958B\u767A\u624B\u6CD5\u3092\u5B66\u3076\u3053\u3068\u3067\u3001\u81EA\u5206\u306E\u30A2\u30A4\u30C7\u30A2\u3092\u57FA\u306B\u958B\u767A\u3057\u305F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u4E16\u306E\u4E2D\u306E\u958B\u767A\u8005\u304C\u518D\u5229\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u9069\u5207</div><div class="link-preview__url">Zenn</div></a><a class="link-preview__image" href="https://zenn.dev/chooyan/books/calendar-package" target="_blank" rel="noopener noreferrer" style="background-image:url(&#39;https://res.cloudinary.com/zenn/image/upload/s--XYTdED2X--/g_center%2Ch_280%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYm9va19jb3Zlci9jNzM0ZGMxZTNlLnBuZw==%2Cw_200/v1627283836/default/og-base-book_yz4z02.jpg&#39;);"></a></div></p><p>\u306A\u304A\u3001\u4ECA\u56DE\u306F Zenn book \u3092\u5229\u7528\u3057\u3066\u3044\u307E\u3059\u3002</p><h3 id="\u30ED\u30B8\u30C3\u30AF" tabindex="-1">\u30ED\u30B8\u30C3\u30AF <a class="header-anchor" href="#\u30ED\u30B8\u30C3\u30AF" aria-hidden="true" loading="lazy">#</a></h3><p>\u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u30ED\u30B8\u30C3\u30AF\u3092\u7F6E\u304D\u307E\u3059\u3002</p><p><div class="link-preview"><a href="https://github.com/chooyan-eng/calendar_logic" target="_blank" rel="noopener noreferrer"><div class="link-preview__title">GitHub - chooyan-eng/calendar_logic</div><div class="link-preview__description">Contribute to chooyan-eng/calendar_logic development by creating an account on GitHub.</div><div class="link-preview__url">GitHub</div></a><a class="link-preview__image" href="https://github.com/chooyan-eng/calendar_logic" target="_blank" rel="noopener noreferrer" style="background-image:url(&#39;https://opengraph.githubassets.com/f9b1b2afa8aff241b477e81764832b683e054ed704d39d1826f6999f411a4405/chooyan-eng/calendar_logic&#39;);"></a></div></p><h3 id="\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8" tabindex="-1">\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8 <a class="header-anchor" href="#\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8" aria-hidden="true" loading="lazy">#</a></h3><p>\u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u7F6E\u304D\u307E\u3059\u3002</p><p><div class="link-preview"><a href="https://github.com/chooyan-eng/calendar_widget" target="_blank" rel="noopener noreferrer"><div class="link-preview__title">GitHub - chooyan-eng/calendar_widget</div><div class="link-preview__description">Contribute to chooyan-eng/calendar_widget development by creating an account on GitHub.</div><div class="link-preview__url">GitHub</div></a><a class="link-preview__image" href="https://github.com/chooyan-eng/calendar_widget" target="_blank" rel="noopener noreferrer" style="background-image:url(&#39;https://opengraph.githubassets.com/668e28b18e04991394a3d1876385c18df31e1acb7c5669fbf607c825eef71209/chooyan-eng/calendar_widget&#39;);"></a></div></p><h3 id="\u30E1\u30A4\u30F3\u3068\u306A\u308B\u30A2\u30D7\u30EA" tabindex="-1">\u30E1\u30A4\u30F3\u3068\u306A\u308B\u30A2\u30D7\u30EA <a class="header-anchor" href="#\u30E1\u30A4\u30F3\u3068\u306A\u308B\u30A2\u30D7\u30EA" aria-hidden="true" loading="lazy">#</a></h3><p>\u30E1\u30A4\u30F3\u3068\u306A\u308B\u30A2\u30D7\u30EA\u3092\u7F6E\u304D\u307E\u3059\u3002</p><p><div class="link-preview"><a href="https://github.com/chooyan-eng/flutter_calendar" target="_blank" rel="noopener noreferrer"><div class="link-preview__title">GitHub - chooyan-eng/flutter_calendar</div><div class="link-preview__description">Contribute to chooyan-eng/flutter_calendar development by creating an account on GitHub.</div><div class="link-preview__url">GitHub</div></a><a class="link-preview__image" href="https://github.com/chooyan-eng/flutter_calendar" target="_blank" rel="noopener noreferrer" style="background-image:url(&#39;https://opengraph.githubassets.com/67eb6efd6ead1593f83196b33da4e7143b2631962b8b1f7362d9349b75de1751/chooyan-eng/flutter_calendar&#39;);"></a></div></p><h2 id="flutter-\u74B0\u5883\u69CB\u7BC9" tabindex="-1">Flutter \u74B0\u5883\u69CB\u7BC9 <a class="header-anchor" href="#flutter-\u74B0\u5883\u69CB\u7BC9" aria-hidden="true" loading="lazy">#</a></h2><p>\u5F53\u65E5\u307E\u3067\u306B Flutter \u306E\u958B\u767A\u74B0\u5883\u306E\u69CB\u7BC9\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p><p><code>flutter create</code> \u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3001\u6700\u521D\u306E\u30AB\u30A6\u30F3\u30BF\u30FC\u30A2\u30D7\u30EA\u304C\u8D77\u52D5\u3067\u304D\u305F\u3089 OK \u3067\u3059\u3002</p><p>\u307E\u3060\u74B0\u5883\u69CB\u7BC9\u304C\u3067\u304D\u3066\u3044\u306A\u3044\u65B9\u306F\u3001\u4EE5\u4E0B\u306E\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u8003\u306B\u9032\u3081\u3066\u304F\u3060\u3055\u3044\u3002</p><p><a href="https://docs.flutter.dev/get-started/install" loading="lazy" target="_blank" rel="noopener noreferrer">https://docs.flutter.dev/get-started/install</a></p><p>\u3044\u308D\u3044\u308D\u66F8\u3044\u3066\u3042\u308A\u307E\u3059\u304C\u3001\u5927\u307E\u304B\u306A\u624B\u9806\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002</p><ul><li>SDK \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B</li><li>\u30D1\u30B9\u3092\u901A\u3059</li><li>\u30A8\u30C7\u30A3\u30BF (\u4ECA\u56DE\u4F7F\u3046 Visual Studio Code) \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B</li></ul><p>\u3053\u306E\u3046\u3061\u4E0A 2 \u3064\u306B\u3064\u3044\u3066\u306F\u4EE5\u4E0B\u3067\u3082\u8A73\u3057\u304F\u66F8\u3044\u3066\u304A\u308A\u307E\u3059\u3002\u53C2\u8003\u306B\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002</p><h3 id="sdk-\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B" tabindex="-1">SDK \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B <a class="header-anchor" href="#sdk-\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B" aria-hidden="true" loading="lazy">#</a></h3><p>\u5404\u81EA\u306E\u74B0\u5883\u306B\u5408\u308F\u305B\u3066 SDK \u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3001\u305D\u308C\u305E\u308C\u306E\u74B0\u5883\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><p>\u306A\u304A\u3001\u4ECA\u56DE\u306E Flutter \u30D0\u30FC\u30B8\u30E7\u30F3\u306F <code>3.0.0-stable</code> \u3092\u4F7F\u3046\u4E88\u5B9A\u3067\u3059\u3002</p><ul><li>macOS - <a href="https://storage.googleapis.com/flutter_infra_release/releases/stable/macos/flutter_macos_3.0.0-stable.zip" loading="lazy" target="_blank" rel="noopener noreferrer">SDK for Intel</a> / <a href="https://storage.googleapis.com/flutter_infra_release/releases/stable/macos/flutter_macos_arm64_3.0.0-stable.zip" loading="lazy" target="_blank" rel="noopener noreferrer">SDK for Apple Silicon</a></li><li>Windows - <a href="https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_3.0.0-stable.zip" loading="lazy" target="_blank" rel="noopener noreferrer">SDK</a></li></ul><h3 id="\u30D1\u30B9\u3092\u901A\u3059" tabindex="-1">\u30D1\u30B9\u3092\u901A\u3059 <a class="header-anchor" href="#\u30D1\u30B9\u3092\u901A\u3059" aria-hidden="true" loading="lazy">#</a></h3><h4 id="mac-\u3092\u304A\u4F7F\u3044\u306E\u65B9" tabindex="-1">Mac \u3092\u304A\u4F7F\u3044\u306E\u65B9 <a class="header-anchor" href="#mac-\u3092\u304A\u4F7F\u3044\u306E\u65B9" aria-hidden="true" loading="lazy">#</a></h4><p><code>.bash_profile</code> \u3092 vi \u3067\u958B\u3044\u3066\u4EE5\u4E0B\u30B3\u30DE\u30F3\u30C9\u3092\u53E9\u304D\u307E\u3059\u3002</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/project</span></span>
<span class="line"></span></code></pre></div><p><code>&lt;USER&gt;</code> \u3092\u500B\u5225\u306E\u30E6\u30FC\u30B6\u30FC\u540D\u306B\u7F6E\u304D\u63DB\u3048\u3066 <code>PATH</code> \u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH=</span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">PATH</span><span style="color:#C3E88D;">:/Users/&lt;USER&gt;/project/flutter/bin</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p><code>PATH</code> \u3092\u66F4\u65B0\u3057\u3066\u4EE5\u4E0B\u30B3\u30DE\u30F3\u30C9\u3092\u53E9\u304D\u307E\u3059\u3002</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.bash_profile</span></span>
<span class="line"></span></code></pre></div><h4 id="windows-\u3092\u304A\u4F7F\u3044\u306E\u65B9" tabindex="-1">Windows \u3092\u304A\u4F7F\u3044\u306E\u65B9 <a class="header-anchor" href="#windows-\u3092\u304A\u4F7F\u3044\u306E\u65B9" aria-hidden="true" loading="lazy">#</a></h4><p><code>C:\\Program Files</code> \u306E\u3088\u3046\u306B\u30A2\u30AF\u30BB\u30B9\u8A31\u53EF\u304C\u5FC5\u8981\u306A\u5834\u6240\u3067\u884C\u3046\u3068\u5931\u6557\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u306E\u3067\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><p>C \u76F4\u4E0B\u306B <code>project</code> \u30D5\u30A9\u30EB\u30C0\u3092\u4F5C\u6210\u3001\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u305F <code>C:\\project</code> \u76F4\u4E0B\u306B\u89E3\u51CD\u3057\u307E\u3059\u3002\u305D\u3057\u3066 <code>bin</code> \u30D5\u30A9\u30EB\u30C0\u3092\u74B0\u5883\u5909\u6570\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002</p><h2 id="\u74B0\u5883\u69CB\u7BC9\u3092\u5C11\u3057\u697D\u306B\u3059\u308B" tabindex="-1">\u74B0\u5883\u69CB\u7BC9\u3092\u5C11\u3057\u697D\u306B\u3059\u308B <a class="header-anchor" href="#\u74B0\u5883\u69CB\u7BC9\u3092\u5C11\u3057\u697D\u306B\u3059\u308B" aria-hidden="true" loading="lazy">#</a></h2><p>Flutter \u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u30EA\u30DD\u30B8\u30C8\u30EA\u3092\u4F5C\u6210\u3057\u3066\u3044\u307E\u3059\u3002</p><p><div class="link-preview"><a href="https://github.com/jiyuujin/template_flutter" target="_blank" rel="noopener noreferrer"><div class="link-preview__title">GitHub - jiyuujin/template_flutter at release/flutter3.0.0-stable</div><div class="link-preview__description">Contribute to jiyuujin/template_flutter development by creating an account on GitHub.</div><div class="link-preview__url">GitHub</div></a><a class="link-preview__image" href="https://github.com/jiyuujin/template_flutter" target="_blank" rel="noopener noreferrer" style="background-image:url(&#39;https://opengraph.githubassets.com/75ec1bb1321f6f070f7688f4b0140646411c27f5cc69f784bd7622a60daa1c5a/jiyuujin/template_flutter&#39;);"></a></div></p><h2 id="\u914D\u4FE1\u52D5\u753B" tabindex="-1">\u914D\u4FE1\u52D5\u753B <a class="header-anchor" href="#\u914D\u4FE1\u52D5\u753B" aria-hidden="true" loading="lazy">#</a></h2><p>2022/07/02 \u30AA\u30F3\u30E9\u30A4\u30F3\u3067\u958B\u50AC\u3057\u305F Flutter Handson Osaka <a href="https://flutter-jp.connpass.com/event/250745/" loading="lazy" target="_blank" rel="noopener noreferrer">#10</a> \u3067\u5F53\u65E5\u914D\u4FE1\u3057\u305F\u52D5\u753B\u306F\u3053\u3061\u3089\u304B\u3089\u3054\u89A7\u306B\u306A\u308C\u307E\u3059\u3002</p>`,40),u=e("h2",{id:"\u56F0\u3063\u305F\u3089",tabindex:"-1"},[t("\u56F0\u3063\u305F\u3089 "),e("a",{class:"header-anchor",href:"#\u56F0\u3063\u305F\u3089","aria-hidden":"true",loading:"lazy"},"#")],-1),g=e("p",null,[e("a",{href:"http://flutter.io/",loading:"lazy",target:"_blank",rel:"noopener noreferrer"},"\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u8AAD\u307F\u307E\u3057\u3087\u3046")],-1);function _(b,f,v,y,m,k){const l=r("HistoryTags"),n=r("YouTubeVideo");return d(),i("div",null,[p,a(l,{tags:["Flutter","Plugins"]}),h,a(n,{"video-id":"dlAKk1VAQyA",title:"\u30AB\u30EC\u30F3\u30C0\u30FC\u30A2\u30D7\u30EA"}),u,g])}var C=o(c,[["render",_]]);export{z as __pageData,C as default};
