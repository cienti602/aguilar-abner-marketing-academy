# Manual Técnico

# Marketing Digital Academy

## 1. Introducción

Este documento describe la estructura técnica y el funcionamiento interno del proyecto **Marketing Digital Academy**, desarrollado como parte de la asignatura **Desarrollo Web**.

El proyecto fue desarrollado utilizando tecnologías web del lado del cliente (Frontend), siguiendo una estructura organizada de carpetas y archivos para facilitar su mantenimiento y escalabilidad.

---

# 2. Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (ES6)
* Git
* GitHub
* Visual Studio Code

---

# 3. Estructura del proyecto

```text
marketing-digital-academy/
│
├── index.html
├── README.md
├── .gitignore
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
├── assets/
│   ├── images/
│   └── icons/
│
├── docs/
│   ├── documentacion.pdf
│   ├── manual-usuario.md
│   └── manual-tecnico.md
│
└── scrum-kanban/
    └── kanban-board.md
```

---

# 4. Descripción de los archivos

## index.html

Contiene la estructura principal del sitio web, incluyendo:

* Encabezado.
* Menú de navegación.
* Banner principal.
* Sección de cursos.
* Beneficios.
* Testimonios.
* Formulario de contacto.
* Pie de página.

---

## css/styles.css

Archivo encargado del diseño visual del sitio.

Incluye:

* Estilos generales.
* Diseño del menú.
* Tarjetas de cursos.
* Formulario.
* Pie de página.
* Diseño responsivo mediante Media Queries.

---

## js/main.js

Archivo encargado de la lógica del sistema.

Implementa:

* Eventos de clic.
* Validación del formulario.
* Mensajes de confirmación.
* Botón "Volver arriba".
* Actualización automática del año.
* Manipulación del DOM.

---

## assets/

Contiene todos los recursos gráficos utilizados por la aplicación.

### images/

Imágenes utilizadas en:

* Banner.
* Logo.
* Cursos.

### icons/

Contiene el favicon del sitio web.

---

# 5. Funcionamiento general

Cuando el usuario abre la página:

1. El navegador carga el archivo `index.html`.
2. Se aplican los estilos definidos en `styles.css`.
3. Se ejecuta `main.js`.
4. JavaScript registra los eventos y valida las acciones del usuario.

---

# 6. Flujo del formulario

1. El usuario completa los campos.
2. JavaScript verifica que ningún campo esté vacío.
3. Si falta información, muestra un mensaje de advertencia.
4. Si todos los datos son válidos, muestra un mensaje de confirmación y limpia el formulario.

---

# 7. Control de versiones

Durante el desarrollo del proyecto se utilizó Git para registrar los cambios y GitHub como repositorio remoto para almacenar y respaldar el código fuente.

Cada fase importante del proyecto fue registrada mediante commits descriptivos.

---

# 8. Compatibilidad

El proyecto es compatible con los siguientes navegadores modernos:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox

---

# 9. Posibles mejoras futuras

* Sistema de inicio de sesión.
* Base de datos para almacenar usuarios.
* Pasarela de pagos.
* Panel de administración.
* Integración con una API para gestionar cursos.
* Sistema de búsqueda avanzada.

---

# 10. Conclusión

El proyecto fue desarrollado aplicando buenas prácticas de organización, diseño web y programación con HTML, CSS y JavaScript. Además, se utilizó Git y GitHub para el control de versiones, facilitando el seguimiento de los cambios y la colaboración en el desarrollo.
