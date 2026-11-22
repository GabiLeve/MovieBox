# MovieBox — Plataforma de Streaming (Frontend)

Aplicación web frontend que simula el catálogo y la experiencia de navegación de una plataforma de streaming de películas y series. Desarrollada originalmente como proyecto académico para la materia **Programación Web 1** (Tecnicatura en Desarrollo Web — UNLaM) y posteriormente refactorizada para optimizar su diseño *responsive* en dispositivos móviles y tablets.

## Despliegue

El proyecto se encuentra publicado y funcional en Netlify:

- **Sitio web en vivo:** [moviebox-streaming.netlify.app](https://moviebox-streaming.netlify.app/)

> **Nota para probar la aplicación:** Al tratarse de un proyecto *frontend-only* sin base de datos externa, la gestión de sesión y preferencias se simula mediante `localStorage`. Podés ingresar completando cualquier usuario y contraseña en el formulario de inicio de sesión o creando una cuenta desde la vista de registro.

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica de las distintas vistas y formularios.
- **CSS3:** Maquetación responsiva, grillas de catálogo, carruseles y adaptación a distintas resoluciones (desktop, tablet y mobile).
- **JavaScript (ES6+):** Manipulación del DOM, lógica de filtrado dinámico, validaciones de formularios en tiempo real y persistencia de datos en `localStorage`.
- **Iconografía:** Icon fonts (Font Awesome / Material Icons).

## Vistas y Funcionalidades Principales

El sitio cuenta con 7 vistas interconectadas y las siguientes características implementadas del lado del cliente:

1. **Inicio de Sesión (Login):** Validación de campos obligatorios y almacenamiento del nombre de usuario en `localStorage` para mantener la sesión activa.
2. **Recuperación de Contraseña:** Formulario con validación de email y usuario, con control dinámico del estado del botón de envío según la validez de los datos.
3. **Registro de Usuario:** Formulario completo con validaciones mediante expresiones regulares y lógica personalizada (formato de email, contraseña robusta de al menos 8 caracteres con letras, números y símbolos, validación de número de tarjeta de crédito mediante algoritmo de paridad/suma y código de seguridad).
4. **Catálogo Principal (Home):**
   - Grilla dinámica de películas y series.
   - Navegación por secciones (*Home*, *Series*, *Películas*) y cierre de sesión con limpieza de `localStorage`.
   - Buscador en tiempo real por título y filtrado combinado por categorías.
5. **Perfil de Usuario:** Visualización de los datos de la cuenta guardados en `localStorage`, actualización de contraseña y gestión/persistencia de métodos de pago (tarjeta de crédito, cupón de pago o transferencia).
6. **Detalle de Película:** Reproducción de tráiler mediante `iframe` de YouTube, ficha técnica con enlaces externos del elenco a Wikipedia y carrusel interactivo de títulos similares.
7. **Detalle de Serie:** Mismas prestaciones que la vista de película, sumando selectores encadenados donde el listado de capítulos se carga dinámicamente según la temporada elegida.
## Ejecución Local

Al estar desarrollado con HTML5, CSS3 y JavaScript puro, el proyecto no requiere instalación de dependencias ni compilación. Podés probarlo de cualquiera de estas formas:

- **Desde el repositorio:** cloná el proyecto con `git clone https://github.com/GabiLeve/MovieBox.git` y abrí el archivo `index.html` en tu navegador.
---
⌨️ Desarrollado con 🧡 por [GabiLeve](https://github.com/GabiLeve)
