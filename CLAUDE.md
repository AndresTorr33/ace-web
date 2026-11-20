# ACE Perú · Sitio web

Sitio de presentación de **ACE (American Cultural Experiences)**, agencia peruana de intercambio cultural con más de 18 años. Promociona dos programas en EE. UU.: **Work & Travel** y **Trainee & Internship**, y sus **charlas informativas** por Zoom.

Proyecto de la agencia MARKIM (Kimberly, marketing y diseño). Desarrollo: Andrés.

Es un sitio **100 % estático**: sin backend, sin base de datos y sin panel de administración. Todo contacto termina en **WhatsApp**.

---

## Fuentes de verdad (leer antes de construir)

| Archivo | Para qué |
|-|-|
| `docs/maquetas/movil/*.html` y `docs/maquetas/laptop/*.html` | Diseño de las 3 páginas, en móvil (390 px) y laptop (1440 px). Es la referencia visual principal. |
| `docs/maquetas/README.md` | Notas del diseño. **Ojo:** su "prompt sugerido" se escribió sin todo el contexto. Si choca con este archivo, **manda este archivo** (por ejemplo: no hay envío por correo ni webhook). |
| `docs/marca/Manual_de_Marca_ACE_Peru.pptx.pdf` | Logo, colores, tipografía y tono de voz. |
| `docs/marca/contexto_ace_work_and_travel_usa_2026.md` | Datos oficiales del programa Work & Travel (requisitos, pasos, trabajos, estados). |
| `docs/marca/plan_de_marketing_ace_per_2026.md` | Estrategia, públicos y competencia. |
| `docs/recursos/marca/` | Logos oficiales de ACE: logo, isotipo A★ y lockups de Work & Travel y Trainee & Internship, en color y en blanco. Usar estos, no los de `docs/maquetas/assets/`. |
| `docs/recursos/empleadores/` | 12 logos SVG de empleadores. |

Si una maqueta y un documento de ACE no coinciden en un **dato**, gana el documento de ACE. Si no coinciden en el **diseño**, gana la maqueta.

---

## Stack

- **Astro** (salida estática, `output: 'static'`) con Node 26 LTS.
- **Tailwind CSS v4**. Los tokens de marca van en `@theme`, dentro de `src/styles/global.css`.
- **Fuentes alojadas en el propio sitio** con `@fontsource/outfit` (800) y `@fontsource/dm-sans` (400, 500, 700). Nada de Google Fonts por CDN.
- **Imágenes** con `astro:assets` (`<Image>` / `<Picture>`): AVIF/WebP, `srcset` y lazy loading, salvo la imagen del hero.
- **JS mínimo y sin frameworks** (nada de React ni Vue). La interactividad va en `<script>` de Astro con TypeScript.
- `@astrojs/sitemap` para el sitemap.
- No agregues dependencias nuevas sin preguntar antes.

## Comandos

```bash
npm run dev       # servidor local (http://localhost:4321)
npm run build     # genera dist/
npm run preview   # prueba el build
```

---

## Estructura

```
docs/                     # referencia, NO se publica
src/
  assets/
    marca/                # logos oficiales de ACE (copiados de docs/recursos/marca/)
    empleadores/          # 12 logos SVG de empleadores
    fotos/                # fotos reales de participantes (llegarán después)
  components/             # Header, Footer, Hero, StatusBar, FaqAccordion, WhatsAppForm, PhotoSlot, ...
  data/
    site.ts               # datos de contacto, legales, redes, estado de convocatoria, IDs de analítica
    work-travel.ts        # requisitos, beneficios, trabajos, pasos, FAQ
    trainee.ts            # ídem para T&I
    charlas.ts            # lista de charlas (fecha, hora, programa)
    empleadores.ts        # nombre + archivo de logo
  layouts/BaseLayout.astro
  pages/
    index.astro           # Work & Travel
    trainee-internship.astro
    charlas.astro
    privacidad.astro      # política de privacidad (página legal, no va en el menú)
  styles/global.css
public/
  .htaccess               # cabeceras de seguridad, HTTPS, caché
  robots.txt
  favicon (isotipo A★)
```

**Todo el contenido que cambia va en `src/data/`**, nunca escrito directamente en los componentes. La persona que lo actualice no debería tocar markup.

---

## Páginas y navegación

Hay **solo 3 páginas** en el menú: **Work & Travel** (`/`), **Trainee & Internship** (`/trainee-internship`) y **Charlas** (`/charlas`).

El menú también muestra **Nosotros** y **Contacto**, pero son **anclas a secciones**, no páginas:

| Enlace | En W&T y T&I | En Charlas |
|-|-|-|
| Nosotros | `#nosotros` de la misma página | `/#nosotros` |
| Contacto | `#contacto` (sección "Recibe la información") | `#contacto` (sección "Reserva tu lugar") |

