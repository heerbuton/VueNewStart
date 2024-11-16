// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LogIn from '../components/LogIn.vue';
import TestNewpage from '../components/new.vue';
import Forget from '../components/Forget.vue';
import MainPage from '../components/main.vue'

const routes = [
  { path: '/', component: LogIn },
  { path: '/new', component: TestNewpage },
  { path: '/forget', component: Forget } ,
  { path: '/main', component: MainPage } ,
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
