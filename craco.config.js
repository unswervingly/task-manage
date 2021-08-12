// 安装 yarn add @craco/craco
// 要在脚手架package.json 里面 react-scripts 改为 craco  "eject"不改

// 在根目录下创建craco.config.js 文件里面配置需要的
// 配置路径别名 @ 相当于 src

const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src"),
        }
    }
}