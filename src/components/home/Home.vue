<script setup>
  import RequirementsModal from '../commons/RequirementsModal.vue'
  import FooterVue from '../shared/Footer.vue'
  import HeaderVue from '../shared/Header.vue'
  import { onMounted, onUnmounted } from 'vue'

  onMounted(() => {
    console.log(process.env.APP_NAME)
    // Add class to body for styling
    document.body.classList.add('body-home')

    // Initialize video and buttons
    const playButton = document.querySelector('.video')
    const video = document.querySelector('video')
    const muteButton = document.querySelector('.mute')

    // Play video on click
    playButton.addEventListener('click', () => {
      if (video.paused) {
        video.play()
        playButton.classList.add('playing')
      } else {
        video.pause()
        playButton.classList.remove('playing')
      }
    })

    // Mute/unmute video
    muteButton.addEventListener('click', () => {
      if (video.muted) {
        video.muted = false
        muteButton.classList.remove('muted')
      } else {
        video.muted = true
        muteButton.classList.add('muted')
      }
    })
  })

  onUnmounted(() => {
    // Remove class from body when component is unmounted
    document.body.classList.remove('body-home')
  })
</script>

<template>
  <HeaderVue />

  <!-- Video -->
  <div class="relative">
    <div class="video mx-auto relative playing">
      <video
        class="mx-auto w-100"
        poster="@/assets/images/hecho-en-mexico.png"
        playsinline
        autoplay
        muted
        loop
      >
        <source
          src="@/assets/media/HECHO-EN-MEXICO-VIDEO-LANZAMIENTO.mp4"
          type="video/mp4"
        />
      </video>
      <img
        src="@/assets/images/i-play.svg"
        class="cnt play"
        width="100"
        height="100"
      />
    </div>
    <div class="mute muted">
      <img
        src="@/assets/images/i-audio.svg"
        class="w-100"
        width="100"
        height="100"
      />
    </div>
  </div>

  <img
    src="@/assets/images/down-arrow.svg"
    alt=""
    width="100"
    height="100"
    class="arrow-down d-md-block"
  />

  <section class="px-content mt-5">
    <p>
      <a
        class="btns mx-auto"
        href="/get-authorization-use"
      >
        Pide la autorización de uso de Hecho en México
      </a>
    </p>
  </section>

  <FooterVue />

  <!-- Modal -->
  <RequirementsModal />
</template>

<style>
  @import '@/assets/css/home.css';
</style>