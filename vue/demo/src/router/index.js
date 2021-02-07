import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import List from './../components/List';
import Detail from './../components/Detail';
import Request from './../components/Request';
import CssProcess from "@/components/CssProcess";
const routes = [
    { path: '/', component: List },
    { path: '/list', component: List },
    { path: '/detail',  component: Detail},
    { path: '/request',  component: Request},
    { path: '/process',  component: CssProcess},
];

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

export default router;
