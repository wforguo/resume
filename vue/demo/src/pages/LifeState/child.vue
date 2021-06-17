<template>

    <div class="child">
        <br />
        <h3>我是 child 组件</h3>
        <br />
        <hr />

        <button class="button primary">按钮</button>

    </div>

</template>

<script>
export default {
    data() {
        return {
            name: 'lifeState',
            visible: false,
        }
    },
    beforeCreate() {
        console.log('child', 'beforeCreate');
    },
    created() {
        console.log('child', 'created');
    },
    beforeMount() {
        console.log('child', 'beforeMount');
    },
    mounted() {
        console.log('child', 'mounted');
    },
    methods: {

    }
}

</script>
