// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LogIn from '../components/LogIn.vue';
import TestNewpage from '../components/new.vue';
import FunctionPage from '../components/Function.vue';
import MainPage from '../components/main.vue';
import Forget from '../components/Forget.vue'

const routes = [
  { path: '/', component: LogIn },
  { path: '/new', component: TestNewpage },
  { path: '/function', component: FunctionPage } ,
  { path: '/main', component: MainPage } ,
  { path: '/forget', component: Forget } ,
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
