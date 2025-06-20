/******/ (() => { // webpackBootstrap
/*!******************************!*\
  !*** ./resources/js/form.js ***!
  \******************************/ // eslint-disable-next-line
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); } // eslint-disable-next-line
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); } /* eslint-disable */
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
document.addEventListener("DOMContentLoaded", function () {
  // === SECCIÓN: Definición de campos y radios principales ===
  var radioFisica = document.getElementById("person_type_individual");
  var radioMoral = document.getElementById("person_type_company");

  // Campos principales del formulario
  var inputNombre = document.getElementById("names");
  var labelNombre = document.querySelector('label[for="name_individual"]');
  var inputPrimerApellido = document.getElementById("first_last_name");
  var inputSegundoApellido = document.getElementById("second_last_name");
  var inputLegalRep = document.getElementById("legal_representative_company");
  var inputContacto = document.getElementById("contact_number");
  var inputEmail = document.getElementById("email");

  // Campo de identificación/acta/poder legal
  var grupoActaMoral = document.getElementById("grupo-acta-moral");
  var identificationText = document.getElementById("identification_text");
  var hintActaMoral = grupoActaMoral.querySelector(".hint");

  // === SECCIÓN: Extensiones permitidas para archivos ===
  var allowedExtensions = ["png", "jpg", "pdf", "doc", "docx"];
  var allowedZip = ["zip"]; // Solo para campo 'otro documento'

  // Tamaño máximo en MegaBytes de archivos adjuntos
  var MAX_FILE_SIZE_MB = 2;
  var MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024;

  // === SECCIÓN: Funciones de validación ===

  /**
   * Coloca o quita mensaje de error debajo del campo.
   */
  function setFieldError(input, msg) {
    // Quita mensaje anterior si existe
    if (input.nextElementSibling && input.nextElementSibling.classList.contains("file-error")) {
      input.nextElementSibling.remove();
    }
    // Agrega mensaje nuevo si aplica
    if (msg) {
      input.classList.add("error");
      var errorSpan = document.createElement("span");
      errorSpan.className = "file-error";
      errorSpan.style.color = "#b00";
      errorSpan.style.fontSize = "0.9em";
      errorSpan.textContent = msg;
      input.parentNode.appendChild(errorSpan);
    } else {
      input.classList.remove("error");
    }
  }

  /**
   * Valida archivo (tamaño y extensión). Da feedback inmediato.
   */
  function isValidFile(input) {
    if (input.files.length === 0) return false;
    var file = input.files[0];
    var ext = file.name.split(".").pop().toLowerCase();

    // Validar tamaño primero
    if (file.size > MAX_FILE_SIZE) {
      setFieldError(input, "Archivo demasiado grande. Máximo " + MAX_FILE_SIZE_MB + " MB.");
      input.value = "";
      return false;
    }

    // Validar extensión
    if (input.id === "other_document_file" || input.name === "other_document") {
      if (!allowedZip.includes(ext)) {
        setFieldError(input, "Solo se permite archivo ZIP para este campo.");
        input.value = "";
        return false;
      }
    } else {
      if (!allowedExtensions.includes(ext)) {
        setFieldError(input, "Archivo inválido. Solo se permiten PNG, JPG, PDF, DOC o DOCX.");
        input.value = "";
        return false;
      }
    }

    // Si todo es válido, limpia error previo
    setFieldError(input, null);
    return true;
  }

  /**
   * Valida formato de email.
   */
  function isValidEmail(email) {  // eslint-disable-next-line
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.trim());
  }

  /**
   * Valida formato de teléfono (solo números, 10-15 dígitos)
   */
  function isValidPhone(phone) {
    var re = /^[0-9]{10,15}$/;
    return re.test(phone.trim());
  }

  // === SECCIÓN: Alternancia de campos según tipo de persona ===
  function alternarCampos() {
    if (radioFisica.checked) {
      // --- Persona Física ---
      if (labelNombre) labelNombre.textContent = "Nombre(s)";
      identificationText.innerHTML = "INE, pasaporte o cédula profesional <b>(vigente)</b>";
      if (hintActaMoral) hintActaMoral.classList.add("d-none");

      // Muestra los apellidos, oculta representante legal
      inputPrimerApellido.parentElement.classList.remove("d-none");
      inputSegundoApellido.parentElement.classList.remove("d-none");
      inputLegalRep.parentElement.classList.add("d-none");

      // Asignar atributos de name para PF
      inputNombre.setAttribute("name", "names");
      inputPrimerApellido.setAttribute("name", "first_last_name");
      inputSegundoApellido.setAttribute("name", "second_last_name");
      inputLegalRep.removeAttribute("name");

      // Asignar required solo a los campos PF visibles
      inputNombre.setAttribute("required", "required");
      inputPrimerApellido.setAttribute("required", "required");
      inputSegundoApellido.removeAttribute("required"); // Opcional (puedes quitar si es requerido)
      inputLegalRep.removeAttribute("required");

      // Siempre requeridos
      inputContacto.setAttribute("required", "required");
      inputEmail.setAttribute("required", "required");
    } else {
      // --- Persona Moral ---
      if (labelNombre) labelNombre.textContent = "Razón Social";
      identificationText.textContent = "Documento que acredite la representación de su representante legal o apoderado";
      if (hintActaMoral) hintActaMoral.classList.remove("d-none");

      // Oculta apellidos, muestra representante legal
      inputPrimerApellido.parentElement.classList.add("d-none");
      inputSegundoApellido.parentElement.classList.add("d-none");
      inputLegalRep.parentElement.classList.remove("d-none");

      // Asignar atributos de name para PM
      inputNombre.setAttribute("name", "company_name");
      inputPrimerApellido.removeAttribute("name");
      inputSegundoApellido.removeAttribute("name");
      inputLegalRep.setAttribute("name", "legal_representative");

      // Quitar required de los campos ocultos, poner solo en los visibles
      inputNombre.setAttribute("required", "required");
      inputPrimerApellido.removeAttribute("required");
      inputSegundoApellido.removeAttribute("required");
      inputLegalRep.setAttribute("required", "required");

      // Siempre requeridos
      inputContacto.setAttribute("required", "required");
      inputEmail.setAttribute("required", "required");
    }
  }

  // === Eventos de radio ===
  radioFisica.addEventListener("change", alternarCampos);
  radioMoral.addEventListener("change", alternarCampos);
  alternarCampos(); // Inicializa estado correcto al cargar

  // === SECCIÓN: Validación inmediata de campos tipo file ===
  var fileInputs = Array.from(document.querySelectorAll('input[type="file"]'));
  fileInputs.forEach(function (input) {
    input.addEventListener("change", function () {
      isValidFile(input); // Valida y muestra error si aplica
    });
  });

  // === SECCIÓN: Validación inmediata de teléfono ===
  inputContacto.addEventListener("input", function () {
    if (inputContacto.value.trim() === "") {
      setFieldError(inputContacto, "Campo requerido.");
    } else if (!isValidPhone(inputContacto.value)) {
      setFieldError(inputContacto, "Debe contener solo números y entre 10 y 15 dígitos.");
    } else {
      setFieldError(inputContacto, null);
    }
  });

  // === SECCIÓN: Validación inmediata de email ===
  inputEmail.addEventListener("input", function () {
    if (inputEmail.value.trim() === "") {
      setFieldError(inputEmail, "Campo requerido.");
    } else if (!isValidEmail(inputEmail.value)) {
      setFieldError(inputEmail, "Email inválido.");
    } else {
      setFieldError(inputEmail, null);
    }
  });

  // === SECCIÓN: Validación final y envío con AJAX/reCAPTCHA en submit ===
  document.getElementById("form").addEventListener("submit", function (e) {
    var valid = true;

    // Validar archivos visibles (tamaño y extensión)
    var fileInputsVisible = fileInputs.filter(function (input) {
      return input.offsetParent !== null;
    });
    fileInputsVisible.forEach(function (input) {
      if (!isValidFile(input)) {
        valid = false;
      }
    });

    // Validar email
    if (inputEmail.value.trim() === "") {
      valid = false;
      setFieldError(inputEmail, "Campo requerido.");
    } else if (!isValidEmail(inputEmail.value)) {
      valid = false;
      setFieldError(inputEmail, "Email inválido.");
    } else {
      setFieldError(inputEmail, null);
    }

    // Validar teléfono
    if (inputContacto.value.trim() === "") {
      valid = false;
      setFieldError(inputContacto, "Campo requerido.");
    } else if (!isValidPhone(inputContacto.value)) {
      valid = false;
      setFieldError(inputContacto, "Debe contener solo números y entre 10 y 15 dígitos.");
    } else {
      setFieldError(inputContacto, null);
    }

    // Si hay errores, no envía
    if (!valid) {
      e.preventDefault();
      alert("Corrige los errores antes de continuar.");
      return;
    }

    // Envío AJAX con reCAPTCHA
    e.preventDefault();
    var formData = new FormData(this);
    var sendBtn = document.querySelector('button[name="send"]');
    if (sendBtn) sendBtn.setAttribute("disabled", true);
    grecaptcha.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var token;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return grecaptcha.execute("6LcuQdsqAAAAAIgRdKx_5I9YfVHdfsrvxAaaBV9L", {
              action: "submit"
            });
          case 1:
            token = _context.v;
            formData.append("recaptcha_token", token);
            send(formData);
          case 2:
            return _context.a(2);
        }
      }, _callee);
    })));
  });
});

