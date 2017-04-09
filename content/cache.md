## Web应用的缓存策略有哪些？

--- 

- 浏览器缓存
- 代理服务器缓存
- 数据库缓存
- CDN缓存

--- 
## 浏览器缓存
- DNS缓存
- HTTP缓存


<aside class="notes">
    减少网络带宽消耗
    降低服务器压力
    减少网络延迟，加快页面打开速度
</aside>

--- 
## DNS缓存
- 浏览器
- 操作系统

缓存域名与IP的对应关系，不必重复询问DNS服务器，加速网址解析

---
## HTTP缓存
- Cache-Control / Expires
- ETag / LastModified
- If-None-Match / If-Modified-Since

基于Http协议，根据协议头判断使用缓存还是向服务器请求资源