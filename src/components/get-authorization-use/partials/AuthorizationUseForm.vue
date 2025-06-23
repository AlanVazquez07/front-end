<script setup>
import Loader from '@/components/shared/Loader.vue'
import { ref, reactive } from 'vue'

const props = defineProps({
  recaptchaLoaded: {
    type: Boolean,
    required: true,
  },
})

const personType = ref('persona-fisica')
const formData = reactive({
  // Persona Física
  names: '',
  first_last_name: '',
  second_last_name: '',

  // Persona Moral
  company_name: '',
  legal_representative: '',

  // Datos de contacto
  contact_number: '',
  email: '',

  // Archivos
  evidence_made_in_mexico: null,
  evidence_supplies_origin: null,
  sustainable_development_actions: '',
  identification_file: null,
  tax_certificate: null,
  other_document: null,
})

const errors = reactive({})
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const validateField = (field, value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!value || value.trim() === '') {
    errors[field] = 'Este campo es requerido'
    return false
  }

  switch (field) {
    case 'email':
      if (!emailRegex.test(value)) {
        errors[field] = 'Ingresa un email válido'
        return false
      }
      break
    case 'contact_number':
      if (!/^\d{8,12}$/.test(value)) {
        errors[field] = 'Ingresa un número válido (8-12 dígitos)'
        return false
      }
      break
    case 'names':
    case 'first_last_name':
    case 'second_last_name':
    case 'company_name':
    case 'legal_representative':
      if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)) {
        errors[field] = 'Solo se permiten letras y espacios'
        return false
      }
      break
  }

  delete errors[field]
  return true
}

const handleFileChange = (event, field) => {
  const file = event.target.files[0]
  if (file) {
    // Validar tamaño máximo (20MB)
    if (file.size > 20 * 1024 * 1024) {
      errors[field] = 'El archivo no debe exceder 20MB'
      return
    }

    // Validar extensiones permitidas
    const allowedExtensions = ['.png', '.jpg', '.jpeg', '.pdf', '.doc', '.docx', '.zip']
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase()

    if (!allowedExtensions.includes(fileExtension)) {
      errors[field] = 'Formato de archivo no permitido'
      return
    }

    formData[field] = file
    delete errors[field]
  }
}

const validateForm = () => {
  let isValid = true

  // Validar campos según tipo de persona
  if (personType.value === 'persona-fisica') {
    isValid = validateField('names', formData.names) && isValid
    isValid =
      validateField('first_last_name', formData.first_last_name) && isValid
  } else {
    isValid = validateField('company_name', formData.company_name) && isValid
    isValid =
      validateField('legal_representative', formData.legal_representative) &&
      isValid
  }

  // Validar campos comunes
  isValid = validateField('contact_number', formData.contact_number) && isValid
  isValid = validateField('email', formData.email) && isValid
  isValid =
    validateField(
      'sustainable_development_actions',
      formData.sustainable_development_actions
    ) && isValid

  // Validar archivos requeridos
  if (!formData.evidence_made_in_mexico) {
    errors.evidence_made_in_mexico = 'Este archivo es requerido'
    isValid = false
  }

  if (!formData.evidence_supplies_origin) {
    errors.evidence_supplies_origin = 'Este archivo es requerido'
    isValid = false
  }

  if (!formData.identification_file) {
    errors.identification_file = 'Este archivo es requerido'
    isValid = false
  }

  if (personType.value === 'persona-moral' && !formData.tax_certificate) {
    errors.tax_certificate = 'Este archivo es requerido'
    isValid = false
  }

  if (!formData.other_document) {
    errors.other_document = 'Este archivo es requerido'
    isValid = false
  }

  return isValid
}

// Ejecutar reCAPTCHA
const executeRecaptcha = async () => {
  const siteKey = process.env.RECAPTCHA_SITE_KEY;
  if (!window.grecaptcha || !props.recaptchaLoaded) {
    console.error('reCAPTCHA no está cargado')
    return null
  }

  try {
    return await window.grecaptcha.execute(siteKey, { action: 'submit' })
  } catch (error) {
    console.error('Error ejecutando reCAPTCHA:', error)
    return null
  }
}

