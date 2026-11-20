# Pendientes de ACE

Lista de lo que falta confirmar o entregar, y dónde se cambia cada cosa en el código. En `src/data/`, cada dato pendiente lleva el comentario `// PENDIENTE ACE:`.

## Datos de la empresa · `src/data/site.ts`

| Pendiente | Dónde se cambia |
|-|-|
| Oficina o piso exacto (hoy: Calle Bajada Balta 169, Miraflores, Lima) | `site.address.street` |
| URLs de TikTok, Facebook y LinkedIn (vacías = no se muestran) | `site.social` |
| URL del Libro de Reclamaciones (vacía = el enlace no aparece) | `site.libroReclamacionesUrl` |
| IDs de Meta Pixel y Microsoft Clarity (vacíos = no se cargan) | `site.analytics`. Al activarlos, actualizar la CSP en `public/.htaccess` |

## Work & Travel · `src/data/site.ts` y `src/data/work-travel.ts`

| Pendiente | Dónde se cambia |
|-|-|
| Confirmar la temporada que se promociona (hoy: 2027-2028) | `site.convocatoriaWT.temporada` |
| Estado de la convocatoria (`'abierta'`, `'pocos-cupos'` o `'agotada'`) | `site.convocatoriaWT.estado`: una sola línea |
| Fecha de la próxima entrevista de inglés | `site.convocatoriaWT.proximaEntrevista` |
| Puestos y tipos de trabajo definitivos | `work-travel.ts → trabajos` (fase 2) |
| Número de empleadores y estados para "N empleadores en N estados" | `work-travel.ts → trabajos.resumen` (fase 2) |

## Trainee & Internship · `src/data/trainee.ts`

| Pendiente | Dónde se cambia |
|-|-|
| Confirmar requisitos: situación académica, edad (21 a 38), carreras, duración (hasta 18 meses) | `trainee.ts → requisitos` (fase 3) |
| Nivel de inglés requerido | `trainee.ts → requisitos` (fase 3) |
| "Otras áreas" de prácticas | `trainee.ts → trabajos` (fase 3) |
| Número de empresas y estados | `trainee.ts → trabajos.resumen` (fase 3) |

## Charlas · `src/data/charlas.ts`

| Pendiente | Dónde se cambia |
|-|-|
| Fechas y horas reales de las charlas | `charlas` (fase 4) |
| Duración de la charla (la maqueta dice "60 min aprox.") | `duracionMin` de cada charla (fase 4) |
| ¿La charla tiene costo? | FAQ en `charlasPage.faq` (fase 4) |

## Fotos y videos · `src/assets/fotos/`

| Pendiente | Dónde se cambia |
|-|-|
| Fotos reales de participantes (trabajo y viaje; sin bancos de imágenes ni IA) | Copiar a `src/assets/fotos/` y agregar `src` a la foto correspondiente en `src/data/` (`hero.media`, `galeria.photos`) |
| Video corto del hero (opcional, de 1 a 2 MB como máximo) | Fase 2 |
| Imagen Open Graph de 1200×630 | Fase 5 |

## Marca · Kim (MARKIM)

| Pendiente | Detalle |
|-|-|
| Lockups W&T y T&I con el texto convertido en trazados | En `src/assets/marca/ace-wt-*.svg` y `ace-ti-*.svg`, el texto "WORK AND TRAVEL" / "TRAINEE & INTERNSHIP" es un `<text>` en DM Sans. Usado como imagen, sale con otra fuente. Hoy ninguna página los usa |
| Variantes con estrella roja sobre azul | `docs/recursos/marca/` copias 18, 22 y 23. No se copiaron porque ninguna página las usa por ahora |
