import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/components/home/Home.vue'
import GetAuthorizationUse from '@/components/get-authorization-use/GetAuthorizationUse.vue';
import PrivacyNotice from '@/components/commons/PrivacyNotice.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/get-authorization-use', component: GetAuthorizationUse },
  { path: '/privacy-notice', component: PrivacyNotice },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;