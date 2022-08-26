import{_ as s,c as h,a,b as e,d as t,e as o,o as _,r}from"./app.f03c5738.js";const j=JSON.parse('{"title":"Atomic Design (Flutter for Web)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u958B\u767A\u74B0\u5883\u306B\u5FC5\u8981\u306A\u3082\u306E\u4E00\u89A7","slug":"\u958B\u767A\u74B0\u5883\u306B\u5FC5\u8981\u306A\u3082\u306E\u4E00\u89A7"},{"level":2,"title":"Flutter SDK \u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9","slug":"flutter-sdk-\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"},{"level":3,"title":"Flutter \u74B0\u5883\u69CB\u7BC9","slug":"flutter-\u74B0\u5883\u69CB\u7BC9"},{"level":2,"title":"\u30A2\u30D7\u30EA\u8D77\u52D5","slug":"\u30A2\u30D7\u30EA\u8D77\u52D5"},{"level":3,"title":"1. \u4ECA\u56DE\u4F7F\u7528\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9","slug":"_1-\u4ECA\u56DE\u4F7F\u7528\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"},{"level":3,"title":"2. Packages get","slug":"_2-packages-get"},{"level":3,"title":"3. Flutter for Web \u8D77\u52D5","slug":"_3-flutter-for-web-\u8D77\u52D5"},{"level":2,"title":"\u914D\u4FE1\u52D5\u753B","slug":"\u914D\u4FE1\u52D5\u753B"},{"level":3,"title":"1. 1\u7AE0","slug":"_1-1\u7AE0"},{"level":3,"title":"2. 2\u7AE0","slug":"_2-2\u7AE0"},{"level":3,"title":"3. 3\u7AE0","slug":"_3-3\u7AE0"},{"level":3,"title":"4. 4\u7AE0","slug":"_4-4\u7AE0"},{"level":3,"title":"5. 5\u7AE0","slug":"_5-5\u7AE0"},{"level":2,"title":"\u56F0\u3063\u305F\u3089","slug":"\u56F0\u3063\u305F\u3089"}],"relativePath":"handson/flutter_for_web.md"}'),c={name:"handson/flutter_for_web.md"},u=e("h1",{id:"atomic-design-flutter-for-web",tabindex:"-1"},[t("Atomic Design (Flutter for Web) "),e("a",{class:"header-anchor",href:"#atomic-design-flutter-for-web","aria-hidden":"true",loading:"lazy"},"#")],-1),g=o('<p>\u5F53\u65E5\u307E\u3067\u306B <a href="#%E3%82%A2%E3%83%97%E3%83%AA%E8%B5%B7%E5%8B%95" loading="lazy">\u30A2\u30D7\u30EA\u8D77\u52D5</a> \u3092\u5B8C\u4E86\u3001\u4EE5\u4E0B\u3092\u76EE\u6307\u3057\u3066\u3044\u305F\u3060\u304F\u3002</p><p><div class="link-preview"><a href="https://github.com/YujiOnishi/flutter_atomic_handson_hinagata" target="_blank" rel="noopener noreferrer"><div class="link-preview__title">GitHub - YujiOnishi/flutter_atomic_handson_hinagata</div><div class="link-preview__description">Contribute to YujiOnishi/flutter_atomic_handson_hinagata development by creating an account on GitHub.</div><div class="link-preview__url">GitHub</div></a><a class="link-preview__image" href="https://github.com/YujiOnishi/flutter_atomic_handson_hinagata" target="_blank" rel="noopener noreferrer" style="background-image:url(&#39;https://opengraph.githubassets.com/38bfeaa254d2b2ef5b9f583ec48555b7b14336588f0060343d6bcf31db1f710b/YujiOnishi/flutter_atomic_handson_hinagata&#39;);"></a></div></p><p>\u96DB\u578B\u30B3\u30FC\u30C9\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057 AndroidStudio \u3067\u958B\u304D\u3001\u30EC\u30B8\u30E5\u30E1\u3068 YoutubeLive \u306E\u9032\u884C\u306B\u5FDC\u3058\u3066\u30EC\u30B8\u30E5\u30E1\u30B3\u30FC\u30C9\u3092\u53C2\u8003\u306B\u8CBC\u308A\u4ED8\u3051\u30A2\u30D7\u30EA\u306E\u5B8C\u6210\u3092\u76EE\u6307\u3059\u3002</p><p>\u203B \u958B\u59CB\u6642\u306B\u306F\u3001AndroidStudio \u3068 Flutter for Web \u306E\u8D77\u52D5\u3092\u304A\u9858\u3044\u3057\u307E\u3059 (\u8A73\u7D30\u306F\u4EE5\u4E0B\u3092\u3054\u53C2\u7167\u304F\u3060\u3055\u3044)</p><ul><li><a href="https://docs.google.com/presentation/d/1fPNGFQLCMzOlHE9YqsP_aQ2G0LDqqsAsFsMTMB6MdxA/edit#slide=id.g8821f73e74_1_5" loading="lazy" target="_blank" rel="noreferrer">\u30EC\u30B8\u30E5\u30E1</a></li><li><a href="https://github.com/YujiOnishi/-flutter_atomic_handson_resume" loading="lazy" target="_blank" rel="noreferrer">\u96DB\u5F62\u30B3\u30FC\u30C9</a></li></ul><h2 id="\u958B\u767A\u74B0\u5883\u306B\u5FC5\u8981\u306A\u3082\u306E\u4E00\u89A7" tabindex="-1">\u958B\u767A\u74B0\u5883\u306B\u5FC5\u8981\u306A\u3082\u306E\u4E00\u89A7 <a class="header-anchor" href="#\u958B\u767A\u74B0\u5883\u306B\u5FC5\u8981\u306A\u3082\u306E\u4E00\u89A7" aria-hidden="true" loading="lazy">#</a></h2>',6),f=e("h2",{id:"flutter-sdk-\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",tabindex:"-1"},[t("Flutter SDK \u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9 "),e("a",{class:"header-anchor",href:"#flutter-sdk-\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9","aria-hidden":"true",loading:"lazy"},"#")],-1),p=e("h4",{id:"mac-os-\u3092\u304A\u4F7F\u3044\u306E\u65B9\u306F\u3001",tabindex:"-1"},[t("Mac OS \u3092\u304A\u4F7F\u3044\u306E\u65B9\u306F\u3001 "),e("a",{class:"header-anchor",href:"#mac-os-\u3092\u304A\u4F7F\u3044\u306E\u65B9\u306F\u3001","aria-hidden":"true",loading:"lazy"},"#")],-1),b=e("h4",{id:"windows-\u3092\u304A\u4F7F\u3044\u306E\u65B9\u306F\u3001",tabindex:"-1"},[t("Windows \u3092\u304A\u4F7F\u3044\u306E\u65B9\u306F\u3001 "),e("a",{class:"header-anchor",href:"#windows-\u3092\u304A\u4F7F\u3044\u306E\u65B9\u306F\u3001","aria-hidden":"true",loading:"lazy"},"#")],-1),m=o('<h3 id="flutter-\u74B0\u5883\u69CB\u7BC9" tabindex="-1">Flutter \u74B0\u5883\u69CB\u7BC9 <a class="header-anchor" href="#flutter-\u74B0\u5883\u69CB\u7BC9" aria-hidden="true" loading="lazy">#</a></h3><p>\u74B0\u5883\u69CB\u7BC9\u3059\u308B\u5834\u5408\u306F <a href="/handson/basic_web.html" loading="lazy">Flutter for Web \u74B0\u5883\u69CB\u7BC9</a> \u3092\u78BA\u8A8D\u3057\u307E\u3057\u3087\u3046\u3002</p><h2 id="\u30A2\u30D7\u30EA\u8D77\u52D5" tabindex="-1">\u30A2\u30D7\u30EA\u8D77\u52D5 <a class="header-anchor" href="#\u30A2\u30D7\u30EA\u8D77\u52D5" aria-hidden="true" loading="lazy">#</a></h2><ol><li>\u4ECA\u56DE\u4F7F\u7528\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9</li><li>Packages get</li><li>\u30A2\u30D7\u30EA\u8D77\u52D5</li></ol><h3 id="_1-\u4ECA\u56DE\u4F7F\u7528\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9" tabindex="-1">1. \u4ECA\u56DE\u4F7F\u7528\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9 <a class="header-anchor" href="#_1-\u4ECA\u56DE\u4F7F\u7528\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9" aria-hidden="true" loading="lazy">#</a></h3><p>1-1. \u4EE5\u4E0B <a href="https://github.com/YujiOnishi/flutter_atomic_handson_hinagata" loading="lazy" target="_blank" rel="noreferrer">URL</a> \u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3001\u7DD1\u8272\u306E <code>Code</code> \u3092\u62BC\u4E0B\u3001<code>Download ZIP</code> \u3092\u9078\u629E\u3002</p><p>1-2. \u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u306B\u4FDD\u5B58\u3057\u3001\u89E3\u51CD\u3059\u308B\u3002</p><p>1-3. AndroidStudio \u3092\u8D77\u52D5\u3001\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u305F\u30D5\u30A9\u30EB\u30C0\u3092\u958B\u304F\u3002</p><h3 id="_2-packages-get" tabindex="-1">2. Packages get <a class="header-anchor" href="#_2-packages-get" aria-hidden="true" loading="lazy">#</a></h3><p>2-1. AndroidStudio \u306B\u3066\u3001\u30D5\u30A9\u30EB\u30C0\u5185\u306E pubspec.yaml \u3092\u958B\u304F\u3002</p><p>2-2. \u753B\u9762\u4E0A\u306E <code>Packages get</code> \u3092\u62BC\u4E0B\u3059\u308B\u3002</p><h3 id="_3-flutter-for-web-\u8D77\u52D5" tabindex="-1">3. Flutter for Web \u8D77\u52D5 <a class="header-anchor" href="#_3-flutter-for-web-\u8D77\u52D5" aria-hidden="true" loading="lazy">#</a></h3><p>3-1. \u4E0A\u90E8\u306E\u5DE5\u5177\u306E\u3088\u3046\u306A\u30A2\u30A4\u30B3\u30F3\u306E\u3068\u306A\u308A\u306B\u3042\u308B\u30BF\u30FC\u30B2\u30C3\u30C8\u30C7\u30D0\u30A4\u30B9\u3067 <code>Web Server</code> \u3092\u9078\u629E\uFF08\u3082\u3057\u3001Chrome \u304C\u3042\u308B\u306A\u3089 Web Server \u3067\u306F\u306A\u304F <code>Chrome</code> \u3092\u9078\u629E\uFF09</p><p>3-2. \u30BF\u30FC\u30B2\u30C3\u30C8\u30C7\u30D0\u30A4\u30B9\u306E 2 \u3064\u3068\u306A\u308A\u306B\u3042\u308B\u518D\u751F\u30DC\u30BF\u30F3\u3092\u62BC\u4E0B\u3057 Flutter for Web \u3092\u8D77\u52D5 (Web \u30DA\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u307E\u3059)</p><p>\u203B \u7D50\u69CB\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002</p><h2 id="\u914D\u4FE1\u52D5\u753B" tabindex="-1">\u914D\u4FE1\u52D5\u753B <a class="header-anchor" href="#\u914D\u4FE1\u52D5\u753B" aria-hidden="true" loading="lazy">#</a></h2><p>2020/12/05 \u30AA\u30F3\u30E9\u30A4\u30F3\u3067\u958B\u50AC\u3057\u305F Flutter Handson Osaka <a href="https://flutter-jp.connpass.com/event/194004/" loading="lazy" target="_blank" rel="noreferrer">#7</a> \u3067\u5F53\u65E5\u914D\u4FE1\u3057\u305F\u52D5\u753B\u306F\u3053\u3061\u3089\u304B\u3089\u3054\u89A7\u306B\u306A\u308C\u307E\u3059\u3002<a href="https://github.com/YujiOnishi/-flutter_atomic_handson_resume/" loading="lazy" target="_blank" rel="noreferrer">\u30EC\u30B8\u30E5\u30E1</a> \u3068 <a href="https://docs.google.com/spreadsheets/d/1MB4Ph9kY-g7RiXNdHV3ll7iY0hKRLe160U4KpcFNzVE/edit#gid=1226069133" loading="lazy" target="_blank" rel="noreferrer">\u89E3\u8AAC\u66F8</a> \u3092\u5408\u308F\u305B\u3066\u3054\u78BA\u8A8D\u3044\u305F\u3060\u3051\u308C\u3070\u3002</p><h3 id="_1-1\u7AE0" tabindex="-1">1. 1\u7AE0 <a class="header-anchor" href="#_1-1\u7AE0" aria-hidden="true" loading="lazy">#</a></h3>',18),v=e("h3",{id:"_2-2\u7AE0",tabindex:"-1"},[t("2. 2\u7AE0 "),e("a",{class:"header-anchor",href:"#_2-2\u7AE0","aria-hidden":"true",loading:"lazy"},"#")],-1),k=e("h3",{id:"_3-3\u7AE0",tabindex:"-1"},[t("3. 3\u7AE0 "),e("a",{class:"header-anchor",href:"#_3-3\u7AE0","aria-hidden":"true",loading:"lazy"},"#")],-1),y=e("h3",{id:"_4-4\u7AE0",tabindex:"-1"},[t("4. 4\u7AE0 "),e("a",{class:"header-anchor",href:"#_4-4\u7AE0","aria-hidden":"true",loading:"lazy"},"#")],-1),z=e("h3",{id:"_5-5\u7AE0",tabindex:"-1"},[t("5. 5\u7AE0 "),e("a",{class:"header-anchor",href:"#_5-5\u7AE0","aria-hidden":"true",loading:"lazy"},"#")],-1),x=e("h2",{id:"\u56F0\u3063\u305F\u3089",tabindex:"-1"},[t("\u56F0\u3063\u305F\u3089 "),e("a",{class:"header-anchor",href:"#\u56F0\u3063\u305F\u3089","aria-hidden":"true",loading:"lazy"},"#")],-1),A=e("p",null,[e("a",{href:"http://flutter.io/",loading:"lazy",target:"_blank",rel:"noreferrer"},"\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u8AAD\u307F\u307E\u3057\u3087\u3046")],-1);function w(S,T,F,D,O,Y){const n=r("HistoryTags"),d=r("Environment"),l=r("SDKInstall"),i=r("YouTubeVideo");return _(),h("div",null,[u,a(n,{tags:["Flutter for Web","Flutter","Atomic Design"]}),g,a(d),f,p,a(l,{os:"macos",version:"1.23.0-18.1.pre-beta"}),b,a(l,{os:"windows",version:"1.23.0-18.1.pre-beta"}),m,a(i,{"video-id":"koMMSSQHjOU",title:"Atomic Design 1\u7AE0"}),v,a(i,{"video-id":"rBtnmLidjes",title:"Atomic Design 2\u7AE0"}),k,a(i,{"video-id":"2agTS7ffo0s",title:"Atomic Design 3\u7AE0"}),y,a(i,{"video-id":"q7pxC7xtCI4",title:"Atomic Design 4\u7AE0"}),z,a(i,{"video-id":"FK5OtLrajkk",title:"Atomic Design 5\u7AE0"}),x,A])}var C=s(c,[["render",w]]);export{j as __pageData,C as default};