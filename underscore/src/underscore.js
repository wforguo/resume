/**
 * @author: forguo
 * @time: 2021/7/15 21:39
 * @description: underscore
 */

(function (root) {

    /**
     * @author: forguo
     * @time: 2021/7/15 22:13
     * @description: underscore构造函数
     */
    var _ = function (object) {
        if (object instanceof  _) {
            return object;
        }
        if (!(this instanceof  _)) {
            return new _(object);
        }
        this._wrapped = object;
    };

    /**
     * @author: forguo
     * @time: 2021/7/15 21:59
     * @description: 开启链式调用
     */
    _.prototype.chain = function (object) {
        var instance = _(object);
        instance._chain = true;
        return instance;
    }

    /**
     * @author: forguo
     * @time: 2021/7/15 21:59
     * @description: 数组去重
     */
    _.unique = function () {

    }

    function flatten (array, shallow) {
        var res = [];
        var index = 0;
        for (var i = 0; i < array.length;i++) {
            var value = array[i];
            if (value instanceof Array) {
                if (!shallow) {
                    value = flatten(value, shallow);
                    console.log(value);
                }
                var j = 0,
                    length = value.length;
                res.length += length;

                while (j < length) {
                    res[index ++] = value[j++]
                }
            } else {
                res[index++] = value;
            }
        }
        return res;
    }

    /**
     * @desc 摊平数组
     * @param array
     * @param shallow true为浅摊平，默认为false，也就是深摊平
     * @return {[]}
     * @private
     */
    _._flatten = function (array, shallow) {
        return flatten(array, shallow);
    };

    root._ = _;

})(window);
