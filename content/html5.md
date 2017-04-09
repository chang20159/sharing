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
常艳芳<br><br>
商户前端技术组

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
## HTML5 Support
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
## HTML5 Support
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

## Before
- [cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)
- Web SQL

---
## cookie
- 每次请求都会携带cookie
- 浏览器对cookie的个数和大小有限制

服务器发送到用户浏览器并保存在浏览器上的一块数据,    
浏览器下一次发起请求时被携带并发送到服务器上

---
## Web SQL（已废弃）

- 让浏览器支持小型数据库存储功能
- 无法统一各个浏览器厂商实现的SQL语言
- [Web SQL Database规范](https://dev.w3.org/html5/webdatabase/)

<p style="color:red">Beware. This specification is no longer in active maintenance and the Web Applications Working Group does not intend to maintain it further.</p>

---
## HTML5 Support
- DOM存储
- IndexedDB

--- 

## DOM存储
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

# 离线缓存
- Application Cache （已废弃）
- Service Workers 

<aside class="notes">
原生APP本来就支持可离线访问资源
navigator.onLine 是一个值为 true/false  (true 表示在线， false 表示离线) 的属性
</aside>

---
## Application Cache 
### 应用缓存
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
### src or `<source>`
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

<aside class="notes">
    Web Workers是一种机制，通过它可以使一个脚本操作在与Web应用程序的主执行线程分离的后台线程中运行。这样做的优点是可以在单独的线程中执行繁琐的处理，让主（通常是UI）线程运行而不被阻塞/减慢。
</aside>

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
#  Device Access
---
## 图片上传预览
- window.URL.createObjectURL() && window.URL.revokeObjectURL()
- FileReader
- [Demo](demo/html5/device-access/image-preview.html)
- [在web应用中使用文件](https://developer.mozilla.org/zh-CN/docs/Using_files_from_web_applications)

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
---
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

## Polyfill

[HTML5 Cross Browser Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills)
<aside class="notes">
    Polyfill或者Polyfiller，是英国Web开发者 Remy Sharp 在咖啡店蹲坑的时候拍脑袋造出来的。当时他想用一个词来形容"用JavaScript（或者Flash之类的什么鬼）来实现一些浏览器不支持的原生API"。Shim这个已经有的词汇第一时间出现在他的脑海里。但是他回头想了一下Shim一般有自己的API，而不是单纯实现原生不支持的API。苦思冥想一直想不到合适的单词，于是他一怒之下造了一个单词Polyfill。除了他自己用这个词以外，他还给其他开发者用。随着他在各种Web会议演讲和他写的书《Introducing HTML5》中频繁提到这个词，大家用了都觉得很好，就一起来用。
    Polyfill的准确意思为：用于实现浏览器并不支持的原生API的代码。
    例如，querySelectorAll是很多现代浏览器都支持的原生Web API，但是有些古老的浏览器并不支持，那么假设有人写了库，只要用了这个库， 你就可以在古老的浏览器里面使用document.querySelectorAll，使用方法跟现代浏览器原生API无异。那么这个库就可以称为Polyfill或者Polyfiller。

    好，那么问题就来了。jQuery是不是一个Polyfill?答案是No。因为它并不是实现一些标准的原生API，而是封装了自己API。一个Polyfill是抹平新老浏览器 标准原生API 之间的差距的一种封装，而不是实现自己的API。

    已有的一些Polyfill，如 Polymer 是让旧的浏览器也能用上 HTML5 Web Component 的一个Polyfill。FlashCanvas是用Flash实现的可以让不支持Canvas API的浏览器也能用上Canvas的Polyfill。

    这里有一堆Polyfills，有兴趣可以把玩一下：HTML5 Cross Browser Polyfills
</aside>

--- 
# 参考
- [HTML 5](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5)
- [html5test](http://html5test.com/)
- [Can I use](http://caniuse.com/)

---
# Thank you!
