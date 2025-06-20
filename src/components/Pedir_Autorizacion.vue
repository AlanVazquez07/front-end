<template>
  <link rel="stylesheet" href="/assets/css/styles.css">
	<link rel="stylesheet" href="/assets/css/form.css">
  
  <header class="px-content">
        <div class="nav mx-auto relative">
            <a class="logo flex" href="/">
                <img src="/assets/images/Hecho_En_Mexico_2025_blanco.svg" alt="" width="200" height="200"
                    class="w-100" />
            </a>
        </div>
    </header>

    <div class="relative flex video-content">
        <div class="video relative flex">
            <video class="mx-auto w-100" poster="/assets/images/hecho-en-mexico.png" playsinline autoplay muted loop>
                <source src="/assets/images/hecho-en-mexico-v1.mp4" type="video/mp4" />
            </video>
            <div class="mute muted">
                <img src="/assets/images/i-audio.svg" class="w-100" width="100" height="100" />
            </div>
        </div>
        <div class="form relative flex flex-center w-100">
            <h1 class="text-center mb-16 clr-primary">Pedir autorización <br />de uso de Hecho en México</h1>


            <!-- FORMULARIO -->
            <form id="form" enctype="multipart/form-data" class="w-100">

                <!-- Tipo de persona -->
                <div class="flex mb-16 gap-16">
                    <div class="input-group-radio w-50">
                        <label for="person_type_individual">
                            <input type="radio" name="person_type" checked id="person_type_individual"
                                value="persona-fisica" />
                            Persona Física
                        </label>
                    </div>
                    <div class="input-group-radio w-50">
                        <label for="person_type_company">
                            <input type="radio" name="person_type" id="person_type_company" value="persona-moral" />
                            Persona Moral
                        </label>
                    </div>
                </div>

                <!-- Nombre(s) o razón social -->
                <div class="input-group mb-16 w-100">
                    <label for="names">Nombre(s)</label>
                    <input type="text" id="names" name="names" minlength="3" maxlength="200"
                        pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$" required aria-required="true" />
                </div>

                <!-- Primer Apellido -->
                <div class="input-group mb-16 w-100">
                    <label for="first_last_name">Primer Apellido</label>
                    <input type="text" id="first_last_name" name="first_last_name" minlength="3" maxlength="50"
                        pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$" required aria-required="true" />
                </div>

                <!-- Segundo Apellido -->
                <div class="input-group mb-16 w-100">
                    <label for="second_last_name">Segundo Apellido</label>
                    <input type="text" id="second_last_name" name="second_last_name" maxlength="20"
                        pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$" />
                </div>

                <!-- Representante Legal -->
                <div class="input-group mb-16 w-100">
                    <label for="legal_representative_company">Representante Legal o Apoderado de la empresa</label>
                    <input type="text" id="legal_representative_company" name="legal_representative" minlength="3"
                        maxlength="200" pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$" required
                        aria-required="true" />
                </div>

                <!-- Número de contacto -->
                <div class="input-group mb-16 w-100">
                    <label for="contact_number">Número de contacto</label>
                    <input type="tel" id="contact_number" name="contact_number" pattern="[0-9]{10,15}" minlength="8"
                        maxlength="12" inputmode="numeric" autocomplete="tel" required aria-required="true" />
                </div>

                <!-- Email -->
                <div class="input-group mb-16 w-100">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" minlength="8" maxlength="100" required
                        aria-required="true" />
                </div>


                <!-- Evidencia Producto fabricado en México -->
                <div class="input-group-file mb-16">
                    <label for="evidence_made_in_mexico">
                        Evidencia de que tu producto es fabricado en México
                        <span class="hint">(Ejemplos: Registro sanitario o de funcionamiento del
                            establecimiento ante la autoridad local o estatal, entre
                            otros)</span>
                        <input type="file" name="evidence_made_in_mexico" id="evidence_made_in_mexico_file"
                            accept="image/png,image/jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png,.jpg,.pdf,.doc,.docx"
                            required />
                    </label>
                </div>

                <!-- Evidencia origen insumos -->
                <div class="input-group-file mb-16">
                    <label for="evidence_supplies_origin">
                        Evidencia del origen de los insumos de tu producto
                        <span class="hint">(Ejemplos: Facturas para insumos nacionales; Pedimentos de
                            importación para insumos extranjeros)</span>
                        <input type="file" name="evidence_supplies_origin" id="evidence_supplies_origin_file"
                            accept="image/png,image/jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png,.jpg,.pdf,.doc,.docx"
                            required />
                    </label>
                </div>

                <!-- ODS -->
                <div class="input-group mb-16 w-100">
                    <label for="sustainable_development_actions">
                        Acciones afirmativas respecto al cumplimiento de uno o más
                        Objetivos de Desarrollo Sostenible
                        <span class="hint">
                            <a href="https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/"
                                target="_blank">
                                Consulta más en este enlace
                            </a>
                        </span>
                        <textarea name="sustainable_development_actions" id="sustainable_development_actions" rows="3"
                            required></textarea>
                    </label>
                </div>

                <!-- Acta constitutiva y poder legal de la empresa -->
                <div id="grupo-acta-moral">
                    <div class="input-group-file mb-16">
                        <span id="identification_text">Documento que acredite la representación de su representante
                            legal o apoderado</span>
                        <span class="hint">Se debe incluir el poder del representante legal o apoderado de la empresa,
                            así como su identificación oficial</span>
                        <input type="file" id="identification_file" name="identification_file"
                            accept="image/png,image/jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png,.jpg,.pdf,.doc,.docx"
                            required />
                    </div>
                </div>

                <!-- Constancia fiscal -->
                <div id="grupo-constancia" class="input-group-file mb-16">
                    <label for="tax_certificate">
                        Constancia de situación fiscal <b>(con una vigencia no mayor a tres meses)</b>
                        <input type="file" name="tax_certificate" id="tax_certificate_file"
                            accept="image/png,image/jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png,.jpg,.pdf,.doc,.docx"
                            required />
                    </label>
                </div>

                <!-- Otro documento -->
                <div class="input-group-file mb-16">
                    <label for="other_document">
                        Boceto, muestra, registro fotográfico o documentos que acrediten y
                        permitan identificar el producto(s) y, en su caso, número de
                        registro de su marca registrada ante el IMPI
                        <input type="file" name="other_document" id="other_document_file" accept=".zip,application/zip"
                            required />
                    </label>
                </div>
                <br />

                <!-- Enviar -->
                <button class="btns" type="submit" name="send">Enviar solicitud</button>

                <br />
                <p class="alert"><small>* El peso máximo para los archivos adjuntos es de 20MB y los formatos permitidos
                        son .pdf, .jpg, .doc o .docx</small></p>
                <p class="alert"><small>* Te recomendamos en caso de que sea más de un documento el que quieras
                        adjuntar, generar un archivo comprimido zip y ese archivo sea el que adjuntes al
                        formulario.</small></p>
                <div class="d-none error-server">
                    <br /><br />
                    <p class="msg-error"></p>
                </div>
                <div class="text-center d-none success full cnt flex flex-center px-content">
                    <div>
                        <p>
                            Hemos recibido tu mensaje. <br />
                            El equipo de Hecho en México revisará tu solicitud para la
                            autorización de uso.
                        </p>
                        <br /><br />
                        <a href="/" class="btns mx-auto"><span>Regresar</span></a>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="px-content">
        <section class="text-content mx-auto">
            <img src="/assets/images/Hecho_En_Mexico_2025.svg" alt="Hecho en México" width="250" height="250"
                class="w-100 logo" />
            <h2>
                Artículo 5. Requisitos para obtener la autorización de uso de las
                marcas de certificación HECHO EN MÉXICO y MADE IN MEXICO.
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
                        Tratándose de personas físicas: Identificación oficial vigente
                        (INE, pasaporte o cédula profesional);
                    </li>
                    <li>Constancia de situación fiscal, y</li>
                    <li>
                        Tratándose de personas morales, además del requisito establecido
                        en la fracción anterior: Acta constitutiva y documento que
                        acredite la representación de su representante legal o apoderado.
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
                        origen nacional en su totalidad y/o que su manufactura se
                        desarrolle en México, sin importar el origen de los insumos, y
                    </li>
                    <li>
                        Que los solicitantes acrediten fehacientemente que, en el proceso
                        de manufactura o fabricación, implementan acciones afirmativas
                        respecto del cumplimiento con uno o más de los Objetivos de
                        Desarrollo Sostenible de la Agenda 2030 sobre el Desarrollo
                        Sostenible.
                    </li>
                </ul>
            </article>
        </section>
    </div>
    <footer class="flex flex-center">
		<p class="clr-white"><a href="AvisoPrivacidad.vue"><b>Aviso de privacidad</b></a></p>
	</footer>
</template>

<script>
import * as index from '../assets/js/index.js'
import * as form from '../assets/js/form.js'

export default {
  methods: {
    playVideo(){
      this.$refs.player.play();
    }
  },
  name: 'Pedir_Autorizacion',
  data () {
        return {
          index,
          form,
    msg: ''
  }
}
}
</script>

<style scoped>
.clr-white {
  color: white;
}
.font-bold {
  font-weight: bold;
}
</style>
<style>

</style>