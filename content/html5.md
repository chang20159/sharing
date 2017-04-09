<style>
        table[class='html5'] img{
            width: 3em;
            background-color: initial;
            border : none;
        }
        table[class='html5'] td{
            text-align: center;
            padding: 1em 1em;
            border-bottom: none;
        }
        section[class='vs'] table tbody tr td:first-child {
            width: 20%;
        }
        section[class='vs'] table tbody tr td:last-child {
            width: 40%;
        }
</style>

# HTML 5
---
# HTML 5 技术
<table class="html5">
    <tr>
        <td><img src="image/html5/html5-logo/html5_semantics.svg"><br>语义化标签</td>
        <td><img src="image/html5/html5-logo/html5_connectivity.svg"><br>通信</td>
        <td><img src="image/html5/html5-logo/html5_offline_storage.svg"><br>离线 & 存储</td>
        <td><img src="image/html5/html5-logo/html5_multimedia.svg"><br>多媒体</td>
    </tr>
    <tr>
        <td><img src="image/html5/html5-logo/html5_3d_effects.svg"><br>绘图&3D效果</td>
        <td><img src="image/html5/html5-logo/html5_device_access.svg"><br>设备访问</td>
        <td><img src="image/html5/html5-logo/html5_perfintegration.svg"><br>性能 & 集成</td>
        <td><img src="image/html5/html5-logo/html5_css3_styling.svg"><br>CSS3样式</td>
    </tr>
</table>

---

# New Tags and Attributes
---
## Before 
```markup
            <div class="header"> a logo</div>
            <div class="section">
                <h1>This is a title</h1>
                <p>This is a paragraph.</p>
                <div class="subsection">
                    <h2>This is a title</h1>
                    <p>This is a paragraph.</p>
                </div>
            </div>
            <input type="text" id="email">
```

---

## 语义化标签
- 文档结构
- ` <main> <section> <article> <nav> <header> <footer> <aside> <hgroup> <menu> <menuitem> ` 
- 多媒体
  - `<audio>  <video> <source> <track>`
- 新的表单属性和元素 
  - `input[type='url | tel | email | search'],<datalist>,<output>`
  - 约束验证 pattern | maxlength | min | max | step
  - 阻止约束验证 novalidate | formnovalidate
- [HTML5标签列表](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list) [[Demo](demo/html5/html5.html)]
<!-- - 其他
  - `<progress> <meter> <figure> <figcaption>  <data> `
  - `<mark> <keygen> <details> <summary> <time>`
  - `<template> <ruby> <rt> <rp> <bdi> <wbr> `
  - `<canvas> <svg> <math>`  -->   


--- 

## iframe
iframe的安全性无法保证 

<aside class="notes">
    iframe缺点：
     iframe会阻塞主页面的Onload事件
     不利于SEO，只能看到iframe标签，iframe内的页面看不到
     iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
     使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好通过JavaScript动态给iframe添加src属性值，这样可以绕开以上两个问题
     iframe用处：
     长连接 （websocket）
     跨域通信 （CORS）
     无刷新文件上传 （FormData）
     历史记录管理 （html5 history api）
</aside>

