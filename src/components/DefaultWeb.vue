<template>
  <link rel="stylesheet" href="/assets/css/styles.css">
	<link rel="stylesheet" href="/assets/css/index.css">
  <header class="px-content cnt-h w-100">
		<div class="nav mx-auto relative">
			<a class="logo flex" href="/">
				<img src="/assets/images/Hecho_En_Mexico_2025_blanco.svg" alt="" width="200" height="200" class="w-100">
			</a>
		</div>
	</header>
  <div class="relative">
		<div class="video mx-auto relative playing">
			<video class="mx-auto w-100" poster="/assets/images/hecho-en-mexico.png" playsinline autoplay muted loop >
				<source src="assets/images/HECHO-EN-MEXICO-VIDEO-LANZAMIENTO.mp4" type="video/mp4">
			</video>
			<img src="/assets/images/i-play.svg" class="cnt play" width="100" height="100">
		</div>
		<div class="mute muted">
			<img src="/assets/images/i-audio.svg" class="w-100" width="100" height="100">
		</div>
	</div>
  <img src="/assets/images/down-arrow.svg" alt="" width="100" height="100" class="arrow-down d-md-block">

  <section class="px-content">
		<p><a class="btns mx-auto" href="Pedir_Autorizacion.vue">Pide la autorización de
				uso de Hecho en México</a></p>
	</section>
  <footer class="flex flex-center">
		<p class="clr-white"><a href="AvisoPrivacidad.vue"><b>Aviso de privacidad</b></a></p>
	</footer>
  <div id="homeModal" class="modal">
		<!-- Modal content -->
		<div class="modal-content">
			<span class="close">&times;</span>
			<!-- <img src="/assets/images/hem_info.png" alt="hem_info"> -->
			<div class="row">
				<div class="col-8 m-auto">
					<span class="main-title">Marcas de Certificación HECHO EN MÉXICO y MADE IN MEXICO</span>
				</div>
				<div class="col-4">
					<img src="/assets/images/logo_eco.png" alt="hem_info">
				</div>
			</div>
			<p class="secondary-title">Requisitos</p>
			<p>La Secretaría de Economía, a través de la Unidad de Normatividad, Competitividad y Competencia atiende las solicitudes de autorización de las marcas de Certificación HECHO EN MÉXICO y MADE IN MEXICO.    Los requisitos, deben ser enviados al correo electrónico <a class="mail-link" href="mailto:hechoenmexico@economia.gob.mx">hechoenmexico@economia.gob.mx</a>: </p>
			<br>
			<div class="row">
				<div class="col-5-offset px-content pr-content">
					<span><b>Si eres Persona Física:</b></span>
					<ol>
						<li>
							Identificación Oficial Vigente (INE, Pasaporte o Cedula Profesional).
						</li>
						<li>
							Constancia de situación fiscal.
						</li>
						<li>
							Documentación que acredite que el producto es fabricado, manufacturado y ensamblado con insumos de origen nacional y/o que su manufactura se desarrolle en México.
						</li>
						<li>
							Acreditar que en el proceso de manufactura o fabricación implementa acciones afirmativas respecto del cumplimiento de uno o más de los Objetivos de Desarrollo Sostenible (ODS) de la Agenda 2030. Los ODS pueden ser consultados en el siguiente link: <a class="mail-link" href="https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/" target="_blank">https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/</a>
						</li>
					</ol>
				</div>
				<div class="col-1">
					<img src="/assets/images/hem_red.jpg" alt="hem_info">
					<img src="/assets/images/hem_blck.jpg" alt="hem_info">
				</div>
				<div class="col-5-offset px-content pr-content">
					<span><b>Si eres Persona Moral (Empresas):</b></span>
					<ol>
						<li>
							Acta Constitutiva de la empresa y documento que otorgue poder al representante/apoderado de la empresa.
						</li>
						<li>
							Constancia de Situación Fiscal de la empresa.
						</li>
						<li>
							Identificación oficial vigente del representante/apoderado de la empresa.
						</li>
						<li>
							Documentación que acredite que el producto es fabricado, manufacturado y ensamblado con insumos de origen nacional y/o que su manufactura se desarrolle en México.
						</li>
						<li>
							Acreditar que en el proceso de manufactura o fabricación implementa acciones afirmativas respecto del cumplimiento de uno o más de los Objetivos de Desarrollo Sostenible (ODS) de la Agenda 2030. Los ODS pueden ser consultados en el siguiente link: <a class="mail-link" href="https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/" target="_blank">https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/</a>
						</li>
					</ol>
				</div>
			</div>
			<div class="row">
				<br>
				<p>
					Agradeceremos que ante cualquier duda del trámite se comunique al número telefónico 55 5729 9100 Extensiones 13008, 13012, 13218, 13005, 33515, 13003, 13244 o 44810 y adicional quedamos atentos a que nos comparta un número de contacto para brindarle una eficaz atención.
				</p>
			</div>
		</div>

	</div>
</template>

<script>
import * as index from '../assets/js/index.js'

export default {
  methods: {
    playVideo(){
      this.$refs.player.play();
    }
  },
  name: 'DefaultWeb',
  data () {
        return {
          index,
    msg: ''
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
