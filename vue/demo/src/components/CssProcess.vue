<template>
    <div class="process">
        <div class="item" v-for="item in 20" :key="item">
            {{item}}
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [
                    1,2,3,4,5,6,7,8,9,10,11
                ]
            }
        },
        mounted() {
        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.process {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
.item {
    width: 100%;
    height: 200px;
    text-align: center;
    line-height: 200px;
    font-size: 32px;
    font-weight: bold;
}
</style>
