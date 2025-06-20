import { createRouter, createWebHistory } from 'vue-router'
import DefaultWeb from '../components/DefaultWeb.vue'
import AvisoPrivacidad from '../components/AvisoPrivacidad.vue'
import Pedir_Autorizacion from '../components/Pedir_Autorizacion.vue'

const routes = [
  { path: '/', name: 'Home', component: DefaultWeb },
  { path: '/AvisoPrivacidad.vue', name: 'AvisoPrivacidad', component: AvisoPrivacidad },
  { path: '/Pedir_Autorizacion.vue', name: 'Pedir_Autorizacion', component: Pedir_Autorizacion }
  // Ruta catch-all para 404:
  //{ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router