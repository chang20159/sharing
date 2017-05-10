# 了解缓存
常艳芳<br><br>
商户前端技术组


---

## Web应用的缓存策略有哪些？

---



--- 
## DNS缓存
缓存域名与IP的对应关系，不必重复询问DNS服务器，加速网址解析


---
## DNS域名解析过程

---
![](image/cache/DNS解析过程.png)

<aside class="notes">
    域名从右到左查询，先从根，然后到顶级域名服务器，然后再到注册商服务器
    dns客户端：递归查询。 dns服务端之间：迭代查询。
</aside>

---

### 浏览器DNS缓存
- 查看本地的DNS缓存
    - Chrome浏览器的地址栏中输入about:DNS
- 在chrome下清除DNS缓存方法：
    + 1.用chrome打开：chrome://net-internals/#dns
    + 2.点击上面的“clean host cache”

---
###  操作系统缓存
查找本地HOST文件

Linux  修改/etc/hosts文件

---
### DNS服务器缓存
设置TTL值（Time To Live),DNS记录在DNS服务器上缓存时间

点评DNS管理端  http://idc.webdns.dp/#/dns

--- 
- `dig www.dpfile.com +trace @8.8.8.8`
- `nslookup www.dpfile.com`
- 可视化的DNS路径查询工具：[dnsgraph](https://ip.seveas.net/dnsgraph/)，在线绘制根域名到指定域名的所有可能路径。

---
## HTTP缓存
由Http协议头控制缓存策略


---
### 查看HTTP缓存
chrome://cache/

---
<span style="color:red">chrome://view-http-cache/[url]</span>

```
https://hm.baidu.com/hm.js?b7ce9c914ab525eed1f6ca8109321b00

HTTP/1.1 200 OK
Cache-Control: max-age=0, must-revalidate
Date: Tue, 02 May 2017 10:11:32 GMT
Server: apache
Content-Encoding: gzip
Content-Length: 8616
Content-Type: application/javascript
Etag: 7919f186340663965ff370c4ba469466

00000000: 28 16 00 00 03 47 57 00 2a af 83 0c 1e ad 2e 00  (....GW.*.......
    ...
```
---

### from cache  and  from memory cache
chrome下查看所有的from cache文件：chrome://view-http-cache/
同一页面刷新 from memory cache
Request URL:http://p1.meituan.net/activityback/a1d167b3f8ab862d9f5922efbec683f51805657.jpg
Request Method:GET
Status Code:200 OK (from memory cache)
Remote Address:45.124.124.250:80

新开隐形窗口  from disk cache
Request URL:http://p1.meituan.net/activityback/a1d167b3f8ab862d9f5922efbec683f51805657.jpg
Request Method:GET
Status Code:200 OK (from disk cache)
Remote Address:45.124.124.250:80


Request URL:http://p1.meituan.net/activityback/a1d167b3f8ab862d9f5922efbec683f51805657.jpg
Request Method:GET
Status Code:200 OK
Remote Address:45.124.124.250:80
---

## H5离线缓存
在 Chrome 中，你可以在设置中选择 「清除浏览器数据...」 或访问 chrome://appcache-internals/ 来清除缓存

---
## CDN缓存
<aside class="notes">
    CDN用到的是缓存技术，加速的是网站的静态、公用部分，CDN缓存的key是资源的url。CDN服务器与用户服务器之间的数据同步机制有推送和回源两种，用的比较多的是回源方式。
当请求的url在CDN缓存服务器上找不到或者缓存过期失效时（缓存失效时间可以设置，类似于memcache的缓存时间，过期即失效），CDN服务器会连到公司的服务器上请求资源，
此过程称为回源。
</aside>

---
## 点评静态资源CDN缓存策略
---
### 上海侧的CDN资源大致分为3类：
- 前端文件（js,css）,以及部分业务方小图，h5页面
- ugc图片（现在在tx和美团云都有，但是访问路由不同）
- 以前的团购老图等（已经上传到美团云，源站不在上海）

---
### html缓存5分钟，静态资源缓存30天，部分页面不允许缓存
---
### 静态资源CDN各环境域名
- 线上 www.dpfile.com
- beta：s1.51ping.com
- ppe：ppe.dpfile.com

---
|业务 |域名|cname域名|CDN服务商|说明
|:----|:----|:----|
|静态页面|h5.dianping.com|  h5.dianping.com.fast.cdntip.com|腾讯云CDN|code发布的静态页面使用h5.dianping.com
|前端静态资源js/css/icon等|www.dpfile.com|www.dpfile.com.fast.cdntip.com.  |腾讯云CDN|通过code发布系统发布的前端项目静态资源
|UGC图片|qcloud.dpfile.com|200001.image.myqcloud.com|万象、优图、腾讯云CDN|已迁移至腾讯云的图片使用qcloud.dpfile.com
|UGC图片|i1,i2,i3.dpfile.com|i1.dpfile.com.fastcdn.com<br>i2.dpfile.com.cdn20.com<br>i3.dpfile.com.fastcdn.com|网宿、帝联CDN|在点评图片中心的是旧域名i1,i2,i3.dpfile.com
|动态数据<br>动态页面 |  e.dianping.com|ajax请求<br>写在后端项目中的动态页面(如ftl)，后端域名|无
