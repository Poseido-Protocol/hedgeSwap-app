module.exports = {

  lintOnSave: false,

  publicPath: './',

  pages: {
    index: {
      // 页面入口
      entry: "examples/main.js",
      // 模板来源
      template: "pubilc/index.html",
      // 输出文件名
      filename: "index.html"
    }
  },

  devServer: {
    //跨域
    port: 9537, // 端口号
    open: true, //配置自动启动浏览器
    // proxy: {
    //   // 配置跨域处理 可以设置多个
    //   '/basedata': {
    //     target: 'http://192.168.188.78:8190/basedata',
    //     ws: true,
    //     secure: true, // false为http访问，true为https访问
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/basedata': ''
    //     }
    //   }
    // }
  },

  productionSourceMap: false,

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1aa2c2',
          'layout-color': '#3666f7'
        },
        javascriptEnabled: true
      }
      // stylus: {
      //   'resolve url': true,
      //   'import': [
      //     './src/theme'
      //   ]
      // }
    }
  }
};