const handleSubmit = async (e) => {
  e.preventDefault()

  if (!validateForm()) {
    return
  }

  const token = await executeRecaptcha()
  if (!token) {
    alert('Error al verificar reCAPTCHA')
    return
  }

  isSubmitting.value = true

  try {
    const formPayload = new FormData()

    // Agregar token de reCAPTCHA
    formPayload.append('recaptcha_token', token)
    // Agregar datos al FormData
    formPayload.append('personType', personType.value)

    if (personType.value === 'persona-fisica') {
      formPayload.append('names', formData.names)
      formPayload.append('first_last_name', formData.first_last_name)
      formPayload.append('second_last_name', formData.second_last_name)
    } else {
      formPayload.append('company_name', formData.company_name)
      formPayload.append('legal_representative', formData.legal_representative)
    }

    formPayload.append('contact_number', formData.contact_number)
    formPayload.append('email', formData.email)
    formPayload.append(
      'sustainable_development_actions',
      formData.sustainable_development_actions
    )
    formPayload.append(
      'evidence_made_in_mexico',
      formData.evidence_made_in_mexico
    )
    formPayload.append(
      'evidence_supplies_origin',
      formData.evidence_supplies_origin
    )
    formPayload.append('identification_file', formData.identification_file)

    if (personType.value === 'persona-moral') {
      formPayload.append('tax_certificate', formData.tax_certificate)
    }

    formPayload.append('other_document', formData.other_document)

    const plainObject = Object.fromEntries(formPayload.entries());
    console.log(plainObject);

    // Enviar a backend
    /* const response = await fetch('api-endpoint', {
      method: 'POST',
      body: formPayload,
    })

    if (!response.ok) {
      throw new Error('Error al enviar el formulario')
    } */

    submitSuccess.value = true
  } catch (error) {
    console.error('Error:', error)
    errors.submit =
      'Ocurrió un error al enviar el formulario. Por favor intenta nuevamente.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <!-- Loader -->
  <Loader v-if="isSubmitting" message="Enviando tu solicitud..." />

  <div class="form relative flex flex-center w-100">
    <h1 class="text-center mb-16 clr-primary">
      Pedir autorización <br />de uso de Hecho en México
    </h1>

    <!-- Mensaje de éxito -->
    <div
      v-if="submitSuccess"
      class="text-center success full cnt flex flex-center px-content"
    >
      <div>
        <p>
          Hemos recibido tu mensaje. <br />
          El equipo de Hecho en México revisará tu solicitud para la
          autorización de uso.
        </p>
        <br />
        <br />
        <a href="/" class="btns mx-auto"><span>Regresar</span></a>
      </div>
    </div>

    <!-- FORMULARIO -->
    <form
      v-else
      id="form"
      enctype="multipart/form-data"
      class="w-100"
      @submit="handleSubmit"
    >
      <!-- Mostrar error general si existe -->
      <div v-if="errors.submit" class="alert error">
        {{ errors.submit }}
      </div>

      <!-- Tipo de persona -->
      <div class="flex mb-16 gap-16">
        <div class="input-group-radio w-50">
          <label for="person_type_individual">
            <input
              type="radio"
              name="person_type"
              id="person_type_individual"
              value="persona-fisica"
              v-model="personType"
            />
            Persona Física
          </label>
        </div>
        <div class="input-group-radio w-50">
          <label for="person_type_company">
            <input
              type="radio"
              name="person_type"
              id="person_type_company"
              value="persona-moral"
              v-model="personType"
            />
            Persona Moral
          </label>
        </div>
      </div>

      <!-- Persona Fisica -->
      <div v-if="personType == 'persona-fisica'">
        <!-- Nombre(s) -->
        <div class="input-group mb-16 w-100">
          <label for="names">Nombre(s)</label>
          <input
            type="text"
            id="names"
            name="names"
            v-model="formData.names"
            @blur="validateField('names', formData.names)"
            minlength="3"
            maxlength="200"
            required
            aria-required="true"
          />
          <span v-if="errors.names" class="error-message">{{
            errors.names
          }}</span>
        </div>

        <!-- Primer Apellido -->
        <div class="input-group mb-16 w-100">
          <label for="first_last_name">Primer Apellido</label>
          <input
            type="text"
            id="first_last_name"
            name="first_last_name"
            v-model="formData.first_last_name"
            @blur="validateField('first_last_name', formData.first_last_name)"
            minlength="3"
            maxlength="50"
            required
            aria-required="true"
          />
          <span v-if="errors.first_last_name" class="error-message">{{
            errors.first_last_name
          }}</span>
        </div>

        <!-- Segundo Apellido -->
        <div class="input-group mb-16 w-100">
          <label for="second_last_name">Segundo Apellido</label>
          <input
            type="text"
            id="second_last_name"
            name="second_last_name"
            v-model="formData.second_last_name"
            @blur="validateField('second_last_name', formData.second_last_name)"
            maxlength="20"
          />
          <span v-if="errors.second_last_name" class="error-message">{{
            errors.second_last_name
          }}</span>
        </div>
      </div>

      <!-- Persona Moral -->
      <div v-if="personType == 'persona-moral'">
        <!-- Razon Social -->
        <div class="input-group mb-16 w-100">
          <label for="company_name">Razón Social</label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            v-model="formData.company_name"
            @blur="validateField('company_name', formData.company_name)"
            minlength="3"
            maxlength="200"
            required
            aria-required="true"
          />
          <span v-if="errors.company_name" class="error-message">{{
            errors.company_name
          }}</span>
        </div>

        <!-- Representante Legal -->
        <div class="input-group mb-16 w-100">
          <label for="legal_representative_company">
            Representante Legal o Apoderado de la empresa
          </label>
          <input
            type="text"
            id="legal_representative_company"
            name="legal_representative"
            v-model="formData.legal_representative"
            @blur="
              validateField(
                'legal_representative',
                formData.legal_representative
              )
            "
            minlength="3"
            maxlength="200"
            required
            aria-required="true"
          />
          <span v-if="errors.legal_representative" class="error-message">{{
            errors.legal_representative
          }}</span>
        </div>
      </div>

      <!-- Datos de Contacto -->
      <div>
        <!-- Número de contacto -->
        <div class="input-group mb-16 w-100">
          <label for="contact_number">Número de contacto</label>
          <input
            type="tel"
            id="contact_number"
            name="contact_number"
            v-model="formData.contact_number"
            @blur="validateField('contact_number', formData.contact_number)"
            pattern="[0-9]{10,15}"
            minlength="8"
            maxlength="12"
            inputmode="numeric"
            autocomplete="tel"
            required
            aria-required="true"
          />
          <span v-if="errors.contact_number" class="error-message">{{
            errors.contact_number
          }}</span>
        </div>

        <!-- Email -->
        <div class="input-group mb-16 w-100">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="formData.email"
            @blur="validateField('email', formData.email)"
            minlength="8"
            maxlength="100"
            required
            aria-required="true"
          />
          <span v-if="errors.email" class="error-message">{{
            errors.email
          }}</span>
        </div>
      </div>

      <!-- Evidencia Producto fabricado en México -->
      <div class="input-group-file mb-16">
        <label for="evidence_made_in_mexico">
          Evidencia de que tu producto es fabricado en México
          <span class="hint"
            >(Ejemplos: Registro sanitario o de funcionamiento del
            establecimiento ante la autoridad local o estatal, entre
            otros)</span
          >
          <input
            type="file"
            name="evidence_made_in_mexico"
            id="evidence_made_in_mexico_file"
            @change="(e) => handleFileChange(e, 'evidence_made_in_mexico')"
            accept="image/png,image/jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png,.jpg,.pdf,.doc,.docx"
            required
          />
          <span v-if="errors.evidence_made_in_mexico" class="error-message">{{
            errors.evidence_made_in_mexico
          }}</span>
        </label>
      </div>

      <!-- Evidencia origen insumos -->
      <div class="input-group-file mb-16">
        <label for="evidence_supplies_origin">
          Evidencia del origen de los insumos de tu producto
          <span class="hint"
            >(Ejemplos: Facturas para insumos nacionales; Pedimentos de
            importación para insumos extranjeros)</span
          >
          <input
            type="file"
            name="evidence_supplies_origin"
            id="evidence_supplies_origin_file"
            @change="(e) => handleFileChange(e, 'evidence_supplies_origin')"
            accept="image/png,image/jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png,.jpg,.pdf,.doc,.docx"
            required
          />
          <span v-if="errors.evidence_supplies_origin" class="error-message">{{
            errors.evidence_supplies_origin
          }}</span>
        </label>
      </div>

      <!-- ODS -->
      <div class="input-group mb-16 w-100">
        <label for="sustainable_development_actions">
          Acciones afirmativas respecto al cumplimiento de uno o más Objetivos
          de Desarrollo Sostenible
          <span class="hint">
            <a
              href="https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/"
              target="_blank"
            >
              Consulta más en este enlace
            </a>
          </span>
          <textarea
            name="sustainable_development_actions"
            id="sustainable_development_actions"
            v-model="formData.sustainable_development_actions"
            @blur="
              validateField(
                'sustainable_development_actions',
                formData.sustainable_development_actions
              )
            "
            rows="3"
            required
          ></textarea>
          <span
            v-if="errors.sustainable_development_actions"
            class="error-message"
            >{{ errors.sustainable_development_actions }}</span
          >
        </label>
      </div>

      <!-- Acta constitutiva y poder legal de la empresa -->
      <div id="grupo-acta-moral">
        <div class="input-group-file mb-16">
          <div v-if="personType == 'persona-moral'">
            <span id="identification_text">
              Documento que acredite la representación de su representante legal
              o apoderado
            </span>
            <span class="hint">
              Se debe incluir el poder del representante legal o apoderado de la
              empresa, así como su identificación oficial
            </span>
          </div>
          <div v-if="personType == 'persona-fisica'">
            <span>INE, pasaporte o cédula profesional <b>(vigente)</b></span>
          </div>
          <input
            type="file"
            id="identification_file"
            name="identification_file"
            @change="(e) => handleFileChange(e, 'identification_file')"
            accept="image/png,image/jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png,.jpg,.pdf,.doc,.docx"
            required
          />
          <span v-if="errors.identification_file" class="error-message">{{
            errors.identification_file
          }}</span>
        </div>
      </div>

      <!-- Documentos Persona Moral -->
      <div v-if="personType == 'persona-moral'">
        <!-- Constancia fiscal -->
        <div id="grupo-constancia" class="input-group-file mb-16">
          <label for="tax_certificate">
            Constancia de situación fiscal
            <b>(con una vigencia no mayor a tres meses)</b>
            <input
              type="file"
              name="tax_certificate"
              id="tax_certificate_file"
              @change="(e) => handleFileChange(e, 'tax_certificate')"
              accept="image/png,image/jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png,.jpg,.pdf,.doc,.docx"
              required
            />
            <span v-if="errors.tax_certificate" class="error-message">{{
              errors.tax_certificate
            }}</span>
          </label>
        </div>
      </div>

      <!-- Otro documento -->
      <div class="input-group-file mb-16">
        <label for="other_document">
          Boceto, muestra, registro fotográfico o documentos que acrediten y
          permitan identificar el producto(s) y, en su caso, número de registro
          de su marca registrada ante el IMPI
          <input
            type="file"
            name="other_document"
            id="other_document_file"
            @change="(e) => handleFileChange(e, 'other_document')"
            accept=".zip,application/zip"
            required
          />
          <span v-if="errors.other_document" class="error-message">{{
            errors.other_document
          }}</span>
        </label>
      </div>
      <br />

      <!-- Enviar -->
      <button class="btns" type="submit" name="send" :disabled="isSubmitting">
        {{ isSubmitting ? 'Enviando...' : 'Enviar solicitud' }}
      </button>

      <br />
      <p class="alert">
        <small
          >* El peso máximo para los archivos adjuntos es de 20MB y los formatos
          permitidos son .pdf, .jpg, .doc o .docx</small
        >
      </p>
      <p class="alert">
        <small
          >* Te recomendamos en caso de que sea más de un documento el que
          quieras adjuntar, generar un archivo comprimido zip y ese archivo sea
          el que adjuntes al formulario.</small
        >
      </p>
    </form>
  </div>
</template>

<style>
.hint {
  display: block;
  color: #888;
  font-size: 0.95em;
  margin-top: 2px;
}

.error-message {
  color: #ff4444;
  font-size: 0.85em;
  display: block;
  margin-top: 5px;
}

.alert.error {
  color: #ff4444;
  background-color: #ffebee;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.success {
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 8px;
  color: #2e7d32;
}
</style>