El botón del header cambia en cada página: W&T → "Inscríbete a la charla" (`/charlas`); T&I → "Postula" (`#contacto`); Charlas → "Ver fechas" (`#fechas`).

En móvil, el menú es tipo hamburguesa y tiene que ser accesible (`aria-expanded`, cerrar con Esc, foco atrapado mientras está abierto).

Hay un **botón flotante de WhatsApp** en todas las páginas, con un mensaje distinto en cada una.

### Sección "Nosotros" (en W&T y T&I)

Es breve. Se hace a partir del bloque "¿POR QUÉ ACE? Una agencia cercana, con respaldo real" de la maqueta, más:

- 2 o 3 líneas sobre quién es ACE: agencia peruana con más de 18 años; representa en Perú a sponsors de EE. UU. que trabajan bajo la supervisión del Departamento de Estado; acompaña al participante en cada etapa. La misión del manual puede servir de base, resumida.
- Los 3 valores del manual: **Honestidad transparente**, **Calidad y respaldo**, **Cercanía**.
- Opcional, si queda limpio: un mini esquema de "quién hace qué": **Departamento de Estado → Sponsor en EE. UU. → ACE en Perú → Tú**. Explica el respaldo de forma transparente (ver "Agentes" en el documento de contexto).
- La oficina: Calle Bajada Balta 169, Miraflores, Lima.

El orden en W&T y T&I es: … Cómo funciona → **Nosotros / ¿Por qué ACE?** → Galería "Ellos ya lo vivieron" → Para padres y madres → Preguntas frecuentes → Contacto.

---

## Reglas de contenido (no negociables)

1. **Cero precios.** No mostrar ningún monto, abono, costo ni "desde US$". Lo pidió ACE. La pregunta "¿Cuánto cuesta y cómo pago?" se responde con: *"Te explicamos la inversión y el plan de pagos en la charla informativa o por WhatsApp."* Sí se puede decir "costos y plan de pagos claros, por escrito".
2. **Sin testimonios.** La sección "Ellos ya lo vivieron" / "Historias de éxito" es una **galería de fotos** (sin nombres ni frases inventadas).
3. **Charlas:** el bloque "Después de reservar" tiene **2 pasos**: (1) envías tu reserva por WhatsApp; (2) te respondemos con el link de Zoom. **No prometer recordatorios ni confirmaciones automáticas.**
4. **Datos de Work & Travel** (fuente: documento de ACE):
   - Edad: **de 19 a 25 años** (o cumplir 19 antes del 1 de mayo del año de la temporada). La fecha va en `site.ts`.
   - Inglés: **intermedio-alto**.
   - Estudiante de universidad o instituto licenciado por SUNEDU/MINEDU, desde 1.er ciclo, matriculado en el 2.º semestre y con vacaciones de diciembre a marzo/abril.
   - **No se necesita experiencia laboral previa.**
   - De 3 a 4 meses con visa J1, de diciembre a marzo.
   - Estados: **25 estados y Washington D.C.**
5. **Trainee & Internship** (pendiente de confirmar con ACE, usar por ahora): último ciclo, egresado o titulado; 21 a 38 años; carreras: Hotelería, Gastronomía, Contabilidad, Educación y Administración; prácticas remuneradas de hasta 18 meses; inicio en cualquier época del año.
6. **Barras de estado:**
   - W&T: se controla con `site.ts → convocatoriaWT.estado`: `'abierta'` → "Convocatoria [temporada] abierta"; `'pocos-cupos'` → "Últimos cupos"; `'agotada'` → "Cupos agotados · únete a la lista de espera". **Cambiarla tiene que ser editar una sola línea.**
   - T&I: fija, "Postulación abierta todo el año".
7. Cualquier dato pendiente se marca en `src/data/` con un comentario `// PENDIENTE ACE:` y se anota en `PENDIENTES.md` (ver abajo).

### Tono de voz (manual, sección 09)

- **Claro, cercano y respaldado.** Con los jóvenes, de tú, con frases cortas y verbos de acción (viaja, trabaja, crece). En el bloque para padres, formalidad amable, más detalle y sin emojis.
- **Siempre "más de 18 años".**
- Decir "Programa **regulado por** el Departamento de Estado de EE. UU.". **Nunca** "el Departamento de Estado nos respalda".
- **Prohibido:** "visa garantizada", "éxito garantizado", "cupos asegurados", "la número 1", "barato", "imperdible", "increíble oferta", "tour", "precio bajo".
- **Usar:** respaldo, experiencia real, acompañamiento, transparente, trayectoria, oportunidad.
- Español de Perú, con tildes y ñ correctas. Revisar la ortografía de todo texto visible (la web anterior tenía muchos errores).

---

## Sistema visual (manual de marca)

