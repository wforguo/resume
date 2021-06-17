<template>

    <div class="home">
        <h2 class="home-title">所有的路由</h2>
        <div v-for="(item, index) in routers" :key="index" class="router-item">
            <Cell :title="item.title" is-link :to="item.path" />
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex';
import { Cell } from 'vant';

export default {
    name: "Home",
    data() {
        return {
        }
    },
    computed: {
        ...mapState('router', [
            'routers'
        ])
    },
    components: {
        Cell
    }
}
</script>

<style scoped lang="scss">
.home {
    overflow: hidden;
    .home-title {
        margin: 15px 0 30px;
    }
    .router-item {
        margin: 15px 0;
        font-size: 15px;
        .router-name {
            margin-right: 12px;
            font-weight: bold;
        }
    }
}

</style>
