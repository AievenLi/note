#### 安装使用

安装wepy命令行

```
npm install @wepy/cli@next -g
```

生成开发示例

```
wepy init standard myproject
```

#### 安装sass

````
npm i node-sass
````

安装wepy-compiler-sass插件

````
npm install wepy-compiler-sass --save-dev
````

配置wepy.config.js

````
module.exports = {
    "compilers": {
        sass: {
            'outputStyle': 'compressed'
        }
    }
};
````