--- 
## The HTML5 Support
- sandbox  限制iframe页面的行为
- seamless 去除边框和滚动条 [不支持](http://stackoverflow.com/questions/4804604/html5-iframe-seamless-attribute)
- srcdoc 与 sandbox 和 seamless 属性一同使用 [srcdoc vs src](http://stackoverflow.com/questions/19739001/which-is-the-difference-between-srcdoc-and-src-datatext-html-in-an)
- [Demo](demo/html5/iframe/iframe.html) 

--- 

# [MathML](https://developer.mozilla.org/zh-CN/docs/Web/MathML)
<math>
    <mrow>
        <msup>
            <mi> a </mi>
            <mn>2</mn>
        </msup>
        <mo> + </mo>
        <msup>
            <mi> b </mi>
            <mn>2</mn>
        </msup>
        <mo> = </mo>
        <msup>
            <mi> c </mi>
            <mn>2</mn>
        </msup>
    </mrow>
</math>
   
--- 

# Connection
---

## Before
- 短轮询
- [Comet  “服务器推”](https://www.ibm.com/developerworks/cn/web/wa-lo-comet/)

--- 
## the HTML5 Support
<ul>
    <li class="fragment">[WebSocket](https://developer.mozilla.org/zh-CN/docs/WebSockets)</li>
    <li class="fragment">[Server Sent Events](https://developer.mozilla.org/zh-CN/docs/Server-sent_events/Using_server-sent_events)</li>
    <li class="fragment">[WebRTC](https://developer.mozilla.org/zh-CN/docs/WebRTC)</li>
</ul>

---

## Websocket
- 独立、全新的协议，基于TCP
- 浏览器和服务器间进行全双工通讯,数据可双向传输
- [Demo](demo/html5/websocket/index.html)

<aside class="notes">
由客户端发起 HTTP1.1 GET方法
服务端返回HTTP响应，101表示切换协议成功
```markup
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```
</aside>

---

## Websocket 客户端
```javascript
var ws = new WebSocket('ws://localhost:8080/ws?uid='+uid);
ws.onopen = function(event){
    console.log("websocket:已连接");
}
ws.onmessage = function(event){
    console.log("收到一条消息");
}
ws.onclose = function(){
    console.log("websocket:已关闭");
}
ws.onerror=function(e){
    console.log("websocket:发生错误");
}
ws.send(data); <!-- 通过WebSocket连接向服务器发送数据 -->
ws.close(); <!-- 关闭WebSocket连接或停止正在进行的连接请求 -->
```

---

## Websocket 服务端
- [socket.io](https://socket.io/)
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node)
- [spring-websocket](https://docs.spring.io/spring/docs/current/spring-framework-reference/html/websocket.html)

---

## Server-sent Events 
- 客户端使用[EventSource API](https://developer.mozilla.org/zh-CN/docs/Server-sent_events/EventSource)监听服务端发送事件
- 服务端按照一定格式返回事件流

---

## Server Sent Events 客户端
```javascript
var evtSource = new EventSource('http://localhost:8080/server-sent-events?requestTime=' + new Date().getTime());
evtSource.onmessage = function(e){
    <!-- 监听服务端没有指定事件类型(event字段)的消息 -->
};
evtSource.addEventListener(eventType, function(e) { <!-- 监听其他-->}, false);类型事件
evtSource.onopen = function(e){  <!-- 连接刚打开时被调用 --> }
```      
--- 


## Server Sent Events 服务端
- 响应内容类型 text/event-stream
- 事件流格式 event &&  data 
- 每条消息后以空行分隔

```markup
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Here's a system message of some kind that will get used
data: to accomplish some task.
```

--- 

## [WebRTC](https://developer.mozilla.org/zh-CN/docs/WebRTC)
浏览器之间点对点（Peer to Peer）语音/视频交流和数据分享

- MediaStream  :   获取音频流和视频流
- RTCPeerConnection ：建立和维护端到端连接
- RTCDataChannel

---

# Discussion

--- 

<h1> Websocket<br> <span style="color:red">VS</span> <br> Server-sent Events </h1>
<aside class="notes">
    [Web端即时通讯技术盘点：短轮询、Comet、Websocket、SSE](http://www.52im.net/thread-336-1-1.html)
</aside>

--- 

<h1>Instant Messaging<br>  <span style="color:blue">and</span>  <br> Real-time Communication</h1>
<aside class="notes">
    [是时候区分下即时通信和实时通信了](https://www.agora.io/cn/news/1530/)
</aside>

--- 

# Client-side storage

--- 

## Web应用可涉及哪些缓存？

--- 

+ 数据库数据缓存
    + memcached、redis
- 服务端缓存
    - 代理服务器缓存
    - CDN缓存
- HTTP缓存 cookie
    - 本地缓存 
    - 协商缓存
- Web Storage
    - sessionStorage
    - localStorage
- IndexedDB
- Web SQL
- 离线缓存
    - Application Cache （已废弃）
    - Service Workers 
      - CacheStorage 保存每个serverWorker声明的cache对象
<aside class="notes">
原生APP本来就支持可离线访问资源
navigator.onLine 是一个值为 true/false  (true 表示在线， false 表示离线) 的属性
</aside>

--- 

## Web Storage
- 更大存储量，更安全，更便捷
- 存储不需要与服务器交互的数据

---
## [SessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage) VS [LocalStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 
- SessionStorage 浏览器会话结束时清除
- LocalStorage 数据没有过期时间
- 都是window的属性,Storage的实例
- 每个源都拥有自己单独的存储空间
<aside class="notes">
    - https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API
    - window.globalStorage自Gecko 13 (Firefox 13)起不再支持
    - globalStorage是StorageObsolete的一个实例
</aside>

---
## IndexedDB
- 在客户端存储大量结构化数据 
- 示例：大象web

---
## 应用缓存
- html 元素上增加 manifest 特性
- 添加缓存清单(cache manifest) 文件
- 将manifest特性与缓存清单文件关联

--- 

## app cache文件
```markup
<html manifest="main.appcache"></html>
```
```markup
CACHE MANIFEST
# v1 2017-03-26
# 缓存资源
CACHE:
main.html
http://p1.meituan.net/activityback/30bbd249f6810e7019d8c94f03581fb857402.jpg

# 需要向服务器请求的资源
NETWORK:
main.css

# 需要向服务器请求的资源 请求失败的后背页面 
FALLBACK:
/test main.html

```

--- 

## Service Workers
- 注册
```javascript
ServiceWorkerContainer.register(scriptURL, options).then(
    function(ServiceWorkerRegistration) {
        // do something
    }
);
```
- 安装
```javascript
this.addEventListener('install', function(event) { ... })
```
<aside class="notes"> 
    chrome://serviceworker-internals
    https://mdn.github.io/sw-test/
</aside>

--- 
@data-background:: ./image/html5/http-cache.png
## HTTP缓存

---
## Web SQL（已废弃）

- 让浏览器支持小型数据库存储功能
- 无法统一各个浏览器厂商实现的SQL语言
- [Web SQL Database规范](https://dev.w3.org/html5/webdatabase/)

<p style="color:red">Beware. This specification is no longer in active maintenance and the Web Applications Working Group does not intend to maintain it further.</p>

---

# Multimedia

---
## Flash
### `<object>` &&  `<embed>`

```markup
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" 
        codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" 
        width="200" height="200"  
        id="myMovieName"> 

        <param name="movie" value="http://player.youku.com/player.php/sid/XMzI2NTc4NTMy/v.swf"> 
        <param name="loop" value="true"> 
        <param name="quality" value="high"> 
        <embed src="http://player.youku.com/player.php/sid/XMzI2NTc4NTMy/v.swf" 
               quality=high width="200" height="200"  loop
               name="myMovieName" type="application/x-shockwave-flash" 
               pluginspace="http://www.macromedia.com/go/getflashplayer"> 
        </embed> 
</object>
```

--- 
## Video & Audio
### src or `<source>`
```markup
<video width="200" height="200" controls>
    <source src="movie.ogg" type="video/ogg">
    <source src="movie.mp4" type="video/mp4">
</video>

<audio controls="controls">
    Your browser does not support the <code>audio</code> element.
    <source src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg" type="audio/wav">
</audio>
```

---

# High Performance
---
## 下面代码的执行结果是什么？
```javascript
function foo() {
    console.log( 'first' );
    setTimeout( ( function(){ console.log( 'second' ); } ), 0);
}
for (var i = 0; i < 1000; i++) {
    foo();
}
```

--- 
## 再来一个
```javascript
var isEnd = true;
window.setTimeout(function () {
    isEnd = false;
}, 10);
while (isEnd);
alert('end'); 
```
<aside class="notes">
    - 这个while永远的占用了js线程，所以setTimeout里面的函数永远不会执行
    - alert也永远不会弹出
</aside>

--- 
- JavaScript是单线程的，浏览器是多线程的
- 浏览器是事件驱动的，事件循环机制 event loop
- JS线程与GUI线程是互斥的
- [Demo](/demo/html5/JSThread-UIThread/test.html)

<aside class="notes">
- 浏览器无论什么时候都只有一个JS线程
- JS线程和GUI线程是互斥的
- 浏览器多线程 [Javascript是单线程的深入分析](http://www.cnblogs.com/Mainz/p/3552717.html)
    - javascript引擎线程
    - GUI界面渲染线程
    - 浏览器事件触发线程
    - Http请求线程
</aside>

---

## Web Workers
- 真正的多线程，不会阻塞UI线程
- 只能进行纯计算,无法操作DOM
- 可发送消息给创建者，让创建者来完成DOM操作
- 传入 Worker 构造函数的参数 URI 必须遵循同源策略
- [Demo1](/demo/html5/JSThread-UIThread/test.html) [Demo2](http://mdn.github.io/simple-web-worker/)

--- 

```javascript
//index.html
var myWorker = new Worker("worker.js");
myWorker.postMessage(jsonData); 
myWorker.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from worker');
};

//worker.js 
onmessage = function(e) {
  console.log('Message received from index.html > jsonData');
  var workerResult = 'Result: ' + jsonData;
  console.log('Posting message back to index.html');
  postMessage(workerResult);
}
```

---

## XMLHttpRequest Level 2
## 即时编译的 JavaScript 引擎
---
#  Device Access
---
# 3D Graphics and Effects
---
## Canvas
---
## SVG
---
## WebGL
---
# CSS3

## New Style
- 圆角
- 阴影
- gradients(渐变)
- transitions(过渡) 
- animations(动画)

---
## New Layout
- multi-columns 
- flexible box 
---
# 其他
- Fullscreen API
- Pointer Lock API
- requestAnimationFrame
- Web-based protocol handlers
- Drag and drop
- The contentEditable Attribute
- History API
---

# 兼容性

---
## 使用浏览器不支持的标签
```css
section, article, aside, footer, header, nav, hgroup{ 
    display:block; //未知元素默认会样式化为display:inline
}
```

```javascript
// ie8及ie8以前的浏览器中不允许样式化不支持的元素,需要一个特殊脚本
<script>
    document.createElement("header" );
    document.createElement("footer" );
    document.createElement("section"); 
    document.createElement("aside"  );
    document.createElement("nav"    );
    document.createElement("article"); 
    document.createElement("hgroup" ); 
    document.createElement("time"   );
<script>
```

---
## 优雅降级 
- 圆角 > 直角
- 阴影 > 无阴影 
- 有动画 > 无动画
- requestAnimationFrame > setTimeout
- Web Socket > 长连接

<aside class="notes">
    未知元素默认会样式化为display:inline
</aside>

--- 

## polyfill
- canvas --> exCanvas
- SVG --> Raphaël
- MathML --> MathJax

--- 
# 参考
- [html5test](http://html5test.com/)
- [Can I use](http://caniuse.com/)

---
# Thank you!
