/**
 * @Description: 入口文件
 * @author: forguo
 * @date: 2020/9/3
*/

import _ from 'lodash';

function component() {

    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'Webpack0'], '');
    return element;
}

document.body.appendChild(component());
