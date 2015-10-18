// 排除源码目录下的node_modules目录，不对其进行构建
fis.config.set('project.exclude', 'node_modules/**');

// 利用package.json文件定义项目名和版本
var meta = require('./package.json');
fis.config.set('name', meta.name);
fis.config.set('version', meta.version);

// 对md、tpl后缀的文件指定用fis-optimizer-html-minifier插件进行压缩
fis.config.set('modules.optimizer.md', 'html-minifier');
fis.config.set('modules.optimizer.tpl', 'html-minifier');

// scrat.js框架开启localstorage缓存
fis.config.set('framework.cache', true);
// 静态资源加载路径模式
fis.config.set('framework.urlPattern', '/public/c/%s');

//设置url前缀
fis.config.set('urlPrefix', '/public');