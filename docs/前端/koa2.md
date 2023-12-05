````
 Mount('/data_analysis', Static(path.join(__dirname, './gasOil/data_analysis_3_1.html'))),// 数据分析  这样写只能访问文件夹，不能访问文件
````

###### 可以访问文件和文件夹

````
app.use(Static([
  {
    dir: 'gasOil/index.html',    //静态资源目录对于相对入口文件index.js的路径
    router: 'index'   //路由命名   路由长度 =2
  }, {
    dir: 'gasOil/data_analysis.html',   //静态资源目录对于相对入口文件index.js的路径
    router: 'data_analysis'    //路由命名  路由长度 =2
  }
]))
````

###### 列子

`````js
import koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import Static from 'koa-static-router'
import router from './routes/routes'
import proxy from 'koa-server-http-proxy'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'
import superagent from 'superagent'
import Mount from 'koa-mount'
import colors from 'colors'
const app = new koa()

const isDevMode = process.env.NODE_ENV === 'production' ? false : true

/*
 *@description:转发代理模块
 *@author: 李海文
 *@date: 2022-05-17 10:24:49
 *@version: V1.0.0
*/
// const proxyTable = {
//   // '/jsn': {
//   //   target: 'http://jsonplaceholder.typicode.com',
//   //   pathRewrite: { '/json': '' },
//   //   changeOrigin: true
//   // },
//   // '/api': {
//   //   target: 'https://news-at.zhihu.com',
//   //   pathRewrite: { '^/api': 'api/4/' },
//   //   changeOrigin: true
//   // }
// }
// Object.keys(proxyTable).forEach((context) => {
//   let options = proxyTable[context]
//   app.use(proxy(context, options))
// })

/**
 * 使用koa-compose 集成中间件
 */
const middleware = compose([
  koaBody(),

  // 项目路由
  // Mount('/indexx', Static('../gasOil/index.html')),//首页
  // Mount('/data_analysis', Static(path.join(__dirname, './gasOil/data_analysis_3_1.html'))),// 数据分析
  // Mount('/fault_diagnosis', Static(path.join(__dirname, './static2'))),//故障诊断
  // Mount('/key_data', Static(path.join(__dirname, './static1'))),//关键数据
  // Mount('/real_time_monitor', Static(path.join(__dirname, './static3'))),//实时监测
  // Mount('/report_generation', Static(path.join(__dirname, './static3'))),//报表生成
  // Mount('/Report', Static(path.join(__dirname, './static3'))),//报表


  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet(),
])
if (!isDevMode) {
  app.use(compress())
}
// app.use(Static(path.join(__dirname, '../src'), '/index'), { defer: true })
// app.use(Static(path.join(__dirname, '../src')), { defer: true })

//多个路由
app.use(Static([
  {
    dir: 'gasOil/index.html',    //静态资源目录对于相对入口文件index.js的路径
    router: 'index'   //路由命名   路由长度 =2
  }, {
    dir: 'gasOil/data_analysis.html',   //静态资源目录对于相对入口文件index.js的路径
    router: 'data_analysis'    //路由命名  路由长度 =2
  }
]))
app.use(middleware)
app.use(router())
app.listen(3000)
let url = '浏览器地址：http://localhost:3000'
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
console.log("==================================".info);
console.log(url.warn)

`````

