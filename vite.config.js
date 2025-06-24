import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  // Cargar variables de entorno del archivo .env
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue()
      //vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    define: {
      // Exponer solo variables específicas necesarias en el frontend
      'process.env.APP_NAME': JSON.stringify(env.APP_NAME),
      'process.env.API_BASE_URL': JSON.stringify(env.API_BASE_URL),
      'process.env.RECAPTCHA_SITE_KEY': JSON.stringify(env.RECAPTCHA_SITE_KEY)
    }
  }
})