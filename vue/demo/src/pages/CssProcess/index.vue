<template>
    <div class="process">
        <div v-for="item in 20" :key="item" class="item">
            {{ item }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'CssProcess',
    data() {
        return {
            list: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
            ]
        }
    },
    mounted() {
    },
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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
