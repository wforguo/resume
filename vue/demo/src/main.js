import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import List from './components/List';
import Detail from './components/Detail';
const routes = [
    { path: '/', component: List },
    { path: '/list', component: List },
    { path: '/detail',  component: Detail}
];

Vue.config.productionTip = false;
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
