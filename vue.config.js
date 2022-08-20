const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  devServer:{
    proxy:{
'/api':{

  target:'http://gmall-h5-api.atguigu.cn'
},
      'api-docs':{
        target:'http://39.100.95.147:1404/v2',
          // pathRewrite:{'^/api-docs':''},


      }

    }

  }
})
