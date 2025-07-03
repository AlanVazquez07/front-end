<script setup>
import FooterVue from '../shared/Footer.vue'
import HeaderVue from '../shared/Header.vue'
import AuthorizationUseForm from './partials/AuthorizationUseForm.vue'
import { onMounted, ref } from 'vue'

// Cargar reCAPTCHA
const recaptchaLoaded = ref(false)
const loadRecaptcha = () => {
  const siteKey = process.env.RECAPTCHA_SITE_KEY;
  const script = document.createElement('script')
  script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
  script.async = true
  script.defer = true
  script.onload = () => {
    recaptchaLoaded.value = true
  }
  document.head.appendChild(script)
}

onMounted(() => {
  // Recaptcha initialization
  loadRecaptcha()
  // Initialize video and buttons
  const playButton = document.querySelector('.video')
  const video = document.querySelector('video')
  const muteButton = document.querySelector('.mute')
  playButton.classList.add('playing')

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
</script>

<template>
  <HeaderVue />

  <!-- Video -->
  <div class="relative flex video-content">
    <div class="video relative flex">
      <video
        class="mx-auto w-100"
        poster="@/assets/images/hecho-en-mexico.png"
        playsinline
        autoplay
        muted
        loop
      >
        <track
          src="@/assets/media/subtitles-es.vtt"
          kind="subtitles"
          srclang="es"
          label="Spanish"
        />
        <source src="@/assets/media/hecho-en-mexico-v1.mp4" type="video/mp4" />
      </video>
      <img
        src="@/assets/images/i-play.svg"
        class="cnt play"
        width="100"
        height="100"
        alt="Play/Pause"
      />
    </div>
    <div class="mute muted">
      <img
        src="@/assets/images/i-audio.svg"
        class="w-100"
        width="100"
        height="100"
        alt="Mute/Unmute"
      />
    </div>
    <!-- Formulario -->
    <AuthorizationUseForm
    :recaptchaLoaded="recaptchaLoaded"
    />
  </div>

  <!-- Info -->
  <div class="px-content mb-5">
    <section class="text-content mx-auto">
      <img
        src="@/assets/images/Hecho_En_Mexico_2025.svg"
        alt="Hecho en México"
        width="250"
        height="250"
        class="w-100 logo"
      />
      <h2>
        Artículo 5. Requisitos para obtener la autorización de uso de las marcas
        de certificación HECHO EN MÉXICO y MADE IN MEXICO.
      </h2>
      <br />
      <article>
        <h3>Requisitos de Forma:</h3>
        <br />
        <p>
          Sólo podrán ser autorizadas para usar las marcas de certificación
          <b>HECHO EN MÉXICO</b> y <b>MADE IN MÉXICO</b>, aquellas personas
          físicas o morales que acrediten que sus productos cumplen con:
        </p>
        <br />
        <ul>
          <li>
            Tratándose de personas físicas: Identificación oficial vigente (INE,
            pasaporte o cédula profesional);
          </li>
          <li>Constancia de situación fiscal, y</li>
          <li>
            Tratándose de personas morales, además del requisito establecido en
            la fracción anterior: Acta constitutiva y documento que acredite la
            representación de su representante legal o apoderado.
          </li>
        </ul>
      </article>
      <br /><br />
      <article>
        <h3>Requisitos de fondo:</h3>
        <br />
        <p>
          La solicitud de autorización de uso de las marcas de certificación
          <b>HECHO EN MÉXICO</b> y <b>MADE IN MÉXICO</b> debe ser presentada
          ante la Secretaría de Economía cuando se trate de productos que
          cumplan con lo siguiente:
        </p>
        <br />
        <ul>
          <li>
            Que sean fabricados, manufacturados o ensamblados con insumos de
            origen nacional en su totalidad y/o que su manufactura se desarrolle
            en México, sin importar el origen de los insumos, y
          </li>
          <li>
            Que los solicitantes acrediten fehacientemente que, en el proceso de
            manufactura o fabricación, implementan acciones afirmativas respecto
            del cumplimiento con uno o más de los Objetivos de Desarrollo
            Sostenible de la Agenda 2030 sobre el Desarrollo Sostenible.
          </li>
        </ul>
      </article>
    </section>
  </div>

  <FooterVue />
</template>

<style>
@import '@/assets/css/form.css';
</style>