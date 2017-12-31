# element-ui

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


插件cssrem

vue+webpack项目中px2rem vue-loader.conf.js文件

npm i --save postcss-plugin-px2rem

```

var px2rem = require('postcss-plugin-px2rem');
    module.exports = {
        ...
  postcss: function () {
    return [px2rem({
      rootValue: 75
    })];
  }
}
```