<script setup>
import { ref, onMounted } from 'vue'

const modal = ref(null)
const closeModal = () => {
  modal.value.style.display = 'none'
}
const openModal = () => {
  modal.value.style.display = 'block'
}
onMounted(() => {
  modal.value = document.getElementById('homeModal')
  const span = document.getElementsByClassName('close')[0]
  if (modal.value) {
    openModal()
  }
  span.onclick = closeModal
  window.onclick = (event) => {
    if (event.target === modal.value) {
      closeModal()
    }
  }
})
</script>

<template>
  <div id="homeModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="row">
        <div class="col-8 m-auto">
          <span class="main-title">
            Marcas de Certificación HECHO EN MÉXICO y MADE IN MEXICO
          </span>
        </div>
        <div class="col-4">
          <img src="@/assets/images/logo_eco.png" alt="hem_info" />
        </div>
      </div>
      <p class="secondary-title">Requisitos</p>
      <p>
        La Secretaría de Economía, a través de la Unidad de Normatividad,
        Competitividad y Competencia atiende las solicitudes de autorización de
        las marcas de Certificación HECHO EN MÉXICO y MADE IN MEXICO. Los
        requisitos, deben ser enviados al correo electrónico
        <a class="mail-link" href="mailto:hechoenmexico@economia.gob.mx">
          hechoenmexico@economia.gob.mx
        </a>:
      </p>
      <br />
      <div class="row">
        <div class="col-5-offset px-content pr-content">
          <span><b>Si eres Persona Física:</b></span>
          <ol>
            <li>
              Identificación Oficial Vigente (INE, Pasaporte o Cedula
              Profesional).
            </li>
            <li>Constancia de situación fiscal.</li>
            <li>
              Documentación que acredite que el producto es fabricado,
              manufacturado y ensamblado con insumos de origen nacional y/o que
              su manufactura se desarrolle en México.
            </li>
            <li>
              Acreditar que en el proceso de manufactura o fabricación
              implementa acciones afirmativas respecto del cumplimiento de uno o
              más de los Objetivos de Desarrollo Sostenible (ODS) de la Agenda
              2030. Los ODS pueden ser consultados en el siguiente link:
              <a
                class="mail-link"
                href="https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/"
                target="_blank"
              >
                https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/
              </a>
            </li>
          </ol>
        </div>
        <div class="col-1">
          <img src="@/assets/images/hem_red.jpg" alt="hem_info" />
          <img src="@/assets/images/hem_blck.jpg" alt="hem_info" />
        </div>
        <div class="col-5-offset px-content pr-content">
          <span><b>Si eres Persona Moral (Empresas):</b></span>
          <ol>
            <li>
              Acta Constitutiva de la empresa y documento que otorgue poder al
              representante/apoderado de la empresa.
            </li>
            <li>Constancia de Situación Fiscal de la empresa.</li>
            <li>
              Identificación oficial vigente del representante/apoderado de la
              empresa.
            </li>
            <li>
              Documentación que acredite que el producto es fabricado,
              manufacturado y ensamblado con insumos de origen nacional y/o que
              su manufactura se desarrolle en México.
            </li>
            <li>
              Acreditar que en el proceso de manufactura o fabricación
              implementa acciones afirmativas respecto del cumplimiento de uno o
              más de los Objetivos de Desarrollo Sostenible (ODS) de la Agenda
              2030. Los ODS pueden ser consultados en el siguiente link:
              <a
                class="mail-link"
                href="https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/"
                target="_blank">
                https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/
                </a>
            </li>
          </ol>
        </div>
      </div>
      <div class="row">
        <br />
        <p>
          Agradeceremos que ante cualquier duda del trámite se comunique al
          número telefónico 55 5729 9100 Extensiones 13008, 13012, 13218, 13005,
          33515, 13003, 13244 o 44810 y adicional quedamos atentos a que nos
          comparta un número de contacto para brindarle una eficaz atención.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
/** */
</style>