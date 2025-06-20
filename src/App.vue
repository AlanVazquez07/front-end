<template>
 <div>
    <nav>
      <router-link to="DefaultWeb"></router-link>
      <router-link to="Pedir_Autorizacion"></router-link>
      <router-link to="AvisoPrivacidad"></router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
//import DefaultWeb from './components/DefaultWeb.vue'  <DefaultWeb />
//import Pedir_Autorizacion from './components/Pedir_Autorizacion.vue'
//import AvisoPrivacidad from './components/AvisoPrivacidad.vue'

export default {
  methods: {
    playVideo(){
      this.$refs.player.play();
    }
  },
  name: 'App',
  components: {
   //DefaultWeb,
    //Pedir_Autorizacion
    //AvisoPrivacidad
  }
}
</script>

<style>

</style>