// === SECCIÓN: Envío AJAX al backend ===
function send(data) {
  var fetch_status;
  fetch("send-form.php", {
    method: "POST",
    body: data
  }).then(function (response) {
    fetch_status = response.status;
    return response.json();
  }).then(function (response) {
    var errorDiv = document.querySelector(".error-server");
    var successDiv = document.querySelector(".success");
    if (fetch_status == 201 || fetch_status == 200) {
      // Oculta errores y muestra mensaje de éxito
      if (errorDiv) errorDiv.classList.add("d-none");
      if (successDiv) successDiv.classList.remove("d-none");
    } else {
      // Muestra error, oculta éxito
      if (successDiv) successDiv.classList.add("d-none");
      if (errorDiv) {
        var msg = errorDiv.querySelector(".msg-error");
        if (msg) msg.innerText = response.message;
        errorDiv.classList.remove("d-none");
      }
      // Si tienes botón de envío, habilítalo aquí
      var sendBtn = document.querySelector('button[name="send"]');
      if (sendBtn) sendBtn.removeAttribute("disabled");
    }
  })["catch"](function (error) {
    // Error inesperado: muestra error
    var errorDiv = document.querySelector(".error-server");
    var successDiv = document.querySelector(".success");
    if (successDiv) successDiv.classList.add("d-none");
    if (errorDiv) {
      var msg = errorDiv.querySelector(".msg-error");
      if (msg) msg.innerText = "Error inesperado, inténtalo de nuevo.";
      errorDiv.classList.remove("d-none");
    }
    // Habilita el botón si existe
    var sendBtn = document.querySelector('button[name="send"]');
    if (sendBtn) sendBtn.removeAttribute("disabled");
    console.error(error);
  });
}
/******/ })()
;