**Colores** (tokens en `@theme`):

| Token | HEX | Uso |
|-|-|-|
| `ace-blue` | `#142E4A` | Principal (~60 %): fondos de hero, títulos, footer |
| `ace-red` | `#BA2C27` | **Solo** botones principales y acentos (~10 %) |
| `ace-teal` | `#2F6B8A` | Apoyo (~5 %), nunca protagonista |
| `ace-mist` | `#F2F5F8` | Fondos de sección alternos |
| `ace-ink` | `#1D201A` | Texto oscuro alternativo |
| blanco | `#FFFFFF` | Base |

- Máximo 2 colores principales por bloque: azul + rojo como acento.
- **Tipografía:** Outfit ExtraBold para títulos, ganchos y cifras; DM Sans 400/500/700 para todo lo demás. Máximo 3 niveles por bloque. Texto alineado a la izquierda, nunca justificado. Los eyebrows ("WORK & TRAVEL USA") van en DM Sans, en mayúsculas y con espaciado amplio.
- **Forma de la marca:** bloques con un **borde inclinado** (como el trazo de la "A"). Íconos de línea simple. **Sin sombras ni degradados.**
- **Logo:**
  - Nunca deformarlo, rotarlo, agregarle sombra, cambiarle los colores ni reconstruirlo con una fuente parecida.
  - Sobre azul o rojo, la estrella va **blanca** (la roja sobre azul solo en tamaño grande).
  - Sobre fotos, usar la versión de una tinta (blanca o negra).
  - Tamaño mínimo: 72 px de ancho; por debajo de eso se usa el isotipo A★ (mínimo 24 px).
- **Logos de empleadores:** todos en **un solo tono** (gris o azul ACE, con `filter` o SVG en `currentColor`), mismo alto visual, en grilla. Que no parezca que las marcas patrocinan a ACE.

### Fotos y videos (todavía no llegan)

- Usar un componente `PhotoSlot` que reserve el espacio con `aspect-ratio` fijo (sin saltos de layout). Mientras falte la foto, muestra un bloque `ace-teal` con un ícono de cámara y una etiqueta descriptiva (por ejemplo, "Foto: participantes trabajando en un hotel").
- Cuando lleguen las fotos, deben ir en `src/assets/fotos/` y reemplazar el placeholder cambiando **solo una prop**.
- Dirección de fotos: personas reales, luz natural. Mezclar fotos de trabajo con fotos de viaje (no solo turismo). Nada de bancos de imágenes ni imágenes generadas por IA.

---

## Hero de Work & Travel (la portada)

Kim quiere que sea **más dinámico y llamativo** que la maqueta. Reglas:

- El LCP tiene que ser **texto o una imagen liviana optimizada**, nunca un video.
- Movimiento con **CSS** (paneles inclinados que entran deslizándose, el eslogan "Viaja, trabaja, crece" palabra por palabra, una franja o mosaico de fotos verticales).
- Si hay video: cargarlo después del primer render, `muted playsinline loop`, con `poster`, de 1 a 2 MB como máximo, y nunca en móvil con conexión lenta.
- Todo el movimiento se respeta con `prefers-reduced-motion: reduce` (se desactiva).
- Proponer 2 o 3 variantes antes de implementar una (usar la skill `frontend-design`).

---

## Formularios → WhatsApp (sin backend)

Los 3 formularios **no envían datos a ningún servidor**:

1. Validan en el cliente: campos obligatorios, WhatsApp peruano de 9 dígitos que empiece con 9, email válido y casilla de privacidad marcada. Los errores se muestran junto al campo con `aria-live`.
2. Arman un mensaje legible con los datos, por ejemplo:
   `Hola ACE, quiero información sobre Work & Travel.\nNombre: …\nUniversidad/instituto: …\nCorreo: …\nSoy: Estudiante`
3. Abren `https://wa.me/51949447940?text=` + `encodeURIComponent(mensaje)` en una pestaña nueva.

Además:

- Nada se guarda: ni `localStorage` ni cookies.
- **No** usar servicios de formularios, webhooks ni captcha.
- Debajo del botón: "Se abrirá WhatsApp con tu mensaje listo para enviar."
- La casilla de privacidad enlaza a `/privacidad`, una política breve conforme a la Ley 29733 que explica que los datos llegan por WhatsApp a ACE y para qué se usan. Razón social: American Cultural Experiences E.I.R.L.

| Formulario | Campos |
|-|-|
| W&T | Nombre, WhatsApp, Universidad o instituto, Correo, Soy (Estudiante / Padre o madre) |
| T&I | Nombre, WhatsApp, Carrera (select), Situación (select), Correo, LinkedIn (opcional) |
| Charlas | Nombre, WhatsApp, Correo, Charla elegida (select desde `charlas.ts`), Soy |

