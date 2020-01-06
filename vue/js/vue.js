(function () {

    var vue = function () {
        this.$em = document.getElementById('app');
        this.$data = {
            name: 'Hello World!'
        };
        this.init();
    };

    vue.prototype.init = function () {
        let currData = this.$data;
        console.log('iiii');
        Object.defineProperty(currData, 'name', {
            get: function (target, key) {
                console.log(target, key);
                return target.key;
            },
            set: function (target, key, value) {
                console.log(target, key, value);
                target.key = value;
            }
        });

        this.render();
        this.initEvent();

    };

    // 数组的监听，使用了 伪装者模式

    vue.prototype.init = function () {
        this.render();
        this.initEvent();
    };

    // event
    vue.prototype.initEvent = function () {
        document.getElementById('btn').addEventListener('click', () => {
            this.$data.name = 'Hello Vue Data!';
            this.render();
        });
    };

    // 渲染dom
    vue.prototype.render = function () {
        this.$em.innerHTML = this.$data.name;
    };

    new vue();

})();
