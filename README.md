# study-webpack

# webpack 性能优化
* 开发环境性能优化
* 生产环境性能优化

## 开发环境性能优化
* 优化打包构建速度
  - HMR 热模块替换

* 优化代码调试
  - source-map

## 生产环境性能优化
* 优化打包构建速度
  - oneOf
  - babel缓存
  - 多进程打包 (开启进程，进程通信有代价)
  - externals （忽略某模块打包）
  - dll (第三方库分别打包)

* 优化代码运行的性能
  - 缓存(hash-chunkhash-contenthash)
  - tree-shaking 树摇(剔除无用的代码) <-- es6 production
  - code split 代码分割
  - 懒加载 / 预加载（浏览器资源空闲时加载，兼容性问题严重）
  - PWA （socketworker 离线访问)