Si se llega a `/charlas` desde una tarjeta "Reservar mi lugar", el select de charla viene preseleccionado.

### Charlas

- Viven en `src/data/charlas.ts`: `{ id, programa: 'wt' | 'ti', fecha (ISO), hora, duracionMin, modalidad: 'Zoom' }`.
- Ocultar las charlas pasadas tanto en el build como en el cliente (por si el sitio no se recompila).
- El filtro "Todas / Work & Travel / Trainee & Internship" se hace con JS mínimo y botones accesibles (`aria-pressed`).
- "Próxima charla" en el hero = la primera futura. Si no hay ninguna, mostrar "Pronto anunciaremos nuevas fechas · Escríbenos por WhatsApp".

---

## Datos de la empresa (`src/data/site.ts`)

- WhatsApp: `51949447940` (se muestra como 949 447 940)
- Correo: `info@aceworkandtravel.com`
- Dirección: Calle Bajada Balta 169, Miraflores, Lima `// PENDIENTE ACE: confirmar oficina/piso`
- RUC: 20517866963 · American Cultural Experiences E.I.R.L.
- Instagram: `@aceworkandtravel` `// PENDIENTE ACE: confirmar URLs de TikTok, Facebook y LinkedIn`
- **Libro de Reclamaciones:** `libroReclamacionesUrl: ''` `// PENDIENTE ACE`. Si está vacío, el enlace **no se muestra**. No inventar uno.
- Analítica: `metaPixelId: ''`, `clarityId: ''`. El script **solo se carga si el ID no está vacío**. Al activarlos, actualizar la CSP.

---

## Rendimiento, accesibilidad y SEO

- **Mobile first.** Probar siempre a 390 px y a 1440 px.
- Meta en Lighthouse (móvil): **≥ 95** en Performance, Accessibility, Best Practices y SEO.
- Fuentes con `font-display: swap` y precarga solo de Outfit 800 y DM Sans 400.
- HTML semántico, `lang="es-PE"`, un solo `h1` por página, `alt` descriptivos en español y foco visible (`:focus-visible`) en todo lo interactivo.
- Contrastes: el texto blanco sobre azul, rojo o teal está bien; el **rojo sobre blanco** solo en titulares y acentos grandes, nunca en texto pequeño.
- Preguntas frecuentes con `<details>/<summary>` nativo.
- Cada página tiene `title`, `meta description`, canonical (`https://aceworkandtravel.com/...`), Open Graph y Twitter card, con una imagen OG de 1200×630 de marca.
- JSON-LD: `Organization` (o `LocalBusiness` con dirección) en el layout, y `FAQPage` en cada página con preguntas frecuentes.
- `robots.txt` y sitemap.

---

## Seguridad y despliegue

- El hosting será Hostinger o GoDaddy (Apache/LiteSpeed): se sube el contenido de `dist/` a `public_html`. **Las cabeceras van en `public/.htaccess`** (no en `_headers`):
  - Redirección a HTTPS y a una sola versión del dominio (sin `www`, salvo que se decida otra cosa).
  - `Strict-Transport-Security`, `Content-Security-Policy` (empezar con `default-src 'self'`; permitir solo lo necesario: `wa.me` no hace falta en la CSP porque es navegación; Pixel/Clarity solo si se activan), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` restrictiva y `frame-ancestors 'none'`.
  - Caché larga e inmutable para `/_astro/*` y corta para HTML.
  - Página 404 propia (`src/pages/404.astro`).
- Nada de claves ni tokens en el repo.
- Enlaces externos con `rel="noopener noreferrer"`.
- **Al migrar el DNS** (no lo hace el código, pero no hay que olvidarlo): conservar los registros **MX** del correo y el subdominio de la **Intranet**.

---

## Forma de trabajar

- Antes de construir una página, **leer sus dos maquetas** (móvil y laptop) y hacer una sola página responsive con componentes compartidos.
- Avanzar por fases y mostrar el resultado al terminar cada una:
  1. Base: proyecto, tokens, fuentes, layout, Header, Footer y WhatsApp flotante.
  2. Work & Travel.
  3. Trainee & Internship (reutilizando componentes).
  4. Charlas.
  5. Privacidad, 404, SEO, `.htaccess` y auditoría.
- Usar **Playwright** para tomar capturas a 390 y 1440 px y compararlas con las maquetas; correr Lighthouse al cerrar cada fase.
- Mantener **`PENDIENTES.md`** en la raíz con todo lo que falta de ACE (fotos, fechas, edades de T&I, redes, Libro de Reclamaciones, etc.) y dónde se cambia cada cosa.
- Commits pequeños, con mensajes en español.
- Identificadores del código en inglés y comentarios en español.
- Si algo de este archivo choca con lo que pide el usuario en el chat, **preguntar**.
