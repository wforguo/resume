// 写一个函数，输入值是element id，打印是这个元素及其子元素的 tag#id.class
// 例子
// <div id="test" class="mod-test">
//  <div class="child">
//    <p class="content">Hello world</p>
//    <p>testing</p>
//  </div>
//  <div class="sec-child"></div>
// </div>
// function traverse(id){ ... }
//
// traverse('test')
//
// div#test.mod-test
// div.child
// p.content
// p
// div.sec-child

const traverse = function (id) {
    let $parent = document.getElementById(id);
    let parClassName = $parent.getAttribute('class');
    let parTagName = $parent.tagName;
    let $children = $parent.children;

    if (!$children || $children.length < 0) {
        console.log(parTagName + '#' + id + '.' + parClassName);
    }

    for (let i = 0; i < $children.length; i++) {
        let tagName = $children[i].tagName;
        let className = $children[i].getAttribute('class');
        let idName = $children[i].getAttribute('id');
        console.log(tagName + '#' + idName + '.' + className);
        traverse(idName);
    }
}
