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
Bug需要修复：
1. 播放加载时有闪烁问题？ 
2. 播放器正在播放时点击同一个按钮如何重置当前歌曲？（网易云音乐效果） √

### 界面和功能展示
待补充