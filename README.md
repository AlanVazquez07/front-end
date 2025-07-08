# Web Hecho en México

Este proyecto es una SPA desarrollada con [Vue](https://vuejs.org/guide/introduction.html), que contiene el formulario de registro para obtener la autorizacion de las marcas de Certificación HECHO EN MÉXICO y MADE IN MEXICO.

## Especificaciones Técnicas

### Versionamiento

El versionamiento del proyecto se lleva a cabo dentro del archivo ***package.json***

```json
{
    ...
    "version": "x.y.z",
    ...
}
```

## Tecnologías Implementadas y Versiones

En la siguiente sección se enlistan las tecnologías a utilizar en el proyecto.

### Visión General

| Tecnología     | Descripción       |
| -------------- | ----------------- |
| Core           | Vue               |
| Seguridad      | reCAPTCH          |
| Pruebas        | Vitest            |
| Almacenamiento | Local, Session    |
| Despliegue     | CI/CD, NGINX      |

### Servidor - Frontend

| Tecnología                                                | Versión  | Descripción                                                                                         |
| --------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| [Vite](https://es.vite.dev/)                              |          | Herramienta de compilación                                                                 |
| [Node.js](https://nodejs.org/es/)                         | 20.11.1+ | Es un entorno de ejecución para JavaScript construido con V8, motor de JavaScript de Chrome         |
| [Vue](https://angular.io/)                                | 3.5.13   | Framework de JavaScript para desarrollo de SPA  |
| [Npm](https://www.npmjs.com/)                             | 10.2.4+  | Sistema de gestión de paquetes por defecto para Node.js                                             |
| [NGINX](https://www.nginx.com/)                           | 1.21+    | Servidor de despliegue del proyecto                                                                 |

### Herramientas de desarrollo

| Tecnología              | Descripción                                                                  |
| ----------------------- | ---------------------------------------------------------------------------- |
| Visual Studio Code      | Un entorno de desarrollo integrado (IDE) preparado para trabajar con Vue     |
| Google Chrome           | Navegador Web                                                                |
| Postman, Insomnia, etc. | Cliente REST multiplataforma                                                 |

## Estructura de archivos y directorios

El proyecto tendrá una estructura de directorio particular. A continuación se muestra un ejemplo representativo:

### Estructura del proyecto

```console
.
├── deploy
│   └── docker
├── api
│   ├── SomeService.js
│   └── Config.js
├── public
│   └── favico.ico
├── router
│   └── index.js
├── src
│   ├── assets
│   │   ├── css
|   |   ├── fonts
│   │   ├── images
│   │   └── media
│   ├── components
│   │   ├── commons
|   |   ├── someComponent
|   |   |   ├── partials
|   │   │   └── SomeComponent.vue
│   │   └── shared
│   ├── App.vue
│   └── main.js
├── .env.example
├── CHANGELOG.md
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
└── jsconfig.json
```

## Proyecto

### Perfiles configurados

| Perfil | Descripción                                                                                                                                                                                     |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Local  | Perfil que se ejecuta por **default** y tiene el objetivo de ser el área de trabajo del equipo de desarrollo.                                                                                     |
| production  | Perfil que se deberá construir el proyecto para ejecutar en cualquier servidor web. |

## Ejecución de la aplicación en local

1. Abrir una terminal en la carpeta raiz del proyecto.
2. Crear archivo **.env** y definir las variables de entorno.
    ```sh
    cp .env.example .env
    ```
3. Instalar dependencias de node.
    ```sh
    npm install
    ```
4. Ejecución del proyecto
    ```sh
    npm run dev
    ```
El proyecto se publicará en `http://localhost:5173/`

## Construcción

Para generar el empaquetado del proyecto, se ejecuta el siguiente comando:

```bash
# Utilizando npm
npm run build:production
```

El artefacto de construcción resultante será una carpeta llamada `frontend/` que se almacenarán en el directorio `dist/` en la raíz del proyecto.
