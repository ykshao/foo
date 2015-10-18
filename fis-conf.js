
// 项目名（必须设置）
fis.config.set('name', 'foo');
fis.config.set('version', '0.0.1');

// scrat.js框架开启localstorage缓存
fis.config.set('framework.cache', true);

//设置前端框架是否开启静态资源combo合并
fis.config.set('framework.combo', true);
fis.config.set('framework.comboPattern', '/combo??%s');