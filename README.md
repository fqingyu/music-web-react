## 网易云音乐项目  

### 项目介绍 & 技术相关  
- 仿网易云搭建使用react搭建的网站，具体功能实现请参照下方界面与功能展示专栏。
- 全局使用函数式组件，利用redux+hooks分别管理公共和内在状态，并引用了immutable作为数据结构，避免状态污染。
- css方面使用了normalize.css对全局进行了配置，组件使用styled-components管理每一个页面的css，防止干扰。
- 大部分组件手写，个别使用了ant-design的相关组件。
- 后端数据源采用了公开的 [网易云音乐API ](https://binaryify.github.io/NeteaseCloudMusicApi/#/ "网易云音乐api")配合vercel搭建。
API地址: [点击这里](https://netease-cloud-music-api-chi-navy.vercel.app/ "点击这里")

### 项目规范
- 文件夹名称统一小写，多个单词以符号(-)连接
- js文件中，import引用先后顺序采用如下逻辑：
  - pacakge相关引用
  - 个人配置相关引用
  - 组件相关引用(包括antd相关组件)
- 函数组件内部代码顺序采用如下逻辑：
  - 组件内部的状态管理代码
  - redux相关的hooks代码
  - 其他组件的hooks代码
  - 其他逻辑代码
  - 返回JSX
- 网络请求采用axios，并进行二次封装，方便统一管理，另一方面后端接口更改时也方便做统一修改
- 所有网络请求统一放在service目录下对应组件名文件下进行统一管理
- 部分暂未找到相关接口的数据统一放在services/local-data进行存储

### 具体功能实现 & 后续计划  
To Do:
1. **歌曲详情页√/歌单页评论列表** 

Bug需要修复：
1. **播放加载时有闪烁问题？ √**  
   开发模式下，为了通过webpack实现热加载，css代码是打包在js代码中的，并动态打到页面上，从而元素重绘引起了闪烁。在生产模式下，css代码会单独打包到独立的文件并置于head标签内，从而不会出现闪烁问题。
2. **播放器正在播放时点击同一个按钮如何重置当前歌曲？（网易云音乐效果） √** 
3. **从后端获取歌曲时暂无法判别歌曲是否可用（版权问题或IP问题），导致部分歌曲添加列表以后无法播放（实际如果有对应标记过滤一下即可）** 
4. **很多可用歌曲由于服务器架在阿里云，播放网易云音乐api下的歌曲容易被403，通常多播放几次即可（本地测试时这个错误不会发生）** 

### 界面和功能展示 
**建议下载在本地使用本项目**
```javasscript
   git clone git@github.com:fqingyu/music-web-react.git // 克隆项目
   yarn install // 安装依赖
   yarn build // 运行项目
```
项目地址： [点击这里](http://47.94.216.140/ "点击这里")  
虽然有在线地址，不过云服务器获取网易云音乐API数据时经常会被403没有权限，本地则不会有这个问题。 
另外，服务器性能有限，有时会导致返回页面速度不够稳定。

### **部分已实现页面的展示**  
#### 1.首页Banner滚动
![banner.gif](https://i.loli.net/2021/08/26/XLUkKGIci7wzeaJ.gif)

#### 2.歌曲播放展示
![play.gif](https://i.loli.net/2021/08/26/sa13ukYTzrSGHEK.gif)
![player.gif](https://i.loli.net/2021/08/26/TLjiy4asIQb5Duh.gif)

#### 3.播放按钮添加歌曲等
![add.gif](https://i.loli.net/2021/08/26/n1oFK9GPfJyYtO5.gif)

#### 4.歌曲详情页
![song-detail.gif](https://i.loli.net/2021/08/26/WStHNXk9MTcgPdG.gif)

#### 5.排行榜页面展示
![ranking.gif](https://i.loli.net/2021/08/26/xXnkTmAqGQg8S9P.gif)

#### 6.歌单页面展示
![songs.gif](https://i.loli.net/2021/08/26/5OVBa8sGUoMZW1F.gif)

#### 7.主播电台展示
![djradio.gif](https://i.loli.net/2021/08/26/v5rE2hyqmbVk8TB.gif)