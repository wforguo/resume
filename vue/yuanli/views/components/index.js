/**
 * @Description 自动化加载组件的实现方式
 * @Author forguo
 * @Date 2020/1/10
 */

const files = require.context('./', false, /\.vue$/); //引入当前路径下所有的vue组件

let compenents = {};

files.keys().forEach((key) => {
    compenents[files(key).default.name] = files(key).default;
});

console.log(compenents);

export default compenents;
