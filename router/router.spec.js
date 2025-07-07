import { describe, it, expect, beforeEach } from 'vitest';
import { createRouter, createWebHistory } from 'vue-router';
import router from '.';

import Home from '@/components/home/Home.vue';
import GetAuthorizationUse from '@/components/get-authorization-use/GetAuthorizationUse.vue';
import PrivacyNotice from '@/components/commons/PrivacyNotice.vue';

const DEFINED_ROUTES = [
  { path: '/', component: Home },
  { path: '/get-authorization-use', component: GetAuthorizationUse },
  { path: '/privacy-notice', component: PrivacyNotice },
];

let testRouter;

describe('Router', () => {
  beforeEach(() => {
    testRouter = createRouter({
      history: createWebHistory(),
      routes: router.options.routes,
    });
  });

  it('should have the correct routes', () => {
    const routes = router.options.routes;

    expect(routes).toEqual(DEFINED_ROUTES);
  });

  const testNavigation = async (path) => {
    testRouter.push(path);
    await testRouter.isReady();
    expect(testRouter.currentRoute.value.path).toBe(path);
  };

  it('should navigate to Home route', async () => {
    await testNavigation('/');
  });

  it('should navigate to GetAuthorizationUse route', async () => {
    await testNavigation('/get-authorization-use');
  });

  it('should navigate to PrivacyNotice route', async () => {
    await testNavigation('/privacy-notice');
  });
});