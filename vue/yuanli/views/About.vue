<template>
    <div class="home">
        <div class="upload-btn">
            <p>About</p>
        </div>

        <div class="list">
            <div class="item" v-for="(item, index) in list" :key="index" @click="setAge(index)">
                <span class="name">About => {{item.name}}</span>
                <span class="gender">{{item.name}}</span>
                <span class="age" v-if="item.age">{{item.age}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        props: {},
        data() {
            return {
                items: ['a', 'b', 'c'],
                list: [
                    {
                        name: 'www',
                        gender: 'man',
                    },
                    {
                        name: 'what',
                        gender: 'woman'
                    },
                    {
                        name: 'who',
                        gender: 'woman'
                    },
                ]
            }
        },
        mounted() {
            console.log('about load');
        },
        created() {
            console.log('about created');
        },
        methods: {
            setAge(index) {
                this.list[index].name = 2019 + index;
                // this.$set(this.list[index], 'age', 2019 + index)
                // this.$router.push({
                //     name: 'Home'
                // });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
        color: #42b983;
    }

    .upload-btn {
        width: 200px;
        margin: 0 auto;
        height: 40px;
        line-height: 40px;
        background: #999;
        border-radius: 5px;
        position: relative;
        cursor: pointer;
        input {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            left: 0;
            top: 0;
        }
    }

    .item {
        width: 100%;
        height: 50px;
        line-height: 50px;
        box-shadow: 3px 2px 9px 0 #eee;
        margin-bottom: 30px;
        span {
            margin-right: 10px;
        }
    }
</style>
