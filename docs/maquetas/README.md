# ACE Perú · Maquetas de las 3 landings

Maquetas estáticas en HTML exportadas del canvas de diseño. Hay una versión móvil (390 px) y otra laptop (1440 px) por cada landing.

```
assets/   logos ACE (color y blanco). Son PNG; cambiar por el SVG oficial cuando ACE lo entregue
movil/    work-and-travel.html · trainee-internship.html · charlas.html
laptop/   work-and-travel.html · trainee-internship.html · charlas.html
```

## Sistema de marca (Manual de Marca ACE)
- Colores: Azul ACE #142E4A · Rojo ACE #BA2C27 (solo botones y acentos) · Teal #2F6B8A (apoyo) · Niebla #F2F5F8 · Negro tinta #1D201A · Blanco
- Fuentes: Outfit ExtraBold (títulos) y DM Sans 400/500/700 (texto), desde Google Fonts
- Bloques con borde inclinado (como la "A" del logo), íconos de línea simple, sin sombras ni degradados

## Pendiente de ACE (todo lo que está entre [corchetes])
Fechas de charlas y convocatoria, requisitos de inglés, puestos y empresas, logos de empleadores, número de estados, RUC, dirección, fotos y videos reales de participantes.

## Prompt sugerido para Claude Code
> Convierte estas maquetas en un sitio estático responsive (HTML + CSS + JS mínimo) listo para subir a Hostinger. Une la versión móvil y la laptop de cada landing en una sola página con media queries (diseño pensado primero para móvil). Pasa los estilos en línea a un CSS compartido con variables de color y fuentes. Haz funcionales el menú móvil, el acordeón de preguntas frecuentes, el filtro de charlas y los formularios (validación, aviso de privacidad y envío por correo o webhook). Pon el botón de WhatsApp a https://wa.me/51949447940 con un mensaje distinto por landing. Optimiza el rendimiento (imágenes WebP con lazy loading, fuentes con display=swap) y la seguridad (HTTPS, cabeceras básicas, formularios protegidos contra spam). Agrega SEO básico (title, meta description, Open Graph) y deja preparados Meta Pixel y Microsoft Clarity.
