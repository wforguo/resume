<template>
    <div class="list">
        <p>详情</p>
        <h2>详情</h2>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        data() {
            return {
            }
        },
        mounted() {
            console.log('mounted')
        },
        activated() {
            console.log('activated')
        },
        methods: {
            check(index) {
                // this.list[index].count++;
                // this.list[index].price = index + 100;
                // 不能直接去修改数组的某个项，或者直接删除、添加对象的属性，需要借助$set去实现
                // 直接修改，视图是不会更新的
                // this.$set(arrayList, index, value)l
                // this.$set(object, key, value);
                this.$set(this.list[index], 'price', index + Math.random());
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
    }
    .add-btn {
        cursor: pointer;
        color: #fff;
        background: #000;
        border-radius: 6px;
        padding: 6px 10px;
        font-size: 14px;
        margin-left: 5px;
    }
</style>
