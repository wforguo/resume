import Vue from 'vue';
import Router from 'vue-router';

/**
 * @Description 路由的自动加载的实现
 * @Author forguo
 * @Date 2020/1/10
 */
// const Home = resolve => {
//     require.ensure(['@/views/Home'], () => {
//         resolve(require('@/views/Home'))
//     }, 'Home')
// }
// const About = resolve => {
//     require.ensure(['@/views/About'], () => {
//         resolve(require('@/views/About'))
//     }, 'About')
// }

let routes = [
//     {
//     path: '/',
//     name: 'Home',
//     component: Home,
// }, {
//     path: '/About',
//     name: 'About',
//     component: About,
// }
];

// 通过require.context函数获取一个特定的上下文
/**
 * 要搜索的文件夹目录
 * 搜索它的子目录，
 * 匹配文件的正则表达式。
 */

// require.context(
//   directory: String, 要搜索的文件夹目录
//   includeSubdirs: Boolean /* optional, default true */, 搜索它的子目录
//   filter: RegExp /* optional, default /^\.\/.*$/, any file */, 匹配文件的正则表达式
//   mode: String  /* optional, 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once', default 'sync' */
// )

let views = require.context('../views/', true, /\.vue$/);

// 导出的方法有 3 个属性： resolve, keys, id。
// - resolve 是一个函数，它返回请求被解析后得到的模块 id。
// - keys 也是一个函数，它返回一个数组，由所有可能被上下文模块处理的请求组成。
// - id 是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到

// 这里只用到 keys，返回搜索到的数组

views.keys().forEach((key) => {
    let routerName = views(key).default.name;
    routes.push({
        path: routerName === 'Home' ? '/' : `/${routerName}`,
        title: routerName,
        name: routerName,
        component: views(key).default
    });
});

// console.log(routes);

Vue.use(Router);

export default new Router({
    routes
});
