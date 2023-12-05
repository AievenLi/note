先去node官网下载，node.js
安装完成配置系统环境变量：在命令行运行  npm config set prefix "D:\nodejs\node_global"
                                        npm config set cache "D:\nodejs\node_cache"

进入环境变量对话框，在【系统变量】下新建【NODE_PATH】，输入【D:\Develop\nodejs\node_global\node_modules】，将【用户变量】下的【Path】修改为【D:\Develop\nodejs\node_global】



二.全局安装vue  `npm install  vue -g`
      全局安装vue-cli `npm install -g @vue/cli`
      安装成功后`vue --version`检查是否安装成功
      全局安装vue插件依赖`npm install -g @vue/cli-service-global`





目标：Flutter Go





1.移动端接口改变，，，

2.

//判断是否为手机游览器

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobi|Windows CE|Symbian|Windows Phone|POLARIS|lgtelecom|nokia|SonyEricsson|LG|SAMSUNG|Samsung/i
    .test(navigator.userAgent)) {
    //移动端浏览器  
    AndroidIp('http://58.87.108.109:8084')
} else {
    //PC浏览器  
    let bb = "2222"
    alert(bb)
    console.log(22222)

