<template>
    <div class="home">
        <p>Footer</p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Home',
        props: {},
        data() {
            return {
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
            console.log('index load');
        },
        created() {
            console.log('index created');
        },
        methods: {
            getList() {
                axios.get('https://www.forguo.com/api/express/list?pageNum=1&pageSize=10').then(res => {
                    console.log(res);
                });
            },
            setAge() {
                this.$router.push({
                    name: 'About'
                });
            